import express from "express";
import AuthController from "../controllers/public/AuthController";

const publicRoute = express.Router();

publicRoute.post("/me", AuthController.me);

export default publicRoute;
