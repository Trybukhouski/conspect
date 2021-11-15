# Clone object

## Алгоритм клонирования

- Имеем клонируемый объект `cloneFromObj`;
- Создается переменная `cloneToObj` для клонируемого объекта;
- Применяется клонирование через Object.assign:

  ```
  const cloneToObj = Object.assign({}, cloneFromObj)
  ```