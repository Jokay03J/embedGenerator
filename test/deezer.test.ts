import { DeezerGenerator } from "../generator/deezer";
import { expect, test } from "@jest/globals";

test("https://deezer.page.link/fYqRC9ty8MA3gM227 to be https://widget.deezer.com/widget/auto/track/1674114537?autoplay=false&radius=true&tracklist=true", async () => {
  return DeezerGenerator.embed(
    "https://deezer.page.link/fYqRC9ty8MA3gM227"
  ).then((url) =>
    expect(url).toBe(
      "https://widget.deezer.com/widget/auto/track/1674114537?autoplay=false&radius=true&tracklist=true"
    )
  );
});
