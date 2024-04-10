import express from 'express';
import routes from './src/routes'
import dotenv from 'dotenv'

dotenv.config()
const app = express();
const port = 3000;

app.use(routes)

app.listen(port, () => {
    console.log(`### server running at http://localhost:${port}`)
})