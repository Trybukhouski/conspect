# Object transformation

## Объект => массив ключей свойств

- Через Object.keys:  
  ```
  Object.keys(obj)
  ```

- Через цикл for_in:
  - Имеем объект obj
  - Создаём пустой массив arr
  - Создаем пустой цикл for...in:

    ```
    for (let el in obj) {}
    ```
  - Наполняем тело цикла:
    ```
    obj.hasOwnProperty(el) ? arr.push(el) : false
    ```


## Объект => массив значений свойств

- Через Object.values(obj):

  ```
  Object.values(obj)
  ```

## Объект => массив свойств

- Через Object.entries(obj):

  ```
  Object.entries(obj)
  ```
  Свойства представляют собой массив ключа и значения.