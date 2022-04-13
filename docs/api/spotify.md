---
sidebar_position: 2
---
# Spotify Generator

## SpotifyGenerator
```js
const { DeezerGenerator } = require("embedgenerator"); //support also ES6 syntax
```
Main Class for Spotify Generator

## embed
  
```js
const { SpotifyGenerator } = require("embedgenerator"); //support also ES6 syntax

SpotifyGenerator.embed("https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT?si=8485dc026c1e4205").then((url) => {
  console.log(url); //output: https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?utm_source=oembed
});
```
parameter: ```url spotify```<br />
return: ```Promise<SpotifyWidgetUrl>```