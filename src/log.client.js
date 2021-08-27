
import {LogClient} from 'playnix-core';
import BrowserInformer from './device.informer';
import murmurhash3_32_gc from './murmurhash3';
import WebHelper from './web.helper';
import { LoggingConfig, PlaynixOptions } from 'playnix-types';

class BrowserLogClient extends LogClient
{
    /**
    * @public
    * @description Initializes playnix's logging client for browsers.
    * @param {String} key
    * @param {PlaynixOptions} options
    */
    init(key, options)
    {
        this.registerDeviceInformer(BrowserInformer);
        super.init(key, options);
        
        window.onerror = this._onerror.bind(this);

        /**
         * @private
         */
        this._console = {};
    }

    generateClientId() 
    {
        let bar = '|';
        /**
         * @type {import('ua-parser-js')}
         */
        let parser = this.deviceInformer.parser;
        let browserData = parser.getResult();
        let userAgent = browserData.ua;
        let screenPrint = WebHelper.getScreenPrint();
        let localStorage = WebHelper.isLocalStorage();
        let sessionStorage = WebHelper.isSessionStorage();
        let timeZone = WebHelper.getTimeZone();
        let language = navigator.language;
        let systemLanguage = navigator.systemLanguage;
        let cookies = navigator.cookieEnabled;
  
        let key = userAgent + bar + screenPrint + bar + localStorage + bar + sessionStorage + bar + timeZone + bar + language + bar + systemLanguage + bar + cookies;
        let seed = 256;
        
        this._client_id = murmurhash3_32_gc(key, seed);
    }

    /**
     * @private
     * @param {String} msg 
     * @param {String} file 
     * @param {String} line 
     * @param {Number} col 
     * @param {Error} error 
     */
    _onerror(msg, file, line, col, error)
    {
        if (!error) return;
        this.writeException(error);
    }

    /**
     * @private
     * @param {string} action 
     */
    _onconsole(action)
    {        

        this._console[action] = console[action];
        console[action] = () => {
            if (action == LoggingConfig.LOG_TRIGGER.ERROR)
            {
                this.writeException(arguments);
            }
            else
            {
                this.writeMessage(JSON.stringify(arguments));
            }
            this._console[action].apply(console, arguments);
        };
    }
}

const singleton = new BrowserLogClient();
export default singleton;