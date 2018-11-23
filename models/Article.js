const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    name: {
        type: String,
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
    category: { // todo: make as array of categories
        ref: 'categories',
        type: Schema.Types.ObjectId
    },
    relatedArticles: [{
        id: {
            type: Number
        }
    }],
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('articles', articleSchema);