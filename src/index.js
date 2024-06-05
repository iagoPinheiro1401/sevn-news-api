import express from 'express';
import cors from 'cors';
import { 
    getArtigosPrincipaisHandler, 
    getArtigosSecundariosHandler, 
    getNoticiaHandler 
} from './controllers/newsController.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bem-vindo(a) à API da SEVN News!');
});

app.get('/api/artigos-principais', getArtigosPrincipaisHandler);

app.get('/api/artigos-secundarios', getArtigosSecundariosHandler);

app.get('/api/noticia/:id', getNoticiaHandler);

app.use((req, res) => {
    res.status(404).send('Endpoint não encontrado!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
