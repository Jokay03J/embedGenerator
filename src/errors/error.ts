export default class GeneratorError extends Error {
  constructor(message: string) {
    super();
    this.name = "Generator Error";
    this.message = message;
  }
}
//Youtube Errors
export class YoutubeGeneratorError extends GeneratorError {
  constructor(message: string) {
    super(message);
    this.name = "YoutubeGenerator";
  }
}
//Invalid URL Error
export class YoutubeInvalidURI extends YoutubeGeneratorError {
  constructor() {
    super("Invalid URI");
  }
}
//Not Found Error
export class YoutubeNotFound extends YoutubeGeneratorError {
  constructor() {
    super("Not Found");
  }
}

//spotify Error
export class SpotifyGeneratorError extends GeneratorError {
  constructor(message: string) {
    super(message);
    this.name = "SpotifyGenerator";
  }
}

//Invalid URI
export class SpotifyInvalidURI extends SpotifyGeneratorError {
  constructor() {
    super("Invalid URI");
  }
}

//Deezer Error
export class DeezerGeneratorError extends GeneratorError {
  constructor(message: string) {
    super(message);
    this.name = "DeezerGenerator";
  }
}

//URI Not Found
export class DeezerURINotFound extends DeezerGeneratorError {
  constructor() {
    super("URI Not Found");
  }
}

//Invalid URI
export class DeezerInvalidURI extends DeezerGeneratorError {
  constructor() {
    super("Invalid URI");
  }
}

//SoundCloud Error
export class SoundCloudGeneratorError extends GeneratorError {
  constructor(message: string) {
    super(message);
    this.name = "SoundCloudGenerator";
  }
}

//SoundCloud Invalid URI
export class SoundCloudInvalidURI extends SoundCloudGeneratorError {
  constructor() {
    super("Invalid URI");
  }
}

//SoundCloud URI Not Found
export class SoundCloudURINotFound extends SoundCloudGeneratorError {
  constructor() {
    super("URI Not Found");
  }
}
