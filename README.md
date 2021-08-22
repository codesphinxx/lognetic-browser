# Lognetic for Browsers
[![npm][npm]][npm-url]
[![node][node]][node-url]
[![size][size]][size-url]


### lognetic.init
Initializes the lognetic client.
```js
lognetic.init(API_KEY, options);
```
API_KEY: application api key <br/>
options: configurations <br/>

#### Options

`lognetic.init` accepts these properties in the options object.

##### debug

`boolean` value to turn debug mode on or off. If debug is enabled, the SDK will attempt to print out useful 
debugging information when sending messages.
Default value is `false`.

##### console

This object allows you to specify which console actions to record. The default value is
`{ log: false, warn: false, error: true }`.

##### uri

Specifies the value for the base url that messages are sent to. This will be a server-side endpoint that will accept 
our message object.

##### method

Specifies the HTTP method used to send messages. Acceptable values are `POST`, `PUT` or `PATCH` 
since our message object is passed as a JSON body.
Default value is `POST`.

##### protocol

Specifies the HTTP protocol to use when sending messages. By default, the protocol of the current domain is used.

##### environment

`string` value to specify your release environment, such as `staging`, `production` or similar.

##### paths

The paths object allows you to specify separate endpoints for sending Messages, Events and Errors.

**Note** Paths are relative and is concatenated with the base `uri` when sending.

**Note** If null then all message types (Message, Event, Exception) are sent using the base `uri`.

##### paths.message

Specifies the relative path that messages are sent to.

##### paths.event

Specifies the relative path that events are sent to.

##### paths.error

Specifies the relative path that exceptions are sent to.

```js
lognetic.init('APP_UNIQUE_KEY', {
    debug: false,
    uri: '//example.com',
    paths: { 
        message: 'api/message',
        event: 'api/event',
        error: 'api/error' 
        },
    console: {
        log: false,
        warn: false,
        error: true
    }
    environment: 'prod'
}))
```


### lognetic.writeException
Sends a error exception.
```js
lognetic.writeException(error, data);
```
error (required): a JavaScript Error object <br/>
data: additional data to send(must contains values of string, number, or boolean)


### lognetic.writeMessage
Sends a custom info-level message.
```js
lognetic.writeMessage(message, data);
```
message (required): the custom message to log <br/>
data: additional data to send(must contains values of string, number, or boolean)


### lognetic.writeEvent
Sends a custom info-level message.
```js
lognetic.writeEvent(id, message, action);
```
id (required): event id <br/>
message (required): the custom message to log <br/>
category (option): event category<br/>


### lognetic.setMetaContext
Assigns custom meta data that will be sent along with each exception.
```js
lognetic.setMetaContext(data);
```
data (required): custom meta data, can be user to store user details


### lognetic.setAppVersion
Allows you to set your application version.
```js
lognetic.setAppVersion(version);
```
version (required): application version as string



## License

[BSD 3-Clause](./LICENSE)

[npm]: https://img.shields.io/npm/v/lognetic-browser.svg
[npm-url]: https://www.npmjs.com/package/lognetic-browser
[node]: https://img.shields.io/node/v/lognetic-browser.svg
[node-url]: https://nodejs.org
[size]: https://packagephobia.now.sh/badge?p=lognetic-browser
[size-url]: https://packagephobia.com/result?p=lognetic-browser