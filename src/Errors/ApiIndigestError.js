export default class ApiIndigestError extends Error {
    constructor(message) {
        super(message ? message : "Maybe some connection to api indigest")
    }
}