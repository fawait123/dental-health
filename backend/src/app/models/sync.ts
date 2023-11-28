import User from "./User";

if (process.env.DB_SYNC == "true") {
  User.sync({ force: true });
}
