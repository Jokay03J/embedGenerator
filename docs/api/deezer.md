---
sidebar_position: 1
title: Deezer Generator
---

## Import

```js
import { DeezerGenerator } from "embedgenerator"; //support also CommonJS syntax
```

## Embed

:::caution

Deezer Generator don't work in browser because deezer use [CORS](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS).

:::

get embed url from deezer valid url.

### Supported url type

|   type   | supported |
| :------: | :-------: |
|  track   |    ✅     |
| playlist |    ✅     |
| podcast  |    ✅     |
|  artist  |    ✅     |

### Parameters

`embed` accepts single parameters, with the following options:

```js
interface DeezerGeneratorEmbed {
  /**
   * deezer valid url
   */
  url: string;
}

DeezerGenerator.embed(DeezerGeneratorEmbed): Promise<string>
```

#### url

deezer valid url.

### Exemple

```js
import { DeezerGenerator } from "embedgenerator"; //support also CommonJS syntax

DeezerGenerator.embed("https://deezer.page.link/KsnNy8jDSAzvD4GA7").then(
  (url) => {
    console.log(url); //output: https://widget.deezer.com/widget/auto/track/66677621?autoplay=false&radius=true&tracklist=true
  }
);
```
