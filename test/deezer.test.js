const { DeezerGenerator } = require("../index");

test("https://deezer.page.link/fYqRC9ty8MA3gM227 to be https://widget.deezer.com/widget/auto/track/1674114537?autoplay=false&radius=true&tracklist=true", async () => {
  expect(await DeezerGenerator.embed("https://deezer.page.link/fYqRC9ty8MA3gM227")).toBe("https://widget.deezer.com/widget/auto/track/1674114537?autoplay=false&radius=true&tracklist=true")
})