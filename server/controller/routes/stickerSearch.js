import express from 'express';
import { searchTrending, searchStickers } from '../../model/search.js';
const searchRouter = express.Router();

// Search trending stickers
// Example URL: /sticker/search/1
searchRouter.get('/:userId', async(req, res) => {
    try {
        const obj = {};
        const { userId } = req.params;
        const keywords = await searchTrending(userId);

        for (let i = 0; i < keywords.length; i++) {
            const word = String(keywords[i]);
            obj[word] = await searchStickers(userId, word);
        }

        res.status(200).json(obj);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Search stickers by query
// Example URL: /sticker/search/1/funny
searchRouter.get('/:userId/:query', async(req, res) => {
    try {
        const { userId, query } = req.params;
        const stickers = await searchStickers(userId, query);

        res.status(200).json(stickers);
    } catch (err) {
        res.status(500).send(err);
    }
});

export { searchRouter };