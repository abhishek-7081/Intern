import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import gigRoutes from "./routes/gigRoutes.js";
import bidRoutes from "./routes/bidRoutes.js";
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config();
connectDB();

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: { origin: "http://localhost:5173", credentials: true }
});

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/gigs", gigRoutes);
app.use("/api/bids", bidRoutes);

// socket mapping
const users = {};
io.on("connection", (socket) => {
  socket.on("register", (userId) => {
    users[userId] = socket.id;
  });
});

export { io, users };

server.listen(5000, () => console.log("Server running on 5000"));
