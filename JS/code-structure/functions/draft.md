# Виды функций
-
-
-

Стрелочная функция имеет контекст своего окружения, а не свой.  
у нее нет своих аргументов (странно)
Она не может стать конструктором.  
У них нет свойства .arguments  

Single var pattern - правило записи всех переменных в начале функции

!!
От функции можно оторвать свойство и присвоить переменной. При этом его зис станет глобальный обьект.


# Hoisting  

Let не всплывает.
function declaration всплывает ВЕСЬ
function expression всплывает только объявление переменной

переменные всплывают наверх (своего скоупа - ЧТО ЭТО) 

# Замыкание 

З - это ЛО функции плюс сама функция.
Это функция, которая возвращает функцию.
передавая параметр функции, она замыкает внутри второй функции этот параметр и на него уже никак нельзя повлиять. к примеру замкнув пять, а в следующий раз передав снова пять, оно будет приплюсовывать.
В замыкании нам необходим результат внутренней функции. Иначе это что-то похожее на каррирование.

зачем надо? 
- создание приватных членов(о нем до 57 мин)


# Каррирование

# ЛО

ЛО - это доступные нам переменные на определенный момент времени. По сути это сумма доступного внутреннего и внешнего скоупа.

# This

T определяется в runtime-режиме (в процессе выполнения кода). т.е тогда, когда мы вызываем (а не определяем функцию).
T неизменный.
В глобальном контексте this - это виндоу. однако в строгом режиме - андефайнд.

единсвтенная штука, у которой скоуп - динамический.

### call bind apply

колл может не только менять контекст но и присвоить несколько параметров

в эплай все похоже на колл, но параметры передаются в качестве массива.

в байнд нотация такая же как и колл. Разница в том, что метод определяет новую функцию. а первые два способа вызывают функцию.

## самовызывающиеся функции
необходимы для быстрого создания своего скоупа. например в в свойсте объекта если нужен отдельный скоуп - создаем эту функцию, а внутрии нее - вызов ее же.


## чейнинг

фото 1.10

## самоперезаписывающиеся функции

1.11.

# ПАТТЕРНЫ
1.13 синглтон
1.15 декоратор (разные виды. напр спай, мемоизация)

читать 
https://learn.javascript.ru/advanced-functions
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures

