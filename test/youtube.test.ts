import { YoutubeGenerator } from "../generator/youtube";
import { expect, test } from "@jest/globals";

test("https://www.youtube.com/watch?v=SeMNJlfBJdE to https://www.youtube.com/embed/SeMNJlfBJdE?feature=oembed", async () => {
  return YoutubeGenerator.embed(
    "https://www.youtube.com/watch?v=SeMNJlfBJdE"
  ).then((url) =>
    expect(url).toBe("https://www.youtube.com/embed/SeMNJlfBJdE?feature=oembed")
  );
});
