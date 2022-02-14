# FUNCTION EXPRESSION

## About
...

## About NFE
- Named Function Expression.
- Это function expression, у которой есть дополнительное внутренее имя:

  ```
  let sayHI = function func() {
    // code
  }
  ```

### NFE advantages
- Позволяет функции ссылаться на саму себя, что полезно при рекурсии и др.
- Позволяет функции иметь внутреннее имя, которое нельзя переписать снаружи (оно недоступно извне) и убить функцию.

## Resources
- [learn.javascript / functions as an object](https://learn.javascript.ru/function-object)