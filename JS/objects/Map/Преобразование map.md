# Преобразование Map в Object

## Object >>> Map

```
let map = new Map(Object.entries(obj));
```

## Map >>> Object

Преоборазование происходит через свойство объекта fromEntries.

```
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries())
```