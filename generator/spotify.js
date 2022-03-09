const { SpotifyInvalidURI } = require("../errors/error");

const axios = require("axios").default;

module.exports = class SpotifyGenerator {
  /**
   * 
   * @param {string} url 
   * @returns {<Promise>string} spotify embed url
   */
  static async embed(url) {

    try{
    const res = await axios.get(`https://open.spotify.com/oembed?url=${url}`)

    const html = res.data.html.split("src");
    const result = html[1].split('"')[1]
    return result
    }catch(err) {
      throw new SpotifyInvalidURI()
    }

  }
}