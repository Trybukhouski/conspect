# Draft
- Макротаски и микротаски

# Структура браузера (отвечающая за чтение кода)
- Стек вызовов  
Отвечает за построчное чтение кода.  
Работает по принципу стека.
- Browser APIs  
Отвечает за дополнительную асинхронную функциональность.
- Очередь задач  
Место хранения готового к выполнению browser APIs кода.  
Работает по принципу очереди.
- Цикл событий (event loop)  
Отвечает за правильный вызов browser APIs.

# Main
Event loop - цикл событий  
Отвечает за управление вызовами функций webAPI (т.е. с теми, которые работаю не сихнхронно).  

Очередь задач - место, в котором webAPI хранит то, что необходимо вызвать.  
Очередь работает по принципу fifo.

# Стек вызовов
Стек вызовов - это набор функций, до которых дошел интерпретатор и которые необходимо вызвать методом lifo.