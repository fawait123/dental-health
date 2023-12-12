import { io } from 'socket.io-client';

const socketClient = io(`ws://127.0.0.1:4000`);

export default socketClient;
