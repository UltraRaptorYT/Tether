import express from 'express';
import { searchTrending } from '../../model/search.js';
const searchRouter = express.Router();

searchRouter.get('/:userId/:lang/:countryCode', async(req, res) => {
    try {
        const { userId, lang, countryCode } = req.params;
        const keywords = await searchTrending(userId, lang, countryCode);
        console.log(keywords)
        res.status(200).json({ "Trending words": keywords });
    } catch {
        res.sendStatus(500);
    }
});

export { searchRouter };