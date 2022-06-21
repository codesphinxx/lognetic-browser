declare module 'lognetic-browser/lognetic-browser/src/device.informer' {
  export default instance;
  const instance: BrowserInformer;
  class BrowserInformer extends DeviceInformer {
      parser: any;
  }
  import { DeviceInformer } from "lognetic-browser/playnix-core/src/index";

}
declare module 'lognetic-browser/lognetic-browser/src/index' {
  export { default as lognetic } from "lognetic-browser/lognetic-browser/src/log.client";
  export { default as WebHelper } from "lognetic-browser/lognetic-browser/src/web.helper";
  export { default as BrowserInformer } from "lognetic-browser/lognetic-browser/src/device.informer";
  export { default as murmurhash3_32_gc } from "lognetic-browser/lognetic-browser/src/murmurhash3";

}
declare module 'lognetic-browser/lognetic-browser/src/log.client' {
  export default singleton;
  const singleton: BrowserLogClient;
  class BrowserLogClient extends LogClient {
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
  import { LogClient } from "lognetic-browser/playnix-core/src/index";

}
declare module 'lognetic-browser/lognetic-browser/src/murmurhash3' {
  /**
   * @param {String} key
   * @param {Number} seed
   */
  export default function murmurhash3_32_gc(key: string, seed: number): number;

}
declare module 'lognetic-browser/lognetic-browser/src/web.helper' {
  export default class WebHelper {
      static isLocalStorage(): boolean;
      static isSessionStorage(): boolean;
      static getScreenPrint(): string;
      static getTimeZone(): string;
  }

}
declare module 'lognetic-browser/playnix-core/src/device.informer' {
  export default class DeviceInformer {
      init(): void;
      /**
       * @description Get the device OS
       * @returns {{name:String,version:String}}
       */
      getOS(): {
          name: string;
          version: string;
      };
      /**
      * @description Get device model details
      * @returns {{vendor:String,model:String}}
      */
      getDevice(): {
          vendor: string;
          model: string;
      };
      /**
      * @description Get runtine engine - for browser only
      * @returns {{name:String,version:String}}
      */
      getEngine(): {
          name: string;
          version: string;
      };
  }

}
declare module 'lognetic-browser/playnix-core/src/index' {
  export { default as LogClient } from "lognetic-browser/playnix-core/src/log.client";
  export { default as DeviceInformer } from "lognetic-browser/playnix-core/src/device.informer";
  export { default as PlaynixBaseClient } from "lognetic-browser/playnix-core/src/playnix.base";
  export { default as Utils } from "lognetic-browser/playnix-core/src/utils";

}
declare module 'lognetic-browser/playnix-core/src/log.client' {
  export default class LogClient {
      /**
       * @protected
       * @param {Message} message
       */
      protected _populateMessage(message: any): any;
      /**
       * @protected
       * @param {Error} error
       */
      protected _createException(error: Error): any;
      /**
      * @public
      * @description Initializes playnix's logging client.
      * @param {String} key
      * @param {PlaynixOptions} options
      */
      public init(options: any): void;
      _xhttp: XMLHttpRequest;
      /**
       * @protected
       * @param {import('lognetic-browser/playnix-core/src/device.informer').default} informer
       */
      protected registerDeviceInformer(informer: import('lognetic-browser/playnix-core/src/device.informer').default): void;
      deviceInformer: import("lognetic-browser/playnix-core/src/device.informer").default;
      /**
       * @public
       * @param {String} username
       */
      public setAppUser(username: string): void;
      _user: string;
      /**
       * @public
       * @param {String} version App version info
       */
      public setAppVersion(version: string): void;
      _user_version: string;
      /**
       * @public
       * @param {Object|Array} data
       */
      public setMetaContext(data: any | any[]): void;
      _meta: any;
      /**
      * @public
      * @param {String} message the custom message to log
      * @param {Object} data additional data to send(must contains values of string, number, or boolean)
      */
      public writeMessage(message: string): void;
      /**
      * @public
      * @param {String} id event id
      * @param {String} message event message
      * @param {String} category event action
      */
      public writeEvent(message: string, id: string, category: string): void;
      /**
      * @public
      * @param {Error} error Error object to log.
      * @param {Object} data additional data to send(must contains values of string, number, or boolean)
      */
      public writeException(error: Error, data: any): void;
  }

}
declare module 'lognetic-browser/playnix-core/src/playnix.base' {
  export default class PlaynixBaseClient {
      /**
       * @private
       * @type {String}
       */
      private token;
      /**
       * @private
       * @type {PlaynixOptions}
       */
      private options;
      /**
       * @public
       */
      public get isAuthenticated(): boolean;
      /**
      * @public
      * @description Initializes the playnix session.
      * @param {PlaynixOptions} options
      */
      public init(options: any): void;
      /**
       * @protected
       * @param {PlaynixOptions} options
       */
      protected _setup(options: any): void;
      /**
       * @public
       * @description Verifies the user social login access token
       * @param {String} sid Social prodiver user Id
       * @param {String} provider Social provider ie {Goole, Facebook}
       * @param {String} token Access token generated from social login
       */
      public authenticate(sid: string, provider: string, token: string): void;
      /**
       * @public
       * @description Saves player data
       * @param {Object} data
       */
      public saveGameData(data: any): void;
      /**
       * @public
       * @description Loads player save data
       */
      public loadGameData(): void;
      /**
       * @public
       * @description Checks player login status
       * @returns {Object} player ref
       */
      public getLoginStatus(): any;
  }

}
declare module 'lognetic-browser/playnix-core/src/utils' {
  class Utils {
      static stringify(value: any): string;
      static isLogLevel(value: any): boolean;
      static isObject(what: any): boolean;
      static isError(value: any): boolean;
      static isNull(value: any): boolean;
      /**
       * @param {String} value
       */
      static isNullOrEmpty(value: string): boolean;
      /**
       * @param {String} value
       */
      static replaceAll(value: string, searchValue: any, replaceValue: any): string;
  }
  namespace Utils {
      const PRIMITIVES: string[];
  }
  export default Utils;

}
declare module 'lognetic-browser/playnix-types/src/client' {
  export default class BaseLogClient {
      static get CONSTANTS(): Readonly<{
          LOGS: {
              INFO: string;
              WARN: string;
              ERROR: string;
          };
          LOG_ACTION: {
              MESSAGE: string;
              ERROR: string;
              EVENT: string;
          };
      }>;
      /**
       * @type {PlaynixOptions}
       */
      options: {
          debug: boolean;
          appKey: string;
          uri: string; /**
           * @type {PlaynixOptions}
           */
          method: string;
          protocol: string;
          environment: string; /**
           * @private
           */
          paths: {
              message: string;
              event: string;
              error: string;
          }; /**
           * @private
           * @type {String}
           */
          console: {
              log: boolean;
              warn: boolean;
              error: boolean;
          }; /**
           * @private
           * @type {String}
           */
      };
      /**
       * @private
       * @type {XMLHttpRequest}
       */
      private _xhttp;
      /**
       * @private
       */
      private _meta;
      /**
       * @private
       * @type {String}
       */
      private _user;
      /**
       * @private
       * @type {String}
       */
      private _user_version;
      /**
       * @private
       * @type {String}
       */
      private _client_id;
      /**
       * @private
       * @type {{category:String, message:String, timestamp:Date, data:Object}[]}
       */
      private _breadcrumbs;
      /**
       * @protected
       */
      protected _onreadystatechange(): void;
      /**
       * @protected
       * @param {Error} error
       * @returns {Exception}
       */
      protected _createException(error: Error): Exception;
      /**
       * @protected
       * @param {Message} data
       */
      protected _commit(data: Message): void;
      /**
       * @protected
       * @param {Object} breadcrumb
       * @param {String} breadcrumb.category
       * @param {String} breadcrumb.message
       * @param {Date} breadcrumb.timestamp
       * @param {Object} breadcrumb.data
       */
      protected _extractBreadcrumb(breadcrumb: {
          category: string;
          message: string;
          timestamp: Date;
          data: any;
      }): {
          category: string;
          message: string;
          timestamp: number;
          data: any;
      };
      /**
      * @protected
      * @param {Object} options
      */
      protected _validateOptions(options: any): void;
      /**
      * @public
      * @param {Object} options
      * @param {String} options.appKey
      * @param {Boolean} options.debug
      * @param {String} options.uri
      * @param {String} options.method
      * @param {String} options.protocol
      * @param {String} options.environment
      * @param {Object} options.paths
      * @param {String} options.paths.message
      * @param {String} options.paths.event
      * @param {String} options.paths.error
      * @param {Object} options.console
      * @param {Boolean} options.console.log
      * @param {Boolean} options.console.warn
      * @param {Boolean} options.console.error
      */
      public init(options: {
          appKey: string;
          debug: boolean;
          uri: string;
          method: string;
          protocol: string;
          environment: string;
          paths: {
              message: string;
              event: string;
              error: string;
          };
          console: {
              log: boolean;
              warn: boolean;
              error: boolean;
          };
      }): void;
      /**
      * @public
      * @description Sets breadcrumbs that will be attached to any outgoing message
      * @param {Object} breadcrumb Breadcrumb data
      * @param {String} breadcrumb.category
      * @param {String} breadcrumb.message
      * @param {Date} breadcrumb.timestamp
      * @param {Object} breadcrumb.data
      */
      public addBreadcrumb(breadcrumb: {
          category: string;
          message: string;
          timestamp: Date;
          data: any;
      }): boolean;
      /**
      * @public
      * @description Clear breadcrumbs
      */
      public clearBreadcrumbs(): void;
      /**
      * @public
      * @description Generate and set a unique client Id
      */
      public generateClientId(): void;
      /**
      * @public
      * @description Sends a custom info-level message.
      * @param {String} message the custom message to log
      */
      public writeMessage(message: string): void;
      /**
      * @public
      * @description Captures an event message
      * @param {String} id event id
      * @param {String} message event message
      * @param {String} category event category
      */
      public writeEvent(id: string, message: string, category: string): void;
      /**
      * @public
      * @description Sends a custom error exception.
      * @param {Error} error Error object to log.
      * @param {Object} data additional data to send(must contains values of string, number, or boolean)
      */
      public writeException(error: Error, data: any): void;
      /**
      * @public
      * @description Sets custom metadata that will be submitted with each message
      * @param {Object|Array} data custom meta data, can be user to store user details
      */
      public setMetaContext(data: any | any[]): void;
      /**
      * @public
      * @description Sets the user client version metadata
      * @param {String} version App version info
      */
      public setAppVersion(version: string): void;
      /**
      * @public
      * @description Sets the client's current user metadata
      * @param {String} username Username of the currently logged on user
      */
      public setAppUser(username: string): void;
  }
  import Exception from "lognetic-browser/playnix-types/src/exception";
  import Message from "lognetic-browser/playnix-types/src/message";

}
declare module 'lognetic-browser/playnix-types/src/config' {
  export default LoggingConfig;
  const LoggingConfig: Readonly<{
      LOGS: {
          INFO: string;
          WARN: string;
          ERROR: string;
      };
      LOG_ACTION: {
          MESSAGE: string;
          ERROR: string;
          EVENT: string;
      };
  }>;

}
declare module 'lognetic-browser/playnix-types/src/event' {
  export default class Event extends Message {
      /**
       * @param {String} id
       * @param {String} message
       * @param {String} category
       */
      constructor(id: string, message: string, category: string);
      /**
       * @type {String}
       */
      eventId: string;
      /**
       * @type {String}
       */
      category: string;
  }
  import Message from "lognetic-browser/playnix-types/src/message";

}
declare module 'lognetic-browser/playnix-types/src/exception' {
  export default class Exception extends Message {
      /**
       * @param {Error} error
       */
      constructor(error: Error, handled?: boolean);
      /**
       * @type {Boolean}
       */
      handled: boolean;
      /**
       * @type {Object[]}
       */
      stack: any[];
      /**
       * @type {Object}
       */
      extra: any;
      /**
       * @type {String}
       */
      level: string;
      addStack(error: any): void;
      description: any;
      display: any;
      number: any;
      cause: any;
      file: any;
      line: any;
      column: any;
      source: any;
  }
  import Message from "lognetic-browser/playnix-types/src/message";

}
declare module 'lognetic-browser/playnix-types/src/index' {
  export { default as BaseLogClient } from "lognetic-browser/playnix-types/src/client";
  export { default as Event } from "lognetic-browser/playnix-types/src/event";
  export { default as Exception } from "lognetic-browser/playnix-types/src/exception";
  export { default as Message } from "lognetic-browser/playnix-types/src/message";
  export { default as Response } from "lognetic-browser/playnix-types/src/response";
  export { default as LoggingConfig } from "lognetic-browser/playnix-types/src/config";
  export { default as PlaynixOptions } from "lognetic-browser/playnix-types/src/options";

}
declare module 'lognetic-browser/playnix-types/src/message' {
  export default class Message {
      /**
       * @param {String} message
       */
      constructor(message: string);
      /**
       * @type {String}
       */
      name: string;
      /**
       * @type {String}
       */
      message: string;
      /**
       * @type {Object}
       */
      device: any;
      /**
       * @type {Object}
       */
      engine: any;
      /**
       * @type {Object}
       */
      os: any;
      /**
       * @type {{category:String, message:String, timestamp:Date, data:Object}[]}
       */
      breadcrumbs: {
          category: string;
          message: string;
          timestamp: Date;
          data: any;
      }[];
      /**
       * @type {Number}
       */
      timestamp: number;
      /**
       * @type {String}
       */
      secret: string;
      /**
       * @type {String}
       */
      appVersion: string;
      /**
       * @type {String}
       */
      page: string;
      /**
       * @type {String}
       */
      clientId: string;
      /**
       * @type {String}
       */
      environment: string;
      /**
       * @type {String}
       */
      runtime: string;
      /**
       * @type {String}
       */
      user: string;
      /**
       * @type {Object}
       */
      meta: any;
      /**
       * @type {string}
       */
      get version(): string;
  }

}
declare module 'lognetic-browser/playnix-types/src/options' {
  export default PlaynixOptions;
  namespace PlaynixOptions {
      const debug: boolean;
      const appKey: string;
      const uri: string;
      const method: string;
      const protocol: string;
      const environment: string;
      const paths: {
          message: string;
          event: string;
          error: string;
      };
      const console: {
          log: boolean;
          warn: boolean;
          error: boolean;
      };
  }

}
declare module 'lognetic-browser/playnix-types/src/response' {
  export default class Response {
      /**
       * @param {String} id
       * @param {Number} status
       * @param {String} detail
       */
      constructor(id: string, status: number, detail: string);
      /**
       * @type {String}
       */
      id: string;
      /**
       * @type {String}
       */
      status: string;
      /**
       * @type {String}
       */
      detail: string;
  }

}
declare module 'lognetic-browser' {
  import main = require('lognetic-browser/index');
  export = main;
}