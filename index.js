import express from 'express'
import cors from 'cors'

process.loadEnvFile()

import staticRoute from './routes/static.route.js'

const app = express()

app.use(cors())

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function (req, res) {
    res.json({ greeting: 'hello API' });
});

const { PORT, HOST } = process.env

app.listen(PORT || 4321, () => {
    console.log(`Your app is listening on http://${HOST}:${PORT}`)
});
