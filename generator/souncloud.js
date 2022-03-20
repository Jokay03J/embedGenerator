const { SoundCloudInvalidURI } = require("../errors/error");
const axios = require("axios").default;

module.exports = class SoundCloudGenerator {
  /**
   * @param {string} url
   * @returns {<Promise>string} windget url soundcloud
   */
  static embed(url) {
    const promise = new Promise((resolve, reject) => {
      //check if provided url is valid
      axios.get(`https://w.soundcloud.com/player/?url=${url}&amp;color=ff5500&amp;auto_play=false&amp;hide_related=true&amp;show_artwork=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=true%22`)
        .then((res) => {
          return resolve(`https://w.soundcloud.com/player/?url=${url}&amp;color=ff5500&amp;auto_play=false&amp;hide_related=true&amp;show_artwork=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=true%22`)
        })
        .catch((err) => {
          reject(new SoundCloudInvalidURI())
        })
    })
    return promise
  }
}