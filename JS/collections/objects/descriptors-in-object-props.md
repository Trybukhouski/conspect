# DESCRIPTORS IN OBJECT PROPS

## About descriptors in object props
- Свойства объектов имеют дескрипторы.
- Дескрипторы свойств объектов представлены в виде объектов, содержащих (в зависимости от типа свойства):
  - флаги
  - значение свойства
  - функции
- Через дескрипторы можно получать  информацию о свойствах и изменять их.

## Work with properties throw descriptor
- Вернуть дескриптор свойства:

  ```
  Object.getOwnPropertyDescriptor(obj, 'propertyName');
  ```
- Вернуть дескрипторы всех свойств объекта:

  ```
  Object.getOwnPropertyDescriptors(obj).
  ```
  - Возвращает дескрипторы в т.ч. символьных и неперечислимых свойств.
- Изменить дескриптор свойства:

  ```
  Object.defineProperty(obj, 'propertyName', descriptor);
  ```
  - Если указанное свойство не существует - оно создастся с указанными в дескрипторе значениями флагов, отсутствующим флагам будет присвоено false.
  - Если указанное свойство сущетвует - оно обновит указанные флаги, остальные не тронет.
- Изменить дескрипторы нескольких свойств:

  ```
  Object.defineProperties(obj, {
    prop1: descriptor1,
    prop2: descriptor2
  });
  ```
- Запретить добавление свойств в объект:
  ```
  Object.preventExtensions(obj)
  ```
  - Проверить, включен ли режим: `Object.isExtensible(obj)`.  
  Возвращает бул.
- Запретить добавление/удаление свойств в объект:
  
  ```
  Object.seal(obj)
  ```
  - Устанавливает configurable: false для всех существующих свойств.
  - Проверить, влючен ли режим: `Object.isSealed(obj)`.  
  Возвращает бул.
- Запретить добавление/удаление/изменение свойства объекта:

  ```
  Object.freeze(obj)
  ```
  - Устанавливает configurable: false, writable: false для всех существующих свойств.
  - Проверить, влючен ли режим: `Object.isFrozen(obj)`.  
  Возвращает бул.
- _Сокращения:_
  - __obj__: объект, из которого получаем информацию.
  - __'propertyName'__: имя свойства, из которого возвращаем дескриптор.
  - __descriptor__: применяемый дескриптор

## Resources
- Me: /
- [learn.javascript.ru](https://learn.javascript.ru/property-descriptors)