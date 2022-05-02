import express from 'express';
import cors from 'cors';

import gameStart from './controllers/gameStart.js';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running...');
});

app.get('/game/start', gameStart);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on PORT ${PORT}`));