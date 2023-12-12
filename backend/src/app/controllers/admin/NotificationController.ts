import { Request, Response } from "express";
import { TypeResponse } from "../../../types";
import Notification from "../../models/Notification";
import Pagination from "../../helpers/Pagination";
import { Op } from "sequelize";

export default {
  get: async (req: Request, res: Response) => {
    try {
      const query = req.query;
      let where = {};

      if (query.id) {
        where = {
          id: query.id,
        };
      }

      if (query.to) {
        where = {
          to: query.to,
        };
      }

      if (query.from) {
        where = {
          from: query.from,
        };
      }

      const statementScope = new Pagination(req, Notification.getAttributes());

      statementScope.getPagination();

      const user = await Notification.findAndCountAll({
        ...statementScope.getPagination(),
        where: {
          ...statementScope.getSearch(),
          ...where,
        },
        order: [["createdAt", "desc"]],
      });

      const response: TypeResponse = {
        status: 200,
        message: "success",
        data: {
          results: {
            data: {
              ...user,
              page: statementScope.getPagination().page,
              limit: statementScope.getPagination().limit,
            },
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
  put: async (req: Request, res: Response) => {
    try {
      const query = req.query;

      await Notification.update(
        {
          isRead: true,
        },
        {
          where: {
            id: {
              [Op.in]: query.id,
            },
          },
        }
      );

      const response: TypeResponse = {
        status: 200,
        message: "success",
        data: {
          results: {
            data: {},
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
