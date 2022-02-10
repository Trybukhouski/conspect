# LOGICAL OPERATORS

## Operators
- ИЛИ: `||`
- И: `&&`
- НЕ: `!`

# OPERATORS `||` AND `&&`

## About
- Могут применяться к любым типам данных.
- При работе с булевыми операндами возвращает булевое значение согласно логике применения логического оператора.
- При работе с небулевыми операндами рассматривает их в качестве truthy/falsy значений и возвращает результат согласно логике примененного логического оператора.
- Приоритет оператора `&&` больше, чем `||`.

## Логика применения с булевыми операндами
 - __||__
  - Возвращает true, если хотя бы одно из значений true.
- __&&__
  - Возвращает false, если хотя бы одно из значений false.

## Логика применения с небулевыми операндами
- __||__
  - Возвращает первое логически truthy значение.

    ```
    1 || 0 (Результат: 1)
    ```
  - Если все операнды falsy - возвращает значение последнего.
- __&&__
  - Возвращает первое логически falsy значение.

    ```
    1 || 0 (Результат: 0)
    ```
  - Если все операнды truthy - возвращает значение последнего.

# OPERATOR `!`

## About
- Унарный оператор.
- Может применяться с любым типом данных.
- Приводит значение к булевому типу согласно логике truthy/falsy и возвращает обратное.
- Приоритет выше чем у `||` и `&&`.