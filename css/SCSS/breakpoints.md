# Breakpoints

## Алгоритм создания

### 1. Создаем переменные с breakpoints-точками

Пример для desktop-first:  
```
$screen-sm-max: 576px;  
$screen-md-max: 768px;  
$screen-l-max: 992px;  
$screen-xl-max: 1200px;
```
Пример для mobile-first:
```
$screen-sm-min: 576px;  
$screen-md-min: 768px;  
$screen-l-min: 992px;  
$screen-xl-min: 1200px;
```

### 2. Создаем миксины на основе переменных.

```
@mixin s {
   @media (max-width: #{$screen-sm-max}) {
       @content;
   }
}

@mixin md {
   @media (max-width: #{$screen-md-max}) {
       @content;
   }
}

@mixin l {
   @media (max-width: #{$screen-l-max}) {
       @content;
   }
}

@mixin xl {
   @media (max-width: #{$screen-xl-max}) {
       @content;
   }
}
```

### 3. Используем миксины на элементах для модификации стилей

```
.container {
  padding: 0 40px;

  @include l {
    padding: 0 30px;
  }

  @include s {
    padding: 0 20px;
  }
}
```

## Рекомендации (персональные)

- Определение всех миксинов, переменных и шаблонов производим в отдельном файле `_breakpoints.scss` в папке `abstracts`.
- BP для конкретного компонента указываем в самом файле-модуле этого компонента.  
Мы не создаем дополнительный общий файл для всех стилей.