# FUNCTION EXPRESSION

## About
- FE - это анонимная (зачастую) функция, которая явно приваивается переменной.
- Создается внутри другого выражения или синтаксической конструкции.
- Создается на этапе чтения кода.
- <<-R Имеет блочную область видимости, но может это обойти, если переменная, которой присвоена функция, объявлена за пределами блока.R->>

## Syntax
```
let sayHi = function() {
  // code
};
```






# NFE
## About NFE
- Named Function Expression.
- Это function expression, у которой есть дополнительное внутренее имя:

## Syntax

  ```
  let sayHI = function func() {
    // code
  }
  ```

## NFE advantages
- Позволяет функции ссылаться на саму себя, что полезно при рекурсии и др.
- Позволяет функции иметь внутреннее имя, которое нельзя переписать снаружи (оно недоступно извне) и убить функцию.

## Resources
- [learn.javascript / functions as an object](https://learn.javascript.ru/function-object)
- [learn-javascript / function-expression](https://learn.javascript.ru/function-expressions)