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
| 100 | [ Continue ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100) ||&#10007;|
| 101 | [ Switching Protocols ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101)  ||&#10007;|
| 103 | [ Early Hints ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103)  ||&#10007;|


### Success Responses

| Status Code | Description | Supported |
| :--- | :----------- | -- |
| [200](./200) | [ OK ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) |&check;|
| [201](./201) | [ Created ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201) |&check;|
| [ 202 ](./202) | [ Accepted ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202) |&check;|
| [ 203 ](./203) | [ Non-Authoritative Information ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203)|&check;|
| [204](./204) | [ No Content ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204) |&check;|
| [ 205 ](./205) | [ Reset Content ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205) |&check;|
| [ 206 ](./206)  | [ Partial Content](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206) |&check;|
| [ 207 ](./207) | [ Mulit-Status ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207)|&check;|
| [ 208 ](./208) | [ Already Reported](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208) |&check;|
| [ 226 ](./226) | [ IM Used](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226)|&check;|

### Redirection messages

| Status Code | Description | Supported |
| :--- | :----------- | -- |
| [ 300 ](./300) | [ Multiple Choices  ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300) |&check;|
| [ 301 ](./301) | [ Moved Permanently  ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301) |&check;|
| [ 302 ](./302) | [ Found ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302) |&check;|
| [ 303 ](./304) | [ See Other ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304) |&check;|
| [ 304 ](./304) | [ Not Modified ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304) |&check;|
| [ 305 ](./305) | [ Use Proxy ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305) |&check;|
| 306 | [ unused ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/306) ||&#10007;|
| [ 307 ](./307) | [ Temporary Redirect ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307) |&check;|
| [ 308 ](./308)| [ Permanent Redirect ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308) |&check;|


### Client error responses

| Status Code | Description | Supported |
| :--- | :----------- | -- |
| [ 400 ](./400) | [ Bad Request  ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400) |&check;|
| [ 401 ](./400) | [ Unauthorized ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400) |&check;|
| [ 402 ](./402) | [ Payment Required ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402) |&check;|
| [ 403 ](./403) | [ Forbidden ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403) |&check;|
| [ 404 ](./404) | [ Not Found ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404) |&check;|
| [ 405 ](./405) | [ Method Not Allowed ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405) |&check;|
| [ 406 ](./406) | [ Not Acceptable ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406) |&check;|
| [ 407 ](./407) | [ Proxy Authentication Required ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407) |&check;|
| [ 408 ](./408)  | [ Request Timeout ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) |&check;|
| [ 409 ](./409) | [ Conflict ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409) |&check;|
| [ 410 ](./410) | [ Gone ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410) |&check;|
| [ 411 ](./411) | [ Length Required ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411) |&check;|
| [ 412 ](./412) | [ Precondition Failed ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412) |&check;|
| [ 413 ](./413) | [ Payload Too Large ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413) |&check;|
| [ 414 ](./414) | [ URI Too Long ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414) |&check;|
| [ 415 ](./415) | [ Unsupported Media Type ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415) |&check;|
| [ 416 ](./416) | [ Range Not Satisfiable ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416) |&check;|
| [ 417 ](./417) | [ Expectation Failed ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417) |&check;|
| [ 418 ](./418) | [ I'm a teapot ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418)|&check;|
| [ 421 ](./421) | [ Misdirected Request ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421) |&check;|
| [ 422 ](./422) | [ Unprocessable Entity ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422) |&check;|
| [ 423 ](./423) | [ Locked ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423) |&check;|
| [ 424 ](./424) | [ Failed Dependency ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424) |&check;|
| [ 425 ](./425) | [ To ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425) Early |&check;|
| [ 426 ](./426) | [ Upgrade Required ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426) |&check;|
| [ 428 ](./428) | [ Precondition Required ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428) |&check;|
| [ 429 ](./429) | [ Too Many Request ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) |&check;|
| [ 431 ](./431) | [ Request Header Fields Too Large ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431) |&check;|
| [ 451 ](./451) | [ Unavailable For Legal Reasons ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451) |&check;|

### Server error responses

| Status Code | Description | Supported |
| :--- | :----------- | -- |
| [ 500 ](./500) | [ Internal Server Error ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) |&check;|
| [ 501 ](./501) | [ Not Implemented ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501) |&check;|
| [ 502 ](./502) | [ Bad Gateway ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502) |&check;|
| [ 503 ](./503) | [ Service Unavailable ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503) |&check;|
| [ 504 ](./504) | [ Gateway Timeout ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504) |&check;|
| [ 505 ](./505) | [ HTTP Version Not Supported ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505) |&check;|
| [ 506 ](./506) | [ Variant Also Negotiates ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506) |&check;|
| [ 507 ](./507) | [ Insufficient Storage ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507) |&check;|
| [ 508 ](./508) | [ Loop Detected ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508) |&check;|
| [ 510 ](./510) | [ Not Extended ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510) |&check;|
| [ 511 ](./511) | [ Network Authentication Required ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511) |&check;|

