---
sidebar_position: 2
title: Getting Started
---

:::info

Since 2.0.2 embedGenerator is compatible ESM and CJS.

:::

:::warning

You must have Node.js >=16 to use embedGenerator.

:::

welcome in embed generator docs !<br/>
embed generator is simple embed url generator

|    site    |             type              | supported |
| :--------: | :---------------------------: | :-------: |
|  spotify   |     playlist,track,artist     |    ✅     |
|   deezer   | playlist,track,artist,podcast |    ✅     |
|  youtube   |   playlist,video,live,user    |    ✅     |
| soundcloud |     playlist,track,artist     |    ✅     |

## Installation

```bash
npm install --save embedgenerator
```

## Exemples

### Deezer

```js
import { DeezerGenerator } from "embedgenerator"; //support also CommonJS syntax

DeezerGenerator.embed("https://deezer.page.link/KsnNy8jDSAzvD4GA7").then(
  (url) => {
    console.log(url); //output: https://widget.deezer.com/widget/auto/track/66677621?autoplay=false&radius=true&tracklist=true
  }
);
```

### Spotify

```js
import { SpotifyGenerator } from "embedgenerator"; //support also CommonJS syntax

SpotifyGenerator.embed(
  "https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT?si=8485dc026c1e4205"
).then((url) => {
  console.log(url); //output: https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?utm_source=oembed
});
```

### Youtube

```js
import { YoutubeGenerator } from "embedgenerator"; //support also CommonJS syntax

YoutubeGenerator.embed("https://www.youtube.com/watch?v=dQw4w9WgXcQ").then(
  (url) => {
    console.log(url); //output: https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1
  }
);
```

### SoundCloud

```js
import { SoundCloudGenerator } from "embedgenerator"; //support also CommonJS syntax

SoundCloudGenerator.embed("https%3A//api.soundcloud.com/tracks/166877736").then(
  (url) => {
    console.log(url); //output: https%3A//api.soundcloud.com/tracks/166877736
  }
);
```
