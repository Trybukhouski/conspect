## `<form>`

Тег устанавливает форму на веб-странице,предназначенную для обмена данными между пользователем и сервером и обработки введенных данных с помощью клиентских скриптов.

### tags

__accept-charset__  
Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.  
__action__  
Адрес программы или документа, который обрабатывает данные формы.  
__autocomplete__  
Включает автозаполнение полей формы.  
__enctype__  
Способ кодирования данных формы.  
__method__  
Метод протокола HTTP.  
__name__  
Имя формы.  
__novalidate__  
Отменяет встроенную проверку данных формы на корректность ввода.  
__target__  
Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.

## `<select>`

Элемент управления, содержащий меню опций.  
Опции представлены тегом `<option>`

### Атрибуты

- __autofocus__  
Атрибут указывает, что при загрузке страницы данный элемент формы должен иметь фокус ввода, пока пользователь не переопределит это, к примеру печатая в разных элементах управления. Только один элемент формы может иметь атрибут autofocus, элемент является логическим (булевым).
- __disabled__  
Атрибут указывает, что пользователь не может взаимодействовать с элементом управления.
- __form__  
Атрибут указывает, к какой конкретно форме относится select . Это позволяет размещать элементы select где угодно в документе, а не только как потомки форм.
- __multiple__  
Атрибут указывает, что возможен выбор нескольких опций в списке. Если данный атрибут не указан, то только одна опция может быть выбрана.
- __name__  
Атрибут используется для указания имени элемента управления.
- __required__  
Атрибут указывает, что обязательно должна быть выбрана опция и которая содержит не пустую строку.
- __size__  
Если элемент управления представлен как прокручиваемый список, этот атрибут указывает количество строк в списке, которые должны быть видны за раз. Значение по умолчанию 0.

## `<video>`

Добавляет, воспроизводит и управляет настройками видеоролика на веб-странице.

### Атрибуты

__autoplay__  
Видео начинает воспроизводиться автоматически после загрузки страницы.  
__controls__  
Добавляет панель управления к видеоролику.  
__height__  
Задает высоту области для воспроизведения видеоролика.  
__width__  
Задает ширину области для воспроизведения видеоролика.
__loop__  
Повторяет воспроизведение видео с начала после его завершения.  
__poster__  
Указывает адрес картинки, которая будет отображаться, пока видео не доступно или не воспроизводится.  
__preload__  
Используется для загрузки видео вместе с загрузкой веб-страницы.  
__src__  
Указывает путь к воспроизводимому видеоролику.

## `<audio>`

Добавляет, воспроизводит и управляет настройками аудиозаписи на веб-странице.  
Путь к файлу задается через атрибут `src` или вложенный тег `<source>`

### tags

__autoplay__  
Звук начинает играть сразу после загрузки страницы.  
__controls__  
Добавляет панель управления к аудиофайлу.  
__loop__  
Повторяет воспроизведение звука с начала после его завершения.  
__preload__  
Используется для загрузки файла вместе с загрузкой веб-страницы.  
__src__  
Указывает путь к воспроизводимому файлу. Может быть заменен встроенным тегом `<source>`

## `<input>`

Тег является одним из элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.  
Тег не обязательно помещать внутрь формы, однако если введенные данные должны быть отправлены на сервер или обработаны клиентскими скриптами, это обязательно.

### Атрибуты

__accept__  
Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.  
__accesskey__  
Переход к элементу с помощью комбинации клавиш.  
__align__  
Определяет выравнивание изображения.  
__alt__  
Альтернативный текст для кнопки с изображением.  
__autocomplete__  
Включает или отключает автозаполнение.  
__autofocus__  
Устанавливает фокус в поле формы.  
__border__  
Толщина рамки вокруг изображения.  
__checked__  
Предварительно активированный переключатель или флажок.  
__disabled__  
Блокирует доступ и изменение элемента.  
__form__  
Связывает поле с формой по её идентификатору.  
__formaction__  
Определяет адрес обработчика формы.  
__formenctype__  
Устанавливает способ кодирования данных формы при их отправке на сервер.  
__formmethod__  
Сообщает браузеру каким методом следует передавать данные формы на сервер.  
__formnovalidate__  
Отменяет встроенную проверку данных на корректность.  
__formtarget__  
Определяет окно или фрейм в которое будет загружаться результат, возвращаемый обработчиком формы.  
__list__  
Указывает на список вариантов, которые можно выбирать при вводе текста.  
__max__  
Верхнее значение для ввода числа или даты.  
__maxlength__  
Максимальное количество символов разрешенных в тексте.  
__min__  
Нижнее значение для ввода числа или даты.  
__multiple__  
Позволяет загрузить несколько файлов одновременно.  
__name__  
Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать.  
__pattern__  
Устанавливает шаблон ввода.  
__placeholder__
Выводит подсказывающий текст.  
__readonly__  
Устанавливает, что поле не может изменяться пользователем.  
__required__  
Обязательное для заполнения поле.  
__size__  
Ширина текстового поля.  
__src__  
Адрес графического файла для поля с изображением.  
__step__  
Шаг приращения для числовых полей.  
__tabindex__  
Определяет порядок перехода между элементами с помощью клавиши Tab.  
__type__  
Сообщает браузеру, к какому типу относится элемент формы.  
__value__  
Значение элемента.

### Атрибут type

Значения атрибута:
- __text__  
текстовое поле 
- __email__  
имейл
- __tel__   
телефон
- __url__
URL-адрес
- __number__  
число    
Добавляет элементы управления - стрелочки
- __search__  
текст для поиска
- __datetime-local__  
Локальные дата и время  
Добавляет элементы управления: календарь и часы
- __password__  
поле с паролем    
Прячет символы под звездочки
- переключатель (radio)
- флажок (checkbox)
- скрытое поле (hidden)
- кнопка (button)
- кнопка для отправки формы (submit)
- кнопка для очистки формы (reset)
- поле для отправки файла (file)
- кнопка с изображением (image)
- Дата (date)  
Добавляет элементы управления и календарь
- Месяц и год (month)  
Добавляет элементы управления и календарь
- Номер недели (week)    
Добавляет элементы управления и календарь
- Часы и минуты (time)  
Добавляет элементы управления  
- Регулятор выбора заданных значений (range) 	 
- Поле для выбора цвета (color)

## Глобальные атрибуты

__title__  
Всплывающая подсказка

## Cпецсимволы

__&nbsp__  
Неразрывный пробел

## Определения  

__Метатеги__  
HTML-теги, предназначенные для предоставления структурированных метаданных (дополнительных, сопроводительных) о веб-странице.  
Как правило, указываются в head.

## Метатеги

### Атрибуты

- __name__	  
Имя метатега, также косвенно устанавливает его предназначение.  
- __content__	  
Устанавливает значение атрибута, заданного с помощью name или http-equiv.  
- __charset__	  
Показывает кодировку документа в HTML5.
- __http-equiv__  
Формирует заголовок страницы и определяет его обработку. Как правило, управляет действиями браузеров и используется для формирования информации, выдаваемой обычными заголовками.
