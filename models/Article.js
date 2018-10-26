const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    text: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    imageSrc: {
        type: String,
        default: ''
    },
    categories: {
        type: Array,
        required: true
    },
    relatedArticles: [{
        id: {
            type: Number
        }
    }],
    viewsCounter: {
        type: Number
    }
});

module.exports = mongoose.model('articles', articleSchema);