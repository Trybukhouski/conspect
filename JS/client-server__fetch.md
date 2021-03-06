# Что такое fetch?
- Это функция, которая позволяет отправлять запросы на сервер.  
Эти запросы могут преследовать следующие цели:  
  - Отправка данных.
  - Получение данных.
  - Удаление данных.
  - Редактирвоание данных.
  - Отправка файлов на сервер. 
- Технология работы функции подразумевает работу с браузерным API, отвечающим за работу с сервером посредством http-запросов.

# Что принимает функция fetch?
Принимает два параметра:
- URL: адрес, по которому необходимо сделать запрос.
- объект конфигурации (опционально): объект, в котором можно настроить параметры запроса.

# Что возвращает fetch?
- Делает GET-запрос (по умолчанию).
- Возвращает promise. Fullfiled-состояние промиса содержит объект ответа.
- Promise будет fullfiled даже если сервер выдал ошибку. В этом случае надо следить за полем `ok`.  
Он перейдет в состояние rejected только если:
  - Произошел сбой сети.
  - Целенаправленная отмена через `AbortController`.
  - Др.

# Что содержит объект ответа fetch-запроса? 
- __ok__  
Информация об успешности запроса. Возвращает true/false.
- __json__  
Метод, вызов которого, возвращает результат запроса в виде json.
- __?заголовки__
- __?ответ на запрос__

# Объект конфигурации: настройка
- __Метод запроса__ 
  ```
  method: 'GET' / 'POST' / 'PUT' / 'DELETE'
  ```
- __Тело запроса__  
...
- __Заголовки__  
...
- __credentials__  
  - Поле, ?указывающее fetch использовать cookie (что позволит работать с авторизованными пользователями)
  - Использовать значение 'include'
- __signal__  
Установка слушателя абортирующего события.
- др.

# Дополнительные возможности fetch
- Прерывание fetch запроса (через объект AbortController).
- Отправка файлов на сервер (объект FormData).
- Контроль прогресса скачивания.

# Прерывание fetch запроса
Возможно прерывание fetch-запроса через объект AbortController.
- Когда это необходимо:
  - Просрочена авторизация.
  - Желание пользователя (прервать скачивание файла и др).
  - Др.
- Синтаксис:
  - Создание controller (объекта AbortController).
  - Присвоение методу методу конфигурационного объекта signal значения controller.signal.
  - Вызов controller.abort().
- Результат отмены:
  - Промис переведется в rejected;
  - В консоли выведется `The user aborted a request`

# Объект FormData
Объект, позволяющий отправлять файлы на сервер через fetch.

# Скачивание с результатом прогресса
