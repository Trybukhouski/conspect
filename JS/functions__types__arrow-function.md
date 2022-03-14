# ARROW FUNCTION

## About
- Используется для небольшого кода, который следует выполнять в текущем контексте (без собственного).

## Syntax
```
let func = (arg1, arg2, ...argN) => expression
```
- Если у нас только один аргумент, то круглые скобки вокруг параметров можно опустить.
- При сложных выражениях - обернуть expression в фигурные скобки и указать инструкцию return.

## Features
- Отсутствует this.
  - невозможно использовать в качестве конструктора (`new`).
- Отсутствует arguments.
- Отсутствует super.

## Resources
- [learn.javascript / arrow-function](https://learn.javascript.ru/arrow-functions-basics)
- [learn.javascript / arrow-function-more](https://learn.javascript.ru/arrow-functions)