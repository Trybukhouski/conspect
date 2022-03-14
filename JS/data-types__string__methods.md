# WORK WITH STRING

## Экранирование
- ...

## Format
- Изменение регистра: 
  - `str.toUpperCase()`
  - `str.toLowerCase()`

## Work with symbols

## Search substr
- `str.indexOf(substr, pos)` - поиск подстроки str начиная с позиции pos / возвращает -1 в случае ненахождения.
- `str.lastIndexOf(substr, pos)` - поиск подстроки str начиная с позиции pos / возвращает -1 в случае ненахождения.
- `str.includes(substr, pos)` - поиск подстроки str начиная с позиции pos / возвращает бул.
- `str.startsWith(substr)` - проверка, начинается ли строка с substr.
- `str.endsWith(substr)` - проверка, заканчивается ли строка на substr.

## Receive substr
- `str.slice(start [, end])` - возврат подстроки от start до (не включая) end.  
Можно задавать отрицательные значения. Тогда поиск происходит справа налево.
- `str.substring(start [, end])` - метод аналогичен slice со следующими отличиями: 
    - аргументы можно "путать".
    - отрицательные значения равны нулю.
- `str.substr(start [, length])` - возвращает строку от start длиной length.

- `str[n]` - возвращает символ из строки.
- `str.charAt(n)` - возвращает символ из строки.
- `for(let char of str) {}` - перебор строки посимвольно

## Tools
- Длина строки: `str.length`
- Убрать пробелы по концам: `str.trim()`
- Повторить строку n раз: `str.repeat(n)`