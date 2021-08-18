# Lognetic for Browsers
[![npm][npm]][npm-url]
[![node][node]][node-url]
[![size][size]][size-url]


### lognetic.init
Initializes the playnix client.
```html
lognetic.init(API_KEY, { debug:Boolean });
```
API_KEY: application api key <br/>
options: configurations <br/>
options.debug: logger debug mode. True will display errors in console.


### lognetic.writeException
Sends a error exception.
```html
lognetic.writeException(error, data);
```
error (required): a JavaScript Error object <br/>
data: additional data to send(must contains values of string, number, or boolean)


### lognetic.writeMessage
Sends a custom info-level message.
```html
lognetic.writeMessage(message, data);
```
message (required): the custom message to log <br/>
data: additional data to send(must contains values of string, number, or boolean)

### lognetic.writeEvent
Sends a custom info-level message.
```html
lognetic.writeEvent(id, message, action);
```
id (required): event id <br/>
message (required): the custom message to log <br/>
category (option): event category<br/>



### lognetic.setMetaContext
Assigns custom meta data that will be sent along with each exception.
```html
lognetic.setMetaContext(data);
```
data (required): custom meta data, can be user to store user details

### lognetic.setAppVersion
Allows you to set your application version.
```html
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