import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import gigRoutes from "./routes/gigRoutes.js";
import bidRoutes from "./routes/bidRoutes.js";

dotenv.config();
connectDB();

const app = express();


const allowedOrigins = [
  "http://localhost:5173",
  "https://taskinternservice.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman, mobile apps)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));



// app.use(cors({
//   origin: "https://taskinternservice.vercel.app",
//   credentials: true
// }));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/gigs", gigRoutes);
app.use("/api/bids", bidRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
