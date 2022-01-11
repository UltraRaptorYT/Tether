import express from 'express';
import { searchRouter } from './routes/stickerSearch.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/sticker/search', searchRouter);

app.all('*', (req, res) => {
    res.sendStatus(405);
});

export { app };