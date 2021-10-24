# Настройка локального сервера

__Устанавливаемые плагины:__  

- dev-server

__Настройка webpack.config:__

Создать новый узел:

```
devServer: {
	contentBase: path.join(__dirname, 'dist'),
	open: true,
	port: 3000,
}
```

__Настройка package.json:__

script:

```
"start": "npx webpack serve"

```


Устанавливаем модуль dev-server
npm install --save-dev webpack-dev-server
Добавляем узел  devServer в webpack.config
devServer: {
	contentBase: path.join(__dirname, 'dist'),
	open: true,
	port: 3000,
}
Добавить в package.json новый script 
"serve": "./node_modules/.bin/webpack serve"
? или "start": "npx webpack serve"
Запуск сервера
npm run serve
Отключить сервер: ctrl + C