# OBJECTS >> PRIMITIVES with Symbol.ToPrimitives

# About
- Универсальный метод для обработки всех вариантов хинтов в объекте.
- Метод принимает аргумент-хинт, и выполняет описанную в методе логику, предназначенную для этого хинта.

# Syntax
```
let obj = {
  [Symbol.toPrimitive](hint) {
    // conversion logic
  }
}
```

# Examples
- [obj >> sting/number (with Symbol.toPrimitives)](https://replit.com/@Trybukhouski/Objectsto-primitiveSymboltoPrimitive#script.js)