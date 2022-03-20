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
    this.message = message ? message : "Deezer Error";
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
class DeezerInvalidURI extends DeezerGeneratorError {
  constructor() {
    super();
    this.name = "DeezerGenerator Error"
    this.message = "Invalid URI"
  }

}

//SoundCloud Error
class SoundCloudGeneratorError extends Error {
  constructor(message) {
    super();
    this.name = "SoundCloudGenerator Error"
    this.message = message ? message : "SoundCloudError"
  }
}

//SoundCloud Invalid URI
class SoundCloudInvalidURI extends SoundCloudGeneratorError {
  constructor() {
    super();
    this.name = "SoundCloudGenerator Error"
    this.message = "Invalid URI"
  }
}

//SoundCloud URI Not Found
class SoundCloudURINotFound extends SoundCloudGeneratorError {
  constructor() {
    super();
    this.name = "SoundCloudGenerator Error"
    this.message = "URI Not Found"
  }
}

module.exports = {
  //youtube Generator Error
  YoutubeGeneratorError,
  YoutubeInvalidURI,
  //all parents Generator Error default
  GeneratorError,
  //Spotify Generator Error
  SpotifyGeneratorError,
  SpotifyInvalidURI,
  //Deezer Generator Error
  DeezerGeneratorError,
  DeezerURINotFound,
  DeezerInvalidURI,
  //SoundCloud Generator Error
  SoundCloudGeneratorError,
  SoundCloudInvalidURI,
  SoundCloudURINotFound
}