import axios from "axios";
import {
  YoutubeGeneratorError,
  YoutubeInvalidURI,
  YoutubeNotFound,
} from "../errors/error";

export class YoutubeGenerator {
  /**
   * return embed url from youtube url
   * @param url valid youtube url
   */
  static async embed(url: string): Promise<string> {
    try {
      const encodedURL = encodeURI(url);
      const res = await axios.get(
        `https://www.youtube.com/oembed?url=${encodedURL}&format=json`
      );
      const html = res.data.html.split("src");
      const result = html[1].split('"')[1];
      return result;
    } catch (error: Error | unknown) {
      if (axios.isAxiosError(error))
        switch (error.status) {
          case 404:
            throw new YoutubeNotFound();
            break;

          case 400:
            throw new YoutubeInvalidURI();
            break;

          default:
            throw new YoutubeGeneratorError(error.message);
            break;
        }
      throw error;
    }
  }
}
