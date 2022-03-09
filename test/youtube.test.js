const { YoutubeGenerator } = require("../index")

test("https://www.youtube.com/watch?v=SeMNJlfBJdE to https://youtube.com/embed/SeMNJlfBJdE",async () => {
  expect(await YoutubeGenerator.embed("https://www.youtube.com/watch?v=SeMNJlfBJdE")).toBe("https://youtube.com/embed/SeMNJlfBJdE")
})