# SETINTERVAL AND SETTIMEOUT

## About
- `setTimeout` - метод, позволяющий вызвать функцию один раз через определённый интервал времени.
- `setInterval` - метод, позволяющий вызывать функцию регулярно, повторяя вызов через определённый интервал времени.  
Данный метод можно заменить рекурсивным `setTimeout`.
- Функции возвращают id таймера.
- Функции можно "убить" через `clearTimeout` / `clearInterval`.
- Являются асинхронными: при их вызове - выпадают из потока и возвращаются в него через eventloop.
- Не является частью спецификации JS.

## Syntax
```
setTimeout(func [, timer, arg1, arg2, ...])

setInterval(func [, timer, arg1, arg2, ...])
```
- __func__ - функция, которую необходимо выполнить через указанное время. Не вызывается.
- __timer__ - значение таймера в милисекундах.
- __argN__ - аргументы, которые передаются в func.  
Они не указываются в func, т.к. func не вызывается.

# CLEARTIMEOUT AND CLEARINTERVAL

## About
- Методы, позволяющие в любой момент прекратить работу функций `setTimeout`/`setInterval` соответственно.

## Syntax
```
let timerID = setTimeout(...);
clearTimeout(timerID);

let timerID = setInterval(...);
clearInterval(timerID);
```

## Resource
- [learn.javascript / settimeout](https://learn.javascript.ru/settimeout-setinterval)