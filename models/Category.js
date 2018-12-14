const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    text: {
        type: String
    },
    imageSrc: {
        type: String,
        default: ''
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId,
        unique: false
    }
});

module.exports = mongoose.model('categories', categorySchema);
