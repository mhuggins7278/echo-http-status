# [Echo Http Status Codes](http://echohttpstatus.codes) 

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
| [100](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100) | Continue ||&#10007;|
| [101](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101) | Switching Protocols ||&#10007;|
| [103](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103) | Early Hints ||&#10007;|


### Success Responses

| Status Code | Description | Supported |
| :--- | :----------- | -- |
| [200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) | OK |&check;|
| [201](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201) | Created |&check;|
| [ 202 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202) | Accepted |&check;|
| [ 203 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203) | Non-Authoritative Information |&check;|
| [204](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204) | No Content |&check;|
| [ 205 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205) | Reset Content |&check;|
| [ 206 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206)  | Partial Content |&check;|
| [ 207 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207) | Mulit-Status |&check;|
| [ 208 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208) | Already Reported |&check;|
| [ 226 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226) | IM Used |&check;|


### Redirection messages

| Status Code | Description | Supported |
| :--- | :----------- | -- |
| [ 300 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300) | Multiple Choices  |&check;|
| [ 301 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301) | Moved Permanently  |&check;|
| [ 302 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302) | Found |&check;|
| [ 303 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304) | See Other |&check;|
| [ 304 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304) | Not Modified |&check;|
| [ 305 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305) | Use Proxy |&check;|
| [ 306 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/306) | unused ||&#10007;|
| [ 307 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307) | Temporary Redirect |&check;|
| [ 308 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308)| Permanent Redirect |&check;|


### Client error responses

| Status Code | Description | Supported |
| :--- | :----------- | -- |
| [ 400 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400) | Bad Request  |&check;|
| [ 401 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400) | Unauthorized |&check;|
| [ 402 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402) | Payment Required |&check;|
| [ 403 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403) | Forbidden |&check;|
| [ 404 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404) | Not Found |&check;|
| [ 405 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405) | Method Not Allowed |&check;|
| [ 406 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406) | Not Acceptable |&check;|
| [ 407 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407) | Proxy Authentication Required |&check;|
| [ 408 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408)  | Request Timeout |&check;|
| [ 409 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409) | Conflict |&check;|
| [ 410 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410) | Gone |&check;|
| [ 411 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411) | Length Required |&check;|
| [ 412 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412) | Precondition Failed |&check;|
| [ 413 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413) | Payload Too Large |&check;|
| [ 414 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414) | URI Too Long |&check;|
| [ 415 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415) | Unsupported Media Type |&check;|
| [ 416 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416) | Range Not Satisfiable |&check;|
| [ 417 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417) | Expectation Failed |&check;|
| [ 418 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418) | I'm a teapot |&check;|
| [ 421 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421) | Misdirected Request |&check;|
| [ 422 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422) | Unprocessable Entity |&check;|
| [ 423 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423) | Locked |&check;|
| [ 424 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424) | Failed Dependency |&check;|
| [ 425 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425) | To Early |&check;|
| [ 426 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426) | Upgrade Required |&check;|
| [ 428 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428) | Precondition Required |&check;|
| [ 429 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) | Too Many Request |&check;|
| [ 431 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431) | Request Header Fields Too Large |&check;|
| [ 451 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451) | Unavailable For Legal Reasons |&check;|

### Server error responses

| Status Code | Description | Supported |
| :--- | :----------- | -- |
| [ 500 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) | Internal Server Error |&check;|
| [ 501 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501) | Not Implemented |&check;|
| [ 502 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502) | Bad Gateway |&check;|
| [ 503 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503) | Service Unavailable |&check;|
| [ 504 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504) | Gateway Timeout |&check;|
| [ 505 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505) | HTTP Version Not Supported |&check;|
| [ 506 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506) | Variant Also Negotiates |&check;|
| [ 507 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507) | Insufficient Storage |&check;|
| [ 508 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508) | Loop Detected |&check;|
| [ 510 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510) | Not Extended |&check;|
| [ 511 ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511) | Network Authentication Required |&check;|

