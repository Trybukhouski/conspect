# LIFEHACKS

## Создание "чистого словаря"
- "Чистый словарь" - это объект без прототипа.
- Объект без прототипа - это объект без `__proto__` и создаваемых им проблем.
- Синтаксис:

  ```
  Object.create(null)
  ```