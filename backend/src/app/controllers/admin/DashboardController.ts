import { Request, Response } from "express";
import { TypeResponse } from "../../../types";
import User from "../../models/User";
import Notification from "../../models/Notification";
import ControlDiabetes from "../../models/ControlDiabetes";
import BrushingChecklist from "../../models/BrushingCheklist";
import DentalHealthCheck from "../../models/DentalHealthCheck";

export default {
  get: async (req: Request, res: Response) => {
    try {
      const query = req.query;

      const where = {
        notification: {},
        controlDiabetes: {},
        brushingChecklist: {},
        dentalHealth: {},
      };

      if (query.userID) {
        where.notification = {
          to: query.userID,
        };
        where.controlDiabetes = {
          userID: query.userID,
        };
        where.brushingChecklist = {
          userID: query.userID,
        };
        where.dentalHealth = {
          userID: query.userID,
        };
      }

      const data = {
        user: {
          count: await User.count(),
          latestUpdate: await User.findOne({
            order: [["createdAt", "desc"]],
          }),
        },
        notification: {
          count: await Notification.count({
            where: {
              ...where.notification,
            },
          }),
          latestUpdate: await Notification.findOne({
            order: [["createdAt", "desc"]],
          }),
        },
        controlDiabetes: {
          count: await ControlDiabetes.count({
            where: {
              ...where.controlDiabetes,
            },
          }),
          latestUpdate: await ControlDiabetes.findOne({
            order: [["createdAt", "desc"]],
          }),
        },
        brusingCheckList: {
          count: await BrushingChecklist.count({
            where: {
              ...where.brushingChecklist,
            },
          }),
          latestUpdate: await BrushingChecklist.findOne({
            order: [["createdAt", "desc"]],
          }),
        },
        dentalHealth: {
          count: await DentalHealthCheck.count({
            where: {
              ...where.dentalHealth,
            },
          }),
          latestUpdate: await DentalHealthCheck.findOne({
            order: [["createdAt", "desc"]],
          }),
        },
      };

      const response: TypeResponse = {
        status: 200,
        message: "success",
        data: {
          results: {
            data: data,
          },
        },
      };

      return res.status(200).json(response);
    } catch (error) {
      const response: TypeResponse = {
        status: 500,
        message: error.message,
        data: {
          results: {
            data: {},
          },
        },
      };

      return res.status(500).json(response);
    }
  },
};
