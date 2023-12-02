import express from "express";
import AuthController from "../controllers/public/AuthController";
import ControlDiabetesController from "../controllers/admin/ControlDiabetesController";
import BrushingChecklistController from "../controllers/admin/BrushingChecklistController";

const adminRoute = express.Router();

adminRoute.post("/me", AuthController.me);

// control diabates endpoint
adminRoute.get("/control-diabetes", ControlDiabetesController.get);
adminRoute.post("/control-diabetes", ControlDiabetesController.post);
adminRoute.put("/control-diabetes", ControlDiabetesController.put);
adminRoute.delete("/control-diabetes", ControlDiabetesController.delete);

// brushing checklist endpoint
adminRoute.get("/brushing-checklist", BrushingChecklistController.get);
adminRoute.post("/brushing-checklist", BrushingChecklistController.post);
adminRoute.put("/brushing-checklist", BrushingChecklistController.put);
adminRoute.delete("/brushing-checklist", BrushingChecklistController.delete);

export default adminRoute;
