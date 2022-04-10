const { DeezerURINotFound, DeezerGeneratorError, DeezerInvalidURI } = require("../errors/error");

const axios = require("axios").default;

module.exports = class DeezerGenerator {

  /**
   * 
   * @param {string} url
   * @returns {<Promise>string} deezer widget url
   */
  static async embed(url) {
    const promise = new Promise((resolve, reject) => {
      const encodedURL = encodeURI(url)
      axios.get(`https://api.deezer.com/oembed?url=${encodedURL}&maxwidth=700&maxheight=300&tracklist=true&format=json`)
        .then((res) => {
          return resolve(`https://widget.deezer.com/widget/auto/${res.data.entity}/${res.data.id}?autoplay=false&radius=true&tracklist=true`)
        })
        .catch((err) => {
          switch (err.response.status) {
            case 404:
              reject(new DeezerURINotFound())
              break;

            case 400:
              reject(new DeezerInvalidURI())
              break;

            default:
              console.log(err);
              reject(new DeezerGenerator())
              break;
          }
        })
    })
    return promise
  }
}