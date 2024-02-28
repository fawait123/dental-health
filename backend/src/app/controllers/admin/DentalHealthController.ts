import { Request, Response } from "express";
import { TypeResponse } from "../../../types";
import DentalHealthCheck from "../../models/DentalHealthCheck";
import Pagination from "../../helpers/Pagination";
import User from "../../models/User";

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

      if (query.userID) {
        where = {
          userID: query.userID,
        };
      }

      const statementScope = new Pagination(
        req,
        DentalHealthCheck.getAttributes()
      );

      statementScope.getPagination();

      const dentalHealth = await DentalHealthCheck.findAndCountAll({
        ...statementScope.getPagination(),
        where: {
          ...statementScope.getSearch(),
          ...where,
        },
        include: [
          {
            model: User,
            as: "user",
            required: false,
            attributes: ["name"],
          },
        ],
      });

      const response: TypeResponse = {
        status: 200,
        message: "success",
        data: {
          results: {
            data: {
              ...dentalHealth,
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
  post: async (req: Request, res: Response) => {
    try {
      const { body } = req;

      const dentalHealth = await DentalHealthCheck.create({ ...body,updatedAt: new Date()});
      const response: TypeResponse = {
        status: 200,
        message: "success",
        data: {
          results: {
            data: dentalHealth,
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
      const { query, body } = req;
      const id = query.id as string;

      const dentalHealth = await DentalHealthCheck.findByPk(id);

      const responseNotFound: TypeResponse = {
        status: 400,
        message: "Data tidak ditemukan",
        data: {
          results: {
            data: {},
          },
        },
      };

      if (!dentalHealth) res.status(400).json(responseNotFound);

      await dentalHealth?.update({ ...body });
      const response: TypeResponse = {
        status: 200,
        message: "success",
        data: {
          results: {
            data: dentalHealth,
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
  delete: async (req: Request, res: Response) => {
    try {
      const query = req.query;
      const id = query.id as string;

      const dentalHealth = await DentalHealthCheck.findByPk(id);

      const responseNotFound: TypeResponse = {
        status: 400,
        message: "Data tidak ditemukan",
        data: {
          results: {
            data: {},
          },
        },
      };

      if (!dentalHealth) res.status(400).json(responseNotFound);

      await dentalHealth?.destroy();
      const response: TypeResponse = {
        status: 200,
        message: "success",
        data: {
          results: {
            data: dentalHealth,
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
