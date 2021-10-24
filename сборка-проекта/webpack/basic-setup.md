# Установка  и базовая настройка WP

1. Инициализируем проект:  
node.js >> `npm init -y`
1. Устанавливаем wp-пакеты:
    -	webpack (отвечает за корневой функционал):  
    `npm install --save-dev webpack`
    -	webpack-cli (отвечает за команды, доступные в консоли):  
    `npm install --save-dev webpack-cli`
1. Настраиваем скрипты сборки в package.json:

    ```
    "scripts": {
      "dev": "webpack --mode development"
      "build": "webpack --mode production"
    }
    ```
1. Создаем конфигурационный файл (хранит конфигурацию проекта):  
webpack.config.js >>

    ```
    const path = require('path');
    module.exports = {}
    ```
1. Настраиваем точку входа (entry)  
    - Если точка входа - одна:  
    webpack.config.js >>  
      ```
      main: path.resolve(__dirname, './src/index.js')
      ```
    - Если точек входа - несколько:

      ```
      entry: {
        имя точки: 'относительный адрес',
        имя точки: 'относительный адрес',
      }
      ```
1. Настраиваем точку вывода (output)  
    ```
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
    }
    ```
    ** filename - название общего файла, аккумулирующего все файлы.  
      - Если мы имеем одну точку входа:

        ```
        filename: 'имя файла'
        ```  
        Как правило, это bundle.js
      - Если мы имеем несколько точек входа:

        ```
        filename: '[name].[contenthash].js'
        ```
    ** path - место, куда складываются аккумулирующие файлы.

        ```
        path: path.resolve(__dirname, './dist')
        ```
    dist - это папка, в которую будут складываться все файлы проекта.

1. Запускаем WP:
    - ?Добавляем скрипт запуска:
      ```
      "scripts": {
          "build": "webpack"
      }
      ```
    - Запускаем:
    node.js >> `npm run build`