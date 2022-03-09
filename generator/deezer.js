const { DeezerURINotFound, DeezerGeneratorError, DeezerInvalidURI } = require("../errors/error");

const axios = require("axios").default;

class DeezerGenerator {

  /**
   * 
   * @param {string} url 
   * @returns {string} deezer widget url
   */
  static async embed(url) {
    const encodedURL = encodeURI(url)
    const res = await axios.get(`https://api.deezer.com/oembed?url=${encodedURL}&maxwidth=700&maxheight=300&tracklist=true&format=json`)
      .catch((err) => {
        switch (err.response.status) {
          case 404:
            console.log("test 1");
            throw new DeezerURINotFound()
            break;

          case 400:
            throw new DeezerInvalidURI()
            break;

          default:
            console.log(err.response.status);
            throw new DeezerGenerator()
            break;
        }
      })

    return `https://widget.deezer.com/widget/auto/${res.data.entity}/${res.data.id}?autoplay=false&radius=true&tracklist=true`
  }
}

module.exports = {
  DeezerGenerator
}