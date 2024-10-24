import express from 'express'
import cors from 'cors'

process.loadEnvFile()

import { buildHome } from './controllers/home.controller.js'
import staticRoute from './routes/static.route.js'

const app = express()

app.use(cors())

app.use(staticRoute)

app.get('/', buildHome)

app.get('/api/hello', function (req, res) {
    res.json({ greeting: 'hello API' });
})

const { PORT, HOST } = process.env

app.listen(PORT || 4321, () => {
    console.log(`Your app is listening on http://${HOST}:${PORT}`)
});
