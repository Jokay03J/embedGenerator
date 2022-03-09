const { YoutubeInvalidURI } = require("../errors/error")

module.exports = class YoutubeGenerator {

  /**
   * 
   * @param {string} url
   * @returns {<Promise>string} youtube video embed url
   */
  static async embed(url) {
    const promise = new Promise((resolve,reject) => {
      const videoId = new URL(url).searchParams.get("v")

      if(!videoId) reject(new YoutubeInvalidURI())
  
      resolve(`https://youtube.com/embed/${videoId}`)
    })

    return promise
  }
}