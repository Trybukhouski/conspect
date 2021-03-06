# OBJECTS >> TO PRIMITIVES

# About
- Объект можно преобразовать:
  - К строке: при строковых операциях (кавычки, оператор конкатенирования, др.)
  - К числу: при математических операциях.
  - К булу : всегда `true`.
- Процессом преобразования можно управлять через специальные методы:
  - `toString`
  - `valueOf`
  - `Symbol.toPrimitive`
- Методы управления преобразованием ориентируются на хинты (тип преобразования).
- Хинт определяется исходя из типа преобразующей операции над объектом, и бывает следующих видов:
  - `"string"`: для преобразования к строке, в случае строковых операций.
  - `"number"`: для преобразования к числу, в случае математических операций.
  - `"default"`: применяется в случае, когда вариант преобразования не очевиден. В большинстве случаев использует number-преобразования.
- Методы обязаны возвращать примитив, но не обязаны возвращать указанный хинтом тип данных.

# Conversion algorithm
1. Происходит поиск в объекте метода `Symbol.toPrimitive`.
1. Если метод обнаруживается, то ему передается хинт, а затем выполняется код из указанного метода по манипуляции именно над этим хинтом.
1. Если метод не обнаруживается, то последующие действия определяются хинтом.
1. Если хинт равен `"string"`, то:
  - вызывается `obj.toString()`, если он есть.
  - иначе вызывается `obj.valueOf()`, если он есть.
1. Если хинт равен `"number"` или "default"
  - вызывается `obj.valueOf()`, если он есть.
  - иначе вызывается `obj.toString()`, если он есть.