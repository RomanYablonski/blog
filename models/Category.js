const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: Number,
        required: true,
        unique: true
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
    imageSrc: {
        type: String,
        default: ''
    },
    parentCategory: {
        ref: 'categories',
        type: Schema.Types.ObjectId,
        required: true // если нет родительской, то 0
    },
    childCategories: {
        type: Array
    }
});

module.exports = mongoose.model('categories', categorySchema);
