---
sidebar_position: 3
title: Youtube Generator
---

## Import

```js
import { YoutubeGenerator } from "embedgenerator"; //support also CommonJS syntax
```

## Embed

### supported youtube url types

|   type   | supported |
| :------: | :-------: |
|  video   |    ✅     |
| playlist |    ✅     |
|   user   |    ✅     |

### Parameters

`embed` accepts single parameters, with the following options:

```js
interface YoutubeGeneratorEmbed {
  /**
   * youtube valid url
   */
  url: string;
}

YoutubeGenerator.embed(YoutubeGeneratorEmbed): Promise<string>
```

#### url

youtube valid url.

### Exemple

```js
import { YoutubeGenerator } from "embedgenerator"; //support also CommonJS syntax

YoutubeGenerator.embed("https://www.youtube.com/watch?v=dQw4w9WgXcQ").then(
  (url) => {
    console.log(url); //output: https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1
  }
);
```
