import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './database/db.js';
const app = express();
dotenv.config();


const port=8000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//importing routes
//using routes
import userRoutes from './routes/user.js';
app.use("/api",userRoutes);
app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
    connectDB();
});