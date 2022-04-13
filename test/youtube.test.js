const { YoutubeGenerator } = require("../index")

test("https://www.youtube.com/watch?v=SeMNJlfBJdE to https://www.youtube.com/embed/SeMNJlfBJdE?feature=oembed",async () => {
  expect(await YoutubeGenerator.embed("https://www.youtube.com/watch?v=SeMNJlfBJdE")).toBe("https://www.youtube.com/embed/SeMNJlfBJdE?feature=oembed")
})