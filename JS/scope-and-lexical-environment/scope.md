# Scope

## Что такое Scope

Scope (область видимости) определяет видимость или доступность переменной или функции в той или иной области кода.  

S определяется ДО выполнения кода.

Границами Scope являются:
- границы функции
- границы блока (блочный Scope) - область кода, отделенная фигурными скобками.

## Виды Scope

Деление 1:
- Локальный  
- Глобальный

Деление 2:
- Статический
- Динамический

## Локальный Scope

Распространяется на переменные и функции, находящиеся внутри функции или блока.  
Эти переменные не видны за пределами своей области.  
Каждый вызов функции, даже одной и той же, создает свой S.  
Переменные, объявленные в ЛокS, называются локальными.

## Глобальный Scope

Распространяется на переменные и функции, находящиеся за пределами функции или блока.    
Элементы ГлS являются свойствами объекта window. Как следствие, далее ГлS ничего нет. 
Объявление переменных в ГлS считается плохой практикой. Это связано с тем, что переменную ГлS можно изменить из любой части кода.   
Переменные, объявленные в ГлS, называются глобальными.
В случае необходимости объявления такой переменной - следует использовать Namespace.

## Статический Scope

Вид S, по которому очевидно, в каком окружении он будет выполнен. 
В JS весь S статический, кроме случаев с использованием `this`. 
Второе название - лексический.  

## Динамический Scope

Вид S, который определяется в процессе вызова функции.  
В JS единственный случай использования динамического S - это случаи с использованием `this`.

## Свойства Scope

- Наследование
- Затемнение

## Механизмы, основанные на Scope

- Hoisting (>>)
- Контекст (>>)
- Лексическое окружение (>>)
- Замыкание

## Наследование Scope

ЛокS унаследован от вышестоящего S. Как следствие, он имеет доступ к вышестоящему ЛокS и далее вплоть до ГлS.   
ГлS не имеет доступ к ЛокS.

## Затемнение Scope
 
При одинаковом названии переменных в ЛокS и вышестоящим S, доступна будет переменная из ЛокS - она "затемняет" вышестоящую и является приоритетной. 

## Namespace

Namespace - это отдельный объект в ГлS, который хранит все глобальные переменные.  
Его необходимость обясняется тем, что наличие переменных в ГлS нежелательно. Как следствие, их унифицированное хранение в одном месте минимизирует эту проблему.
стараться не создавать глобальных переменных. или использовать namespace - отдельный объект для глобальных переменных в window.

## Определение Scope у переменных

- __const / let__: ЛокS определяется ближайшими фигурными скобками.  
Т.е. у них может быть свой отдельный S внутри функции.
- __var__: ЛокS определяется ближайшей функцией.

## Scope chain

[[Scope]] - это скрытое внутреннее свойство функции, которое она получает во время вызова. Данное свойство содержит ссылку на ту область видимости, в которой данная функция была объявлена.  
Данное свойство создает цепочки областей видимости (Scope chain). Это создает механизм поиска переменной по цепочке:  
Scope chain: {ЛокS} >>[[Scope]]>> {} >>[[Scope]]>> {} >>[[Scope]]>> {ГлS}