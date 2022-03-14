# START LINE

## Start line in http-response
- __protocol__  
Версия http-протокола.
- __Код состояния__

Пример:  
_HTTP/1.1 200 OK_
protocol | state
---|---
HTTP/1.1|200 OK

## Start line in http-request
- __method__  
Http-метод: get, post, put, delete, др.
- __path__  
Часть URL-адреса, на который происходит обращение.
- __protocol__  
Версия http-протокола.

Пример:  
_GET	/tutorials/other/top-20-mysql-best-practices/	HTTP/1.1_
method | path | protocol
---|---|---
GET|/tutorials/other/top-20-mysql-best-practices/|HTTP/1.1