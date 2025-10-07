import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/routes';
import { connectDB } from './config/db';

dotenv.config();

const PORT = process.env.PORT || 5432;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);


app.listen(PORT, () => {
    connectDB();
    console.log(`Servidor en escucha 🚀 | ${PORT}`);
});
