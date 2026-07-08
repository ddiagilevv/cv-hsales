# Danila Diagilev — Resume Site

Статический сайт-резюме. Без сборки — чистые HTML/CSS/JS, деплоится на Vercel как есть.

## Деплой на Vercel

1. Положи файлы (`index.html`, `styles.css`, `script.js`, `vercel.json`) в корень репозитория.
2. На vercel.com → **Add New... → Project** → выбери этот репозиторий.
3. Framework Preset: **Other** (или Vercel определит сам как статический сайт).
4. Build Command / Output Directory — оставь пустыми (не нужны).
5. Deploy.

## Локальный просмотр

Просто открой `index.html` в браузере, либо через локальный сервер:

```bash
npx serve .
```
