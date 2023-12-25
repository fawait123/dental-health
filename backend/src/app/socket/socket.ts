import { Server } from "socket.io";

const socket = (server) => {
  const io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    console.log("a user connected " + socket.id);

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });

    // trigger receive data
    socket.on("notification", (data) => {
      console.log(data);
      io.emit("notification-client", data);
    });
  });
};

export default socket;
