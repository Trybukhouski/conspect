# VARIABLES and CONSTANTS

## What is variables?
- Переменная - это именованное хранилище данных.
- Существует два вида переменных:
  - Изменяемая (переменная).
  - Неизменяемая (константа).

## Variables and constants creating
Тип|Ключевое слово|Имя|Оп-р присваивания|Данные
---|---|---|---|---
__Переменные:__ |let / var|camelCaseName|=|data
__Константы:__ |const|camelCaseName|=|data

- Повторное объявление переменной приведет к ошибке.

## Differences var - let/const

Тип|Block LE|Redeclaration|Hoisting|Declaration in globalThis
---|---|---|---|---
__let/const__|yes|no|no|X== globalThis.property
__var__|no|yes|yes|== globalThis.property

## Naming
- Имя переменной должно содержать только буквы, цифры или символы $ и _.
- Первый символ не должен быть цифрой.
- Использовать верблюжью нотацию.
- Возможны любые языки.
- Имена регистрозависимы.
- Существуют зарезервированные имена, которые нельзя использовать в нейминге.
- Для жестко закодированных значений - использовать только заглавные буквы (Пример: номер цвета)

## Resourses

- [learn.javascript / variables](https://learn.javascript.ru/variables)
- [learn.javascript / var](https://learn.javascript.ru/var)