declare module 'lognetic-browser/device.informer' {
  export default instance;
  const instance: BrowserInformer;
  class BrowserInformer {
      init(): void;
      parser: any;
      /**
       * @returns {{name:String,version:String}}
       */
      getOS(): {
          name: string;
          version: string;
      };
      /**
      * @returns {{vendor:String,model:String}}
      */
      getDevice(): {
          vendor: string;
          model: string;
      };
      /**
      * @returns {{name:String,version:String}}
      */
      getEngine(): {
          name: string;
          version: string;
      };
  }

}
declare module 'lognetic-browser/index' {
  export { default as lognetic } from "lognetic-browser/log.client";
  export { default as WebHelper } from "lognetic-browser/web.helper";
  export { default as BrowserInformer } from "lognetic-browser/device.informer";
  export { default as murmurhash3_32_gc } from "lognetic-browser/murmurhash3";

}
declare module 'lognetic-browser/log.client' {
  export default singleton;
  const singleton: BrowserLogClient;
  class BrowserLogClient {
      /**
      * @public
      * @description Initializes playnix's logging client for browsers.
      * @param {PlaynixOptions} options
      */
      public init(options: any): void;
      /**
       * @private
       */
      private _console;
      /**
       * @private
       */
      private _initialized;
      generateClientId(): void;
      _client_id: number;
      /**
       * @private
       * @param {String} msg
       * @param {String} file
       * @param {String} line
       * @param {Number} col
       * @param {Error} error
       */
      private _onerror;
      /**
       * @private
       * @param {string} action
       */
      private _onconsole;
  }

}
declare module 'lognetic-browser/murmurhash3' {
  /**
   * @param {String} key
   * @param {Number} seed
   */
  export default function murmurhash3_32_gc(key: string, seed: number): number;

}
declare module 'lognetic-browser/web.helper' {
  export default class WebHelper {
      static isLocalStorage(): boolean;
      static isSessionStorage(): boolean;
      static getScreenPrint(): string;
      static getTimeZone(): string;
  }

}
declare module 'lognetic-browser' {
  import main = require('lognetic-browser/index');
  export = main;
}