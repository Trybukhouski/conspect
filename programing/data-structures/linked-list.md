# LINKED LIST

## About
- Элемент связанного списка имеет свойства:
  - value
  - next – свойство, ссылающееся на следующий элемент связанного списка или null, если это последний элемент.
  - prev - (опционально) свойство, ссылающееся на предыдущий элемент связанного списка.
  - tail - (опционально) свойство, которое ссылается на последний элемент списка.

## How to create

### Way 1
```
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
```

### Way 2
```
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
```

## Add element

### В начало
- Нужно обновить первый элемент списка:

  ```
  list = { value: "new item", next: list };
  ```

## Delete element

### Из середины
- Нужно изменить значение next предыдущего элемента:

  ```
  list.next = list.next.next;
  ```
    - list.next перепрыгнуло с 1 на значение 2. Значение 1 теперь исключено из цепочки.
    - Если оно не хранится где-нибудь ещё, оно будет автоматически удалено из памяти.

## Tail (property)
...

## Advantages
- Быстрая вставка/удаление элементов.

## Disadvantages
- Нет быстрого доступа к элементам.

## Resourсes
- [learn.javascript.ru](https://learn.javascript.ru/recursion)