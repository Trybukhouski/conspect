# Work with other numeral systems

## From X-bits to 10-bits
- 2-bits: `0b101` >>> `5`
- 8-bits: `0o456` >>> `302`
- 16-bits: `0xff` >>> `255`
- other systems: `parseInt(num, num-system)`

## From 10-bits to X-bits
- `10-bit-num.toString(num-system)`
  - Возвращает строковое представление.
  - Диапазон от 2 до 36 битов.
  - При вызове на числе (а не на переменной) - необходимо вызывать метод через две точки.