### embedGenerator
this package create embed url with link

### Supported site
-youtube embed(with video url)
-spotify embed(with music or playlist link)
-deezer widget(with music or playlist link)

### sample exemple
# youtube
```js
const { YoutubeGenerator } = require("embedgenerator")

YoutubeGenerator.embed("https://www.youtube.com/watch?v=dQw4w9WgXcQ").then((res) => {
  console.log("youtube embed: " + res);
  //output: https://youtube.com/embed/dQw4w9WgXcQ
})
```

# spotify
```js
const { SpotifyGenerator } = require("embedgenerator")

SpotifyGenerator.embed("https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT?si=8485dc026c1e4205").then((res) => {
  console.log("spotify embed: " + res);
  //output: https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?utm_source=oembed
})
```

# deezer(not full supported)
```js
const { DeezerGenerator } = require("embedgenerator")

DeezerGenerator.embed("https://deezer.page.link/KsnNy8jDSAzvD4GA7").then((res) => {
  console.log("deezer widget: " + res);
  //output: https://widget.deezer.com/widget/auto/track/66677621?autoplay=false&radius=true&tracklist=true
})
```

### How to contribute
You can contribute with fork this project and add pull request

### Run test
You can run test with :
```
npm run test
```

### Licence
This project is under licence ISC