# Merge objects

## Алгоритм слияния

- Имеем несколько объектов `objFirst`, `objSecond`, `objThird`;
- Создается переменная `commonObj` для общего объекта;
- Применяется метод слияния через Object.assign: 
const commonObj = Object.assign(objFirst, objSecond, objThird)

__Примечание__  
В качестве объекта может выступать массив: в качестве ключей ему будут проставлены числа - порядковые номера свойств.