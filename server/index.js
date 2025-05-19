import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import connectDB from './config/db.js';
import userRoute from './router/user.router.js';
import emailRoutes from './router/emailRouters.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

// ✅ Routes
app.use("/api", emailRoutes);          // e.g., /api/send-otp
app.use('/api/v1/user', userRoute);    // e.g., /api/v1/user/register

// ✅ Test Route
app.get('/home', (_, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Home Service API",
    });
});

// ✅ Server Start
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
