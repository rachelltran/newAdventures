const Joi = require('joi');


module.exports.NewAdventureSchema = Joi.object({
    newAdventure: Joi.object({
        title: Joi.string().required(),
        description: Joi.string(),
        location: Joi.string().required()
    }).required()
});


module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(0).max(5),
        body: Joi.string().required()
    }).required()
});