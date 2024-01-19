import express from "express";
import AuthController from "../controllers/public/AuthController";
import ControlDiabetesController from "../controllers/admin/ControlDiabetesController";
import BrushingChecklistController from "../controllers/admin/BrushingChecklistController";
import DentalHealthController from "../controllers/admin/DentalHealthController";
import UserController from "../controllers/admin/UserController";
import DashboardController from "../controllers/admin/DashboardController";
import NotificationController from "../controllers/admin/NotificationController";

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

// brushing checklist endpoint
adminRoute.get("/dental-health", DentalHealthController.get);
adminRoute.post("/dental-health", DentalHealthController.post);
adminRoute.put("/dental-health", DentalHealthController.put);
adminRoute.delete("/dental-health", DentalHealthController.delete);

// user endpoint
adminRoute.get("/user", UserController.get);
adminRoute.get("/user/all", UserController.all);
adminRoute.post("/user", UserController.post);
adminRoute.put("/user", UserController.put);
adminRoute.delete("/user", UserController.delete);

adminRoute.get("/dashboard/card", DashboardController.get);
adminRoute.get("/dashboard/grapich", DashboardController.grapich);
adminRoute.get("/dashboard/chart", DashboardController.chart);

adminRoute.get("/notification", NotificationController.get);
adminRoute.put("/notification", NotificationController.put);

export default adminRoute;
