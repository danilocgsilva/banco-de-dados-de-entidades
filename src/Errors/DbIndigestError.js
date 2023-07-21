export default class DbIndigestError extends Error {
    constructor(message) {
      super(message);
      this.name = "Maybe some connection in database connection. Original message: " + message;
    }
  }
  