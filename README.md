# [echohttpstatus.codes](http://echohttpstatus.codes) 


Super simple service to test how your app handles the various http status codes.

Send me a status code as the first url parameter and I'll respond with that status code and simple body.

```sh
curl http://echohttpstatus.code/200
```
We will either respond with a string value of 
```
statusCode:value
``` 
or a JSON Object 

```json
{'statusCode': value}
```
as well as setting the statusCode for the response

## Supported Status Codes


### Information responses

| Status Code | Description | Supported |
| :--- | :----------- | -- |
| 100 | Continue |  |
| 101 | Switching Protocols |  |
| 103 | Early Hints |  |


### Success Responses

| Status Code | Description | Supported |
| :--- | :----------- | -- |
| 200 | OK |x|
| 201 | Created |x|
| 202 | Accepted |x|
| 203 | Non-Authoritative Information |x|
| [204](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204) | No Content |x|
| 205 | Reset Content |x|
| 206 | Partial Content |x|
| 207 | Mulit-Status |x|
| 208 | Already Reported |x|
| 226 | IM Used |x|


### Redirection messages

| Status Code | Description | Supported |
| :--- | :----------- | -- |
| 300 | Multiple Choices  |x|
| 301 | Moved Permanently  |x|
| 302 | Found |x|
| 303 | See Other |x|
| 304 | Not Modified |x|
| 305 | Use Proxy |x|
| 306 | unused ||
| 307 | Temporary Redirect |x|
| 308 | Permanent Redirect |x|


### Client error responses

| Status Code | Description | Supported |
| :--- | :----------- | -- |
| 400 | Bad Request  |x|
| 401 | Unauthorized |x|
| 402 | Payment Required |x|
| 403 | Forbidden |x|
| 404 | Not Found |x|
| 405 | Method Not Allowed |x|
| 406 | Not Acceptable |x|
| 407 | Proxy Authentication Required |x|
| 408 | Request Timeout |x|
| 409 | Conflict |x|
| 410 | Gone |x|
| 411 | Length Required |x|
| 412 | Precondition Failed |x|
| 413 | Payload Too Large |x|
| 414 | URI Too Long |x|
| 415 | Unsupported Media Type |x|
| 416 | Range Not Satisfiable |x|
| 417 | Expectation Failed |x|
