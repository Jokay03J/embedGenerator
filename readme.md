[![Version package](https://badgen.net/npm/v/embedgenerator)](https://npmjs.com/package/embedgenerator)
[![DL TOTAL](https://badgen.net/npm/dt/embedgenerator)](https://npmjs.com/package/embedgenerator)
[![LATEST RELEASE](https://badgen.net/github/release/jokay03J/embedgenerator)](https://npmjs.com/package/embedgenerator)
[![ALL CONTRIBUTOR](https://badgen.net/github/contributors/jokay03J/embedgenerator)](https://npmjs.com/package/embedgenerator)
[![Test code](https://github.com/Jokay03J/embedGenerator/actions/workflows/main.yml/badge.svg)](https://github.com/Jokay03J/embedGenerator/actions/workflows/main.yml)\
[![NPM](https://nodei.co/npm/embedgenerator.png)](https://nodei.co/npm/embedgenerator/)

# embedGenerator

this package create embed url with link

# documentation

embedgenerator is documented in [here](https://jokay03j.github.io/embedGenerator/)

# Supported site

|  site   |        type         |      supported       |
| :-----: | :-----------------: | :------------------: |
| spotify |   tracklist,track   |          ✅          |
| deezer  |   tracklist,track   | ✅(**only on node**) |
| youtube | playlist,video,live |          ✅          |

# exemples:

## youtube

```js
import { YoutubeGenerator } from "embedgenerator";

YoutubeGenerator.embed("https://www.youtube.com/watch?v=dQw4w9WgXcQ").then(
  (url) => {
    console.log(url);
    //output: https://youtube.com/embed/dQw4w9WgXcQ
  }
);
```

## spotify

```js
import { SpotifyGenerator } from "embedgenerator";

SpotifyGenerator.embed(
  "https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT?si=8485dc026c1e4205"
).then((url) => {
  console.log(url);
  //output: https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?utm_source=oembed
});
```

## deezer

```js
import { DeezerGenerator } from "embedgenerator";

DeezerGenerator.embed("https://deezer.page.link/KsnNy8jDSAzvD4GA7").then(
  (url) => {
    console.log(url);
    //output: https://widget.deezer.com/widget/auto/track/66677621?autoplay=false&radius=true&tracklist=true
  }
);
```

# How to contribute

You can contribute with fork this project.

## Make changelog

After you have finished your work, you must make a changelog using `npx changeset`.  
After you have make your changelog create a pull request **with your commited changelog inside .changeset**.  
That it !

# Run test

```
npm run test
```

# Licence

This project is under licence MIT
