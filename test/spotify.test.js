const { SpotifyGenerator } = require("../index")

test("http://open.spotify.com/track/298gs9ATwr2rD9tGYJKlQR", async () => {
  expect(await SpotifyGenerator.embed("http://open.spotify.com/track/298gs9ATwr2rD9tGYJKlQR")).toBe("https://open.spotify.com/embed/track/298gs9ATwr2rD9tGYJKlQR?utm_source=oembed")
})