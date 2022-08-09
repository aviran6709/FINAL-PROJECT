const { Joi } = require('celebrate');
const validateUrl = require('../utils/validateUrl')
const signupSchema = { body: Joi.object().keys({
    name:Joi.string().required().min(2),
    password: Joi.string().required().min(8),
    email: Joi.string().email().required()  
 })     
    
}
const signinSchema = { body: Joi.object().keys({
    password: Joi.string().required().min(8),
    email: Joi.string().email().lowercase().required(),  
 })     
}
const articleSchema = { body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().min(4).max(99).required(),  
    text: Joi.string().required().min(4),
    source: Joi.string().required(), 
    link: Joi.string().required().custom(validateUrl),
    image: Joi.string().custom(validateUrl).required(), 
    date: Joi.string().required(),
 })     
}


module.exports ={signinSchema,signupSchema,articleSchema}

