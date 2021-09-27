![Electron](https://miro.medium.com/max/4268/1*d2sQhcFeZ58qgSvFWBUQEA.png)
# Приложение видеоплеер на базе Electron 

### Как развернуть проект у себя 
- Клонируй репозиторий  
`git clone https://github.com/MarinaSirenko-git/electron-react-ts-video-player.git`  
- Перейди в корень  
`cd electron-react-ts-video-player`  
- Установи зависимости  
`yarn`  
- Открой окно терминала и запусти CRA  
`yarn run start`  
- Открой второе окно терминала и запусти Electron  
`yarn run electron-dev`  

### Задействованные ресурсы
1. https://www.electronjs.org/docs/latest/
2. https://medium.com/folkdevelopers/the-ultimate-guide-to-electron-with-react-8df8d73f4c97
3. http://xn--e1akicaccic2c.xn--p1ai/pdf/electron/
4. http://typescript-lang.ru/docs/

### Можно улучшить
1. Cреда настроена не оптимально - ошибки ts при добавлении типов в файлы main.js и eventsMenu.js при использовании CommonJS модулей, 
или ошибки сборки electron при использовании ES6 модулей. Возможно помогла бы [статья](https://ichi.pro/ru/react-electron-typescript-opyt-razrabotcikov-cast-2-32692456652014) или готовая [сборка](https://github.com/electron/electron-quick-start-typescript)
2. Пин у прогресс бара сейчас не наделён функционалом.
3. Магические значения в константы, ф-ии для работы с localStorage в отдельный класс.

### ТЗ 
Разработать приложение видеоплеер на базе Electron. Плеер должен уметь проигрывать как отдельные файлы, так и директорию с файлами. 

Содержание меню FIle:
- Open File - открывает диалог выбора файла с фильтрацией по типу поддерживаемых файлов
- Open Folder - открывает диалог выбора директории
- Exit - выход из программы

Контролы плеера:
- Play / Pause
- Stop
- Previous file (доступно, если открыта директория)
- Decrease playback speed
- Increase playback speed
- Next file (доступно, если открыта директория)
- Progress bar

По желанию:

Плеер запоминает открытый файл/директорию после перезапуска
Плеер запоминает позицию файла после перезапуска
Плейлист из загруженных файлов

Выполненное тестовое задание должно содержать исходный код и собранное приложение (без упаковки), которое можно запустить на платформе по вашему выбору. Большим плюсом будет наличие тестов.

Что должно быть использовано:
Electron (v12 и выше)
Typescript
React
