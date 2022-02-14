# GLOBAL OBJECT

## About
- Это объект, содержащий переменные и функции, доступные из любого места программы.
- В разных средах:
  - браузер: `window`
  - Node.js: `global`
  - стандартизированное имя: `globalThis`
- Хранит ключевые функции языка.  
Пример: `Array`, `innerHeight` и др.

## Properties of global Object
- К свойствам глобального объекта можно обращаться напрямую:
  - `window.alert('hi')` => `alert('hi')`
- Записать свойство в глобальный объект:
  - Правильный вариант - напрямую:

    ```
    window.newProp = 5;
    ```
  - Неправильный вариант - через var:

    ```
    var newProp = 5;
    window.newProp;  //5
    ```

## Resources
- [learn.javascript / global-object](https://learn.javascript.ru/global-object)