import { io } from "socket.io-client";
import dotenv from "dotenv";
dotenv.config();

const socket = io(`ws://127.0.0.1:${process.env.PORT}`);

export default socket;
