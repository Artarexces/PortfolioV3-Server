import express from 'express';
import cors from 'cors';
import router from './routes/routes';
import { connectDB } from './config/db';

process.loadEnvFile();

const app = express();
const PORT = process.env.PORT || 5432;

app.use(cors());
app.use(express.json());
app.use("/api", router);


app.listen(PORT, () => {
    connectDB();
    console.log(`Servidor en escucha 🚀 | ${PORT}`);
});
