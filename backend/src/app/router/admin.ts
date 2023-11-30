import express from "express";
import AuthController from "../controllers/public/AuthController";
import ControlDiabetesController from "../controllers/admin/ControlDiabetesController";

const adminRoute = express.Router();

adminRoute.post("/me", AuthController.me);

// control diabates endpoint
adminRoute.get("/control-diabetes", ControlDiabetesController.get);
adminRoute.post("/control-diabetes", ControlDiabetesController.post);
adminRoute.put("/control-diabetes", ControlDiabetesController.put);
adminRoute.delete("/control-diabetes", ControlDiabetesController.delete);

export default adminRoute;
