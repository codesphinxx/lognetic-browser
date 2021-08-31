import {LogClient, Utils} from 'playnix-core';
import { PlaynixOptions, LoggingConfig } from 'playnix-types'
import BrowserInformer from './device.informer';
import murmurhash3_32_gc from './murmurhash3';
import WebHelper from './web.helper';

class BrowserLogClient extends LogClient
{
    /**
    * @public
    * @description Initializes playnix's logging client for browsers.
    * @param {PlaynixOptions} options
    */
    init(options)
    {        
        /**
         * @private
         */
        this._console = {};

        this.registerDeviceInformer(BrowserInformer);
        super.init(options);

        if (!this._initialized) //prevent multiple initialization
        {
            window.onerror = this._onerror.bind(this);

            if (this.options.console.log)
            {
                this._onconsole('log');
            }
            if (this.options.console.warn)
            {
                this._onconsole('warn');
            }
            if (this.options.console.error)
            {
                this._onconsole('error');
            }
        }
        /**
         * @private
         */
        this._initialized = true;
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
        console[action] = (...args) => {
            let value = '';
            for (let i of args)
            {
                value += JSON.stringify(i) + ' '
            }
            value = Utils.replaceAll(value, '"', '');
            
            if (action == LoggingConfig.LOG_ACTION.ERROR)
            {
                this.writeException(new Error(value));
            }
            else
            {
                this.writeMessage(value);
            }
            this._console[action].apply(console, args);
        };
    }
}

const singleton = new BrowserLogClient();
export default singleton;