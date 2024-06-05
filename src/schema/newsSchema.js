import Joi from 'joi';

export const artigoSchema = Joi.object({
    id: Joi.number().integer().required(),
    titulo: Joi.string().required(),
    categoria: Joi.string().required(),
    conteudo: Joi.array().items(Joi.string()).required(),
    dataPostagem: Joi.string().required(),
    horarioPostagem: Joi.string().required(),
    autor: Joi.string().required()
});