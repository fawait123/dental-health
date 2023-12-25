import BrushingChecklist from "./BrushingCheklist";
import ControlDiabetes from "./ControlDiabetes";
import DentalHealthCheck from "./DentalHealthCheck";
import Notification from "./Notification";
import User from "./User";

if (process.env.DB_SYNC == "true") {
  User.sync({ force: true });
  DentalHealthCheck.sync({ force: true });
  ControlDiabetes.sync({ force: true });
  BrushingChecklist.sync({ force: true });
  Notification.sync({ force: true });
}
