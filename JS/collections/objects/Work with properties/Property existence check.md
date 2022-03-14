# Property existence check

## Через оператор in

```
'propertyName' in objectName
```

Возвращается bool.


## Через обращение к несуществующему свойству
```
objectName.propertyName
```

Возвращается undefined.

## Через метод hasOwnProperty

```
obj.hasOwnProperty('name')
```
Возвращается bool.