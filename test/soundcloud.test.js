const { SoundCloudGenerator } = require("../index.js");

test("https%3A//api.soundcloud.com/tracks/166877736 to be https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/166877736&color=ff5500&auto_play=false&hide_related=true&show_artwork=true&show_comments=true&show_user=true&show_reposts=true%22", async () => {
  expect(await SoundCloudGenerator.embed("https%3A//api.soundcloud.com/tracks/166877736")).toBe("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/166877736&amp;color=ff5500&amp;auto_play=false&amp;hide_related=true&amp;show_artwork=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=true%22")
})