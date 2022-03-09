class GeneratorError extends Error {

  constructor(message) {
    super()
    this.name = "Generator Error"
    this.message = message
  }
}
//Youtube Errors
class YoutubeGeneratorError extends GeneratorError {
  constructor() {
    super(props);
    this.message = "Youtube Error"
    this.name = "YoutubeGenerator"
  }

}
//Invalid URL Error
/**
 * @returns {InvalidURL} InvalidURL Error
 */
class YoutubeInvalidURI extends YoutubeGeneratorError {
  constructor() {
    super();
    this.message = "Invalid URI"
    this.name = "YoutubeGenerator Error"
  }
}

//spotify Error
class SpotifyGeneratorError extends Error {
  constructor() {
    super()
    this.message = "Spotify Error"
    this.name = "SpotifyGenerator Error"
  }
}

//Invalid URI
class SpotifyInvalidURI extends SpotifyGeneratorError {
  constructor() {
    super()
    this.message = "Invalid URI"
    this.name = "SpotifyGenerator Error"
  }
}

//Deezer Error
class DeezerGeneratorError extends GeneratorError {
  constructor(message) {
    super()
    this.message = message? message : "Deezer Error";
    this.name = "DeezerGenerator";
  }
}

//URI Not Found
class DeezerURINotFound extends DeezerGeneratorError {
  constructor() {
    super();
    this.name = "DeezerGenerator Error";
    this.message = "URI Not Found"
  }
}

//Invalid URI
class DeezerInvalidURI extends DeezerGeneratorError{
  constructor() {
    super();
    this.name = "DeezerGenerator Error"
    this.message = "Invalid URI"
  }
  
}


module.exports = {
  YoutubeGeneratorError,
  YoutubeInvalidURI,
  GeneratorError,
  SpotifyGeneratorError,
  SpotifyInvalidURI,
  DeezerGeneratorError,
  DeezerURINotFound,
  DeezerInvalidURI
}