# CONTEXT

## About
Контекст выполнения функции – специальная внутренняя структура данных, которая содержит информацию о вызове функции. Она включает:
- Конкретное место в коде, на котором находится интерпретатор.
- Локальные переменные функции.
- Значение this.
- Др.

## Context types
- Глобальный
- Контекст исполнения функции

## How context work
- На текущий момент может быть только одним.
- Принцип хранения контекстов - стек: каждый новый контекст попадает в него поверх старого и начинает исполняться вплоть до завершения или до появления нового контекста.
- <<-R В какой момент создается? R->>

## How to change context in functions
- call
- bind
- apply

# Call / Apply

## About
- Встроенные методы функции, явно устанавливающиe значение this.

## Syntax
```
func.call(context [, arg1, arg2, ...])
func.apply(context [, args])
```
- __context__: контекст, в котором нужно выполнить код (то, куда ссылается this).
- __argN__: параметры функции.
- __args__: псевдомассив.

## Features
- Позволяют применить механизм заимствования метода.

## Resourсes
- [learn.javascript.ru](https://learn.javascript.ru/recursion)
- [learn.javascript / decorators](https://learn.javascript.ru/call-apply-decorators)
- [nuancesprog.ru](https://nuancesprog.ru/p/2539/)