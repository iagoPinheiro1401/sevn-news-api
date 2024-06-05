import { artigosPrincipais, artigosSecundarios, noticiasDetalhes } from '../data.js';
import { artigoSchema } from '../schemas/newsSchema.js';

const validateArtigos = (artigos) => {
    const { error, value } = Joi.array().items(artigoSchema).validate(artigos, { abortEarly: false });
    if (error) {
        throw new Error(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    }
    return value;
};

export const getArtigosPrincipais = () => {
    return validateArtigos(artigosPrincipais);
};

export const getArtigosSecundarios = () => {
    return validateArtigos(artigosSecundarios);
};

export const getNoticiaById = (id) => {
    const noticia = noticiasDetalhes.find(n => n.id === id);
    const { error, value } = artigoSchema.validate(noticia);
    if (error) {
        throw new Error(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    }
    return value;
};