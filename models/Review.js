const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    article: {
        ref: 'articles',
        type: Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number
    }
});

module.exports = mongoose.model('reviews', reviewSchema);