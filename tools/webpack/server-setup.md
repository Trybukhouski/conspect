# Настройка локального сервера

__Устанавливаемые плагины:__  

- ?dev-server (использовать флаг --save-dev)
- webpack-dev-server (использовать флаг --save-dev)

__Настройка webpack.config:__

Создать новый узел:

```
  devServer: {
    static: './'
  }
```

__Настройка package.json:__

```
script: {
	"start": "npx webpack serve"
}

```

__Опции__
- Включить сервер: 
```
npm run start
```
- Отключить сервер: ctrl + C