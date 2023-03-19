---
sidebar_position: 2
title: Spotify Generator
---

## Import

```js
import { SpotifyGenerator } from "embedgenerator"; //support also CommonJS syntax
```

## Embed

Get embed url from spotify valid url.

### Supported spotify url type

|   type   | supported |
| :------: | :-------: |
|  track   |    ✅     |
| playlist |    ✅     |
| podcast  |    ✅     |
|  artist  |    ✅     |

### Parameters

`embed` accepts single parameters, with the following options:

```js
interface SpotifyGeneratorEmbed {
  /**
   * spotify valid url
   */
  url: string;
}

SpotifyGenerator.embed(SpotifyGeneratorEmbed): Promise<string>
```

#### url

spotify valid url.

### Exemple

```js
import { SpotifyGenerator } from "embedgenerator"; //support also CommonJS syntax

SpotifyGenerator.embed(
  "https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT?si=8485dc026c1e4205"
).then((url) => {
  console.log(url); //output: https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?utm_source=oembed
});
```
