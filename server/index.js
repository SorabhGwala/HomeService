import express from 'express';
import userRoute from './router/user.router.js';

import dotenv from 'dotenv';
import connectDB from './database/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config({});

connectDB();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());

// ✅ Enable CORS for frontend
app.use(cors({
    origin: "http://localhost:5174",
    credentials: true
}));

// Routes
app.use('/api/v1/user', userRoute);

app.get('/home', (_, res) => {
    res.status(200).json({
        success: true,
        message: "welcome to home service api"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
