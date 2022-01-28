# Assets setup

## Устанавливаемые плагины

Не требуется

## Устанавливаемые лоадеры

- file-loader

## Настройка rules

```
{
	test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
	type: asset/resourse,
}
```

## Настройка вывода (output)

```
assetModuleFilename: 'assets/[name][ext]',
```
