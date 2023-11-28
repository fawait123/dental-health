import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const sequelize = new Sequelize({
  host: process.env.DB_HOST || "127.0.0.1",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  port: 3306,
  database: process.env.DB_DATABASE,
  dialect: "mysql",
});

export default sequelize;
