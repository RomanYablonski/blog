const Article = ('../models/Article');
const errorHandler = require('../utils/errorHandler');


module.exports.getByCategoryId = async function (req, res) {
    try {
        const articles = await Article.find({
            category: req.params.categoryId
        });
        res.status(200).json(articles);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.getArticleById = async function (req, res) {
    try {
        const article = await Article.find({
            _id: req.params.id
        });
        res.status(200).json(article);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.delete = async function (req, res) {
    try {
        await Article.remove({_id: req.params.id});
        res.status(200).json({
            message: 'Position was deleted',
            id: req.params.id
        })
    } catch(e) {
        errorHandler(res, e);
    }
};

module.exports.create = async function (req, res) {
    try {
        const article = await new Article({
            name: req.body.name,
            title: req.body.title,
            description: req.body.description,
            text: req.body.text,
            date: req.body.date,
            imageSrc: req.body.imageSrc,
            category: req.body.category,
            relatedArticles: req.body.relatedArticles,
            user: req.user.id
        }).save();
        res.status(201).json(article);
    } catch(e) {
        errorHandler(res, e);
    }
};

module.exports.update = async function (req, res) {
    try {
        const article = await Article.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true} // чтобы возвращало уже измененное значение
    );
        res.status(200).json(article)
    } catch(e) {
        errorHandler(res, e);
    }
};





