---
sidebar_position: 3
---
# Youtube Generator

## YoutubeGenerator
```js
const { YoutubeGenerator } = require("embedgenerator"); //support also ES6 syntax
```
Main Class for Youtube Generator

## embed
  
```js
const { YoutubeGenerator } = require("embedgenerator"); //support also ES6 syntax

YoutubeGenerator.embed("https://www.youtube.com/watch?v=dQw4w9WgXcQ").then((url) => {
  console.log(url); //output: https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1
});
```
return: ```Promise<YoutubeWidgetUrl>```