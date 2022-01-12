import express from 'express';
import { searchRouter } from './routes/stickerSearch.js';
import { authenticateToken } from '../auth/authorizeToken.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// will need to add auth middleware later
app.use('/sticker/search', searchRouter);

app.post('/login', (req, res) => {
    // authenticate user
    // const { username } = req.body;
    // const user = { username: username };
    // const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

    // res.json({ access_token: accessToken });
});


app.all('*', (req, res) => {
    res.sendStatus(405);
});

export { app };