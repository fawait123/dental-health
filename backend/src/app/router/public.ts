import express from "express";
import AuthController from "../controllers/public/AuthController";

const publicRoute = express.Router();

publicRoute.post("/auth/register", AuthController.register);
publicRoute.post("/auth/login", AuthController.login);

publicRoute.get("/auth/info-user", AuthController.infoUser);

publicRoute.post("/forgot-password", AuthController.forgotPassword);
export default publicRoute;
