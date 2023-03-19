---
sidebar_position: 3
title: SoundCloud Generator
---

## Import

```js
import { SoundCloudGenerator } from "embedgenerator"; //support also CommonJS syntax
```

## Embed

### supported soundcloud url types

|   type   | supported |
| :------: | :-------: |
|  track   |    ✅     |
| playlist |    ✅     |
|  artist  |    ✅     |

### Parameters

`embed` accepts single parameters, with the following options:

```js
interface SoundCloudGeneratorEmbed {
  /**
   * soundcloud valid url
   */
  url: string;
}

SoundCloudGenerator.embed(SoundCloudGeneratorEmbed): Promise<string>
```

#### url

soundcloud valid url.

### Exemple

```js
import { SoundCloudGenerator } from "embedgenerator"; //support also CommonJS syntax

SoundCloudGenerator.embed("https%3A//api.soundcloud.com/tracks/166877736").then(
  (url) => {
    console.log(url); //output: https%3A//api.soundcloud.com/tracks/166877736
  }
);
```
