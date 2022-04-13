const { YoutubeInvalidURI, YoutubeGeneratorError, YoutubeNotFound } = require("../errors/error")
const axios = require("axios").default;

module.exports = class YoutubeGenerator {

  /**
   * 
   * @param {string} url
   * @returns {<Promise>string} youtube video embed url
   */
  static async embed(url) {
    const promise = new Promise((resolve, reject) => {
      const encodedURL = encodeURI(url)
      axios.get(`https://www.youtube.com/oembed?url=${encodedURL}&format=json`)
        .then((res) => {
          const html = res.data.html.split("src");
          const result = html[1].split('"')[1]
          return resolve(result)
        })
        .catch((err) => {
          switch (err.response.status) {
            case 400:
              reject(new YoutubeNotFound())
              break;
            
            case 404:
              reject(new YoutubeInvalidURI())
              break;

            default:
              console.log(err);
              reject(new YoutubeGeneratorError())
              break;
          }
        })
    });
    return promise;
  }
}