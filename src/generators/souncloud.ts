import axios from "axios";
import {
  SoundCloudGeneratorError,
  SoundCloudURINotFound,
} from "../errors/error";

export class SoundCloudGenerator {
  /**
   *
   * @param url valid soundcloud url
   */
  static async embed(url: string): Promise<string> {
    try {
      //check if provided url is valid
      await axios.get(
        `https://w.soundcloud.com/player/?url=${url}&amp;color=ff5500&amp;auto_play=false&amp;hide_related=true&amp;show_artwork=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=true%22`
      );

      return `https://w.soundcloud.com/player/?url=${url}&amp;color=ff5500&amp;auto_play=false&amp;hide_related=true&amp;show_artwork=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=true%22`;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        switch (error.status) {
          case 404:
            throw new SoundCloudURINotFound();
            break;

          default:
            throw new SoundCloudGeneratorError(error.message);
            break;
        }
      }
      throw error;
    }
  }
}
