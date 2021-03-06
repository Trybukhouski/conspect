## React-хуки

Хуки - это предоставляемые реактом ПОЛНОСТЬЮ ИЗОЛИРОВАННЫЕ функции.  
Начинаются со слова use.

## Стандартные хуки

- useState()
- useEffect()
- useRef()
- useMemo()
- useCallback()
- useContext()

## Как работать с хуками?

- C хуками удобно работать через деструктуризацию.
- Хуки можно использовать только на верхнем уровне вложенности компонента (нельзя вкладывать в функции, условия, циклы).
- если State - объект, то изменение одного его свойства через функцию перезапишет ВЕСЬ объект. Для перезаписи конкретного свойства необходимо использовать особый синтаксис.

## Собственные хуки

Можно создавать собственные хуки.  





## useState

- МАССИВ, предназначенный для управления состоянием компонента.
- Принимает два аргумента: состояние и функцию, это состояние изменяющее.
- Функция - уже готовая. В (скобках) она принимает то, как должно измениться состояние. Пр: `value + 1`

## useEffect

- Вызывается каждый раз, когда происходит рендер компонента: либо всего, либо его части, указанной в depth. Т.е. это наблюдатель, слушатель.
- Принимает два аргумента: callback-функцию, массив deps (зависимости)
- Callback-функция описывает то, что должно произойти в компоненте при его рендере.
- deps - массив, в котором указывается, от чего должен зависеть данный useEffect. Т.е. callback будет вызываться только в том случае, если изменится переданный в массиве...
- Синтаксис:

  ```
  const name = useEffect(() => {}, []);
  ```

## useRef

- value - это объект, а не значение.
- У value есть свойство current, которое и содержит значение value.
- Благодаря тому, что value это объект, current сохраняет текущее состояние, а при его изменении не вызывается рендер компонента.
- Также позволяет сохранять предыдущее состояние компонента. [Подробнее](https://www.youtube.com/watch?v=9KJxaFHotqI&list=PLzDKw_ayjiGiSFfv9PE182IzmZpjLMDVf&index=12)
- useRef очень похож на useState, и их ключевое отличие - именно в отсутствии перерисовки (рендера) компонента при изменении значения хука.
- Синтаксис:
  ```
  const name = useRef(value);
  ```
ТАКЖЕ
- хук позволяет взаимодействовать с DOM-элементом. [Подробнее](https://www.youtube.com/watch?v=9KJxaFHotqI&list=PLzDKw_ayjiGiSFfv9PE182IzmZpjLMDVf&index=12)

## useMemo

- Позволяет закешировать данные в функции.  
Это позволяет закешировать некоторые ненужные вычисления внутри функции, тем самым оптимизируя производительность при рендеринге.
- Принимает callback, который принимает в себя вычисления, которые необходимо закешировать.
- Вторым аргументом принимает массив значений, от которых зависит переданное в функции вычисление.
- Кешировать все подряд не нужно - только в случаях необходимости.

## useCallback

- Кеширует данные точно так же, как и useMemo.
- Отличие от useMemo: возвращает не результат функции, а саму функцию (поэтому и такое название)

## useContext
- Принимает контекст, состояние которого нам необходимо получить.
- Синтаксис:

  ```
  useContext(contextName)
  ```