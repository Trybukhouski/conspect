# JSON

## About
- JavaScript Object Notation
- Общий формат для представления объектов и значений.
- Представляет собой строку. По-научному - JSON-форматированный или сериализованный объект.
- Используется для обмена данными.
- Поддерживает следующие типы данных:
  - Объекты
  - Массивы
  - строки
  - числа
  - true/false
  - null
- Не поддерживает следующие типы данных:
  - undefined
  - symbol
  - свойства-функции (методы)
  - комментарии

## Преобразование в/из JSON
- `JSON.stringify()` - из объекта в JSON.
- `JSON.parse()` - из JSON в объект.

## JSON.stringify

### Syntax
```
let json = JSON.stringify(value[, replacer, space])
```
- `value` - значение, которое требуется закодировать.
- `replacer` - содержит свойства для кодирования.
- `space` - устанавливает отступы согласно указанному показателю. Используется для удобочитаемости.

### Возможности replacer
- ...

## Parse
```
let value = JSON.parse(str, [reviver]);
```
- `str` - json, который необходимо декодировать.
- `reviver` - ...





## JSON.parse