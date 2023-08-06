import axios from "axios";
import {
  DeezerGeneratorError,
  DeezerInvalidURI,
  DeezerURINotFound,
} from "../errors/error";

export class DeezerGenerator {
  /**
   * return embed from valid deezer url
   * @param url valid deezer url
   */
  static async embed(url: string): Promise<string> {
    try {
      const encodedURL = encodeURI(url);

      const res = await axios.get(
        `https://api.deezer.com/oembed?url=${encodedURL}&maxwidth=700&maxheight=300&tracklist=true&format=json`
      );
      return `https://widget.deezer.com/widget/auto/${res.data.entity}/${res.data.id}?autoplay=false&radius=true&tracklist=true`;
    } catch (error: Error | unknown) {
      if (axios.isAxiosError(error)) {
        switch (error.status) {
          case 404:
            throw new DeezerURINotFound();
            break;

          case 400:
            throw new DeezerInvalidURI();
            break;

          default:
            throw new DeezerGeneratorError(error.message);
            break;
        }
      }
      throw error;
    }
  }
}
