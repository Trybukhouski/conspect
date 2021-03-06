# ADD AND DELETE ELEMENTS

## Добаление элементов
- `arr.push` - добавляет элемент в конец массива. Может добавлять несколько элементов.
- `arr.unshift` - добавляет элемент массива в начало, сдвигая остальные элементы. Может добавлять несколько элементов.
- Через `splice` (в отдельном разделе).
- Через `concat` (в отдельном разделе).

## Удаление элементов
- `arr.pop` - удаляет последний элемент массива.
- `arr.shift` - удаляет первый элемент массива.
- `arr.length = 0` - удаление всех элементов массива (очистка).
- Через `splice` (в отдельном разделе).

## Splice

### Common
- Универсальный метод, позволяющий:
  - Добавлять элементы.
  - Удалять элементы.
  - Заменять элементы.
- Возвращает удаленный массив.
- Модифицирует изначальный массив.
- Допускает в аргументах отрицательные значения.

### Syntax
```
arr.splice(index[, deleteCount, elem1, ..., elemN])
```
- index - индекс элемента, с которого нужно начинать удаление.
- deleteCount - удаляемая длина.
- elem - элементы для вставки в удаленное место. В случае, если вставленных элементов меньше, чем удаленных, пустые места схлопываются.

## Concat

### Common
- Метод, позволяющий добавить:
  - новые элементы
  - другой массив (элементы из массива "поднимаются" и вставляются как отдельные элементы).
- Возвращает новый массив, исходный не модифицируется.

### Syntax
```
arr.concat(arg1, arg2...)
```