import { Request, Response } from "express";
import { TypeResponse } from "../../../types";
import User from "../../models/User";
import Notification from "../../models/Notification";
import ControlDiabetes from "../../models/ControlDiabetes";
import BrushingChecklist from "../../models/BrushingCheklist";
import DentalHealthCheck from "../../models/DentalHealthCheck";
import { Op } from "sequelize";
import moment from "moment";

const months = [
  {
    month: "50",
    value: "01",
    year: new Date().getFullYear(),
  },
  {
    month: "Februari",
    value: "02",
    year: new Date().getFullYear(),
  },
  {
    month: "Maret",
    value: "03",
    year: new Date().getFullYear(),
  },
  {
    month: "April",
    value: "04",
    year: new Date().getFullYear(),
  },
  {
    month: "Mei",
    value: "05",
    year: new Date().getFullYear(),
  },
  {
    month: "Juni",
    value: "06",
    year: new Date().getFullYear(),
  },
  {
    month: "Juli",
    value: "07",
    year: new Date().getFullYear(),
  },
  {
    month: "Agustus",
    value: "08",
    year: new Date().getFullYear(),
  },
  {
    month: "September",
    value: "09",
    year: new Date().getFullYear(),
  },
  {
    month: "Oktober",
    value: "10",
    year: new Date().getFullYear(),
  },
  {
    month: "November",
    value: "11",
    year: new Date().getFullYear(),
  },
  {
    month: "Desember",
    value: "12",
    year: new Date().getFullYear(),
  },
  {
    month: "Desember2",
    value: "13",
    year: new Date().getFullYear(),
  },
];

function getDatesArray(startDate: string, endDate: string): string[] {
  const datesArray: string[] = [];
  const currentDate = moment(new Date(startDate));

  while (currentDate.isSameOrBefore(new Date(endDate))) {
    datesArray.push(currentDate.format("YYYY-MM-DD"));
    currentDate.add(1, "days");
  }

  return datesArray;
}

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
          donute: {
            active: await User.count({
              where: {
                isActive: true,
              },
            }),
            inactive: await User.count({
              where: {
                isActive: false,
              },
            }),
          },
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
  grapich: async (req: Request, res: Response) => {
    try {
      const query = req.query;

      let where = {};
      if (query.userID) {
        where = {
          userID: query.userID,
        };
      }

      const data = await Promise.all(
        months.map(async (item) => {
          const controlDiabetes = await ControlDiabetes.count({
            where: {
              createdAt: {
                [Op.between]: [
                  `${item.year}-${item.value}-01 00:00:00`,
                  `${item.year}-${item.value}-31 23:59:59`,
                ],
              },
              ...where,
            },
          });
          const dentalHealth = await DentalHealthCheck.count({
            where: {
              createdAt: {
                [Op.between]: [
                  `${item.year}-${item.value}-01 00:00:00`,
                  `${item.year}-${item.value}-31 23:59:59`,
                ],
              },
              ...where,
            },
          });

          const brushingChecklist = await BrushingChecklist.count({
            where: {
              createdAt: {
                [Op.between]: [
                  `${item.year}-${item.value}-01 00:00:00`,
                  `${item.year}-${item.value}-31 23:59:59`,
                ],
              },
              ...where,
            },
          });

          return {
            ...item,
            controlDiabetes,
            dentalHealth,
            brushingChecklist,
          };
        })
      );

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
  chart: async (req: Request, res: Response) => {
    try {
      const query = req.query;
      const startDate: string = query?.startDate as string;
      const endDate: string = query?.endDate as string;

      const dateRange = getDatesArray(startDate, endDate).map(async (item) => {
        const controlDiabetes = await ControlDiabetes.findOne({
          where: {
            userID: query?.userID || null,
          },
          order: [["createdAt", "desc"]],
        });

        const dentalHealth = await DentalHealthCheck.findOne({
          where: {
            userID: query?.userID || null,
          },
          order: [["createdAt", "desc"]],
        });

        return {
          name: moment(item).format("DD MMMM YYYY"),
          controlDiabetes: {
            kadarguladarah: controlDiabetes?.bloodSugarPressure,
            systole: controlDiabetes?.systole,
            diastole: controlDiabetes?.diastole,
          },
          dentalHealth: {
            debrisindex: dentalHealth?.debrisIndex,
            cpitn: dentalHealth?.CPITN,
          },
        };
      });

      const response: TypeResponse = {
        status: 200,
        message: "success",
        data: {
          results: await Promise.all(dateRange),
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
