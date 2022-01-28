# PLUGINS CONNECTION

## Алгоритм установки плагинов

1. Загрузка плагина:  
Node.js >> `npm i -D plugin-name`

1. Импорт плагина в конфигурационный файл:  
webpack.config.js >>
    ```
    const PluginName = require('really-plugin-name');
    ```

1. Подключение плагина в конфигурационном файле
    1. webpack.config.js >> module.exports >> plugins []
    1. В массиве plugins создаем конструктор:

        ```
        new PluginName({
          code
        })
        ```
1. Установка правил загрузки для плагина
    1. webpack.config.js >> module.exports >> module >> rules []
    1. Внутри rules создаем объект с правилами для плагина.
        - в Use лучше передавать объекты