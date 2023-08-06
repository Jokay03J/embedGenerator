import axios from "axios";
import { SpotifyGeneratorError, SpotifyInvalidURI } from "../errors/error";

export class SpotifyGenerator {
  /**
   * return embed url from valid spotify url
   * @param url spotify valid url
   */
  static async embed(url: string): Promise<string> {
    try {
      const res = await axios.get(`https://open.spotify.com/oembed?url=${url}`);

      const html = res.data.html.split("src");
      const result = html[1].split('"')[1];

      return result;
    } catch (error: Error | unknown) {
      if (axios.isAxiosError(error)) {
        switch (error.status) {
          case 404:
            throw new SpotifyInvalidURI();
            break;

          default:
            throw new SpotifyGeneratorError(error.message);
            break;
        }
      }
      throw error;
    }
  }
}
