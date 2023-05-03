
// import './di/container';
import express from 'express';
import { routes } from '@routes/index.routes';
import { connectDb } from 'infra/config';
import dotenv from 'dotenv'

dotenv.config()
const app = express();
const PORT: number = Number(process.env.PORT) | 3000;


app.use(express.json())
app.use(routes);

connectDb()
app.listen(PORT, () => {
    console.log("listening to port... " + PORT);
})
