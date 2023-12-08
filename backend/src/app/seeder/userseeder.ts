import Security from "../helpers/hash";
import User from "../models/User";

(async () => {
  User.create({
    username: "superadmin",
    email: "admin@admin.com",
    password: Security.encrypt("2wsx1qaz"),
    name: "Super Admin",
    placebirth: "Yogyakarta",
    birthdate: "2023-12-08",
    gender: "L",
    address: "Yogyakarta",
    phone: "0857283467823",
    history_sicknes: "-",
    role: "admin",
    photo: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
})();
