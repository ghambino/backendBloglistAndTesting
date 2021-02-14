const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const bloglistSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        uniqueCaseInsensitive: true
    },
    author: {
        type: String,
        required: true
    },
    url: {
        type: String,
        unique: true,
        required: true,
    },
    likes: {
        type: Number,
        required: true
    }
});
bloglistSchema.plugin(uniqueValidator);

bloglistSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
});

module.exports = mongoose.model('Bloglist', bloglistSchema);
