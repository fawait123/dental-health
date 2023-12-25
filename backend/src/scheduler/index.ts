import cron from "node-cron";
import Notification from "../app/models/Notification";
import User from "../app/models/User";
import dotenv from "dotenv";
import socket from "../app/socket/client";

dotenv.config();

console.log("scheduler is running");
cron.schedule("* * * * *", async () => {
  const users = await User.findAll({
    where: {
      role: "user",
    },
  });

  users.map((item) => {
    Notification.create({
      title: process.env.NOTIFICATION_TITLE,
      content: process.env.NOTIFICATION_CONTENT,
      from: process.env.NOTIFICATION_FROM,
      to: item.id,
    }).then((data) => {
      socket.emit("notification", JSON.stringify(data));
    });
  });
});
