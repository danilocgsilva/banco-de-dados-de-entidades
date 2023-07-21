export default class DbIndigestError extends Error {
  constructor(message) {
    super(message ? message : "Maybe some connection in database connection.");
  }
}
