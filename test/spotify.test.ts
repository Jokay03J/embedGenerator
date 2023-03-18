import { SpotifyGenerator } from "../generator/spotify";
import { expect, test } from "@jest/globals";

test("http://open.spotify.com/track/298gs9ATwr2rD9tGYJKlQR", async () => {
  return SpotifyGenerator.embed(
    "http://open.spotify.com/track/298gs9ATwr2rD9tGYJKlQR"
  ).then((url) =>
    expect(url).toBe(
      "https://open.spotify.com/embed/track/298gs9ATwr2rD9tGYJKlQR?utm_source=oembed"
    )
  );
});
