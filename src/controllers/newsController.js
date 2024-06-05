import { getArtigosPrincipais, getArtigosSecundarios, getNoticiaById } from '../services/newsService.js';

export const getArtigosPrincipaisHandler = (req, res) => {
    try {
        const artigos = getArtigosPrincipais();
        res.json(artigos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getArtigosSecundariosHandler = (req, res) => {
    try {
        const artigos = getArtigosSecundarios();
        res.json(artigos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getNoticiaHandler = (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const noticia = getNoticiaById(id);
        res.json(noticia);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};