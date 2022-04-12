---
sidebar_position: 1
---

welcome in embed generator docs !
embed generator is simple embed url generator

|   site  |         type        | supported  |
|:-------:|:-------------------:|:----------:|
| spotify |   tracklist,track   |     ✅     |
|  deezer |   tracklist,track   |     ✅     |
| youtube | playlist,video,live |     ✅     |
| soundcloud | playlist,track   |     ✅     |

## Installation
```bash
npm install --save embedgenerator
```
## Exemples

### Deezer
```js
const { DeezerGenerator } = require("embedgenerator"); //support also ES6 syntax

Deezergenerator.embed("https://deezer.page.link/KsnNy8jDSAzvD4GA7").then((url) => {
  console.log(url); //output: https://widget.deezer.com/widget/auto/track/66677621?autoplay=false&radius=true&tracklist=true
});
```
### Spotify
```js
const { SpotifyGenerator } = require("embedgenerator"); //support also ES6 syntax

SpotifyGenerator.embed("https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT?si=8485dc026c1e4205").then((url) => {
  console.log(url); //output: https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?utm_source=oembed
});
```
### Youtube
```js
const { YoutubeGenerator } = require("embedgenerator"); //support also ES6 syntax

YoutubeGenerator.embed("https://www.youtube.com/watch?v=dQw4w9WgXcQ").then((url) => {
  console.log(url); //output: https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1
});
```

//TODO: add exemple for soundcloud