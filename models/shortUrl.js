const mongoose = require('mongoose'); // Imports the mongoose module, which provides tools for interacting with MongoDB databases in Node.js applications.
const shortId = require('shortid'); // Imports the shortid module, a library for generating short, unique, non-sequential IDs

// Now below we define a Mongoose schema (shortUrlSchema) for storing URL data in MongoDB:

    // full: String type field required to store full URLs.
    // short: String type field required to store generated short URLs, with a default value generated using shortId.generate.
    // clicks: Number type field required to store the number of times the short URL has been clicked, initialized to 0.

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
});

// now we will export mongoose model named 'ShortUrl', which uses the shortUrlSchema defined above:

// This line hooks up the schema with MongoDB through Mongoose, allowing you to perform operations (like creating, reading, updating, deleting) on documents stored in the 'shorturls' collection in your MongoDB database.

module.exports = mongoose.model('ShortUrl', shortUrlSchema);