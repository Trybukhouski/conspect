# HTML

__Устанавливаемые плагины:__   
- html-webpack-plugin

__Импорт плагинов:__
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
```

__Подключение плагинов:__
```
plugins: [
	new HTMLWebpackPlugin({
		template: path.resolve(__dirname, './src/template.html'), // шаблон
    filename: 'index.html', // название выходного файла
	})
]

```

__Настройка правил плагинов:__

Не требуется

# CSS

__Устанавливаемые плагины:__

- mini-css-extract-plugin

__Устанавливаемые лоадеры:__

- css-loader 

__Импорт плагинов:__
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
```

__Подключение плагина:__
```
plugins: [
	new MiniCssExtractPlugin({
	attributes: {
		filename: 'styles.css'
		}
	})
]
```

__Настройка правил лоадеров:__
```
module: {
	rules: [
		{
			test: /\.css$/i,
			use: [MiniCssExtractPlugin.loader, 'css-loader']
		}
	]
}
```

__Запись в entry-файле:__

```
import './styles.css';
```

# SCSS

Перед настройкой SASS следует настроить CSS. Описанные ниже настройки работают только вкупе с предварительно настроенным CSS.

__Устанавливаемые плагины:__

- sass

__Устанавливаемые лоадеры__

- sass-loader 

__Импорт плагина:__

Не требуется

__Подключение плагина:__

Не требуется

__Настройка правил лоадеров:__
```
module: {
	rules: [
		{
			test: /\.s[ac]ss$/i,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
		}
	]
}
```

__Запись в entry-файле:__

```
import './styles.css';
```
