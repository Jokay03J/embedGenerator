---
sidebar_position: 1
---
# Deezer Generator

## DeezerGenerator
```js
const { DeezerGenerator } = require("embedgenerator"); //support also ES6 syntax
```
Main Class for Deezer Generator

## embed

supported types

|         type        | supported  |
|:-------------------:|:----------:|
|        track        |     ✅     |
|       playlist      |     ✅     |
|       podcast       |     ✅     |
```js
const { DeezerGenerator } = require("embedgenerator"); //support also ES6 syntax

DeezerGenerator.embed("https://deezer.page.link/KsnNy8jDSAzvD4GA7").then((url) => {
  console.log(url); //output: https://widget.deezer.com/widget/auto/track/66677621?autoplay=false&radius=true&tracklist=true
});
```
parameter: ```url deezer```<br />
return: ```Promise<DeezerWidgetUrl>```