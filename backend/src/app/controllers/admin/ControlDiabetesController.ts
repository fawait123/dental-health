import { Request, Response } from "express";
import { TypeResponse } from "../../../types";
import ControlDiabetes from "../../models/ControlDiabetes";
import Pagination from "../../helpers/Pagination";

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
      const statementScope = new Pagination(
        req,
        ControlDiabetes.getAttributes()
      );
      statementScope.getPagination();

      const controlDiabetes = await ControlDiabetes.findAndCountAll({
        ...statementScope.getPagination(),
        where: {
          ...statementScope.getSearch(),
          ...where,
        },
      });

      const response: TypeResponse = {
        status: 200,
        message: "success",
        data: {
          results: {
            data: {
              ...controlDiabetes,
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

      const controlDiabetes = await ControlDiabetes.create({ ...body });
      const response: TypeResponse = {
        status: 200,
        message: "Data created",
        data: {
          results: {
            data: controlDiabetes,
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
      const body = req.body;
      const id = query.id as string;

      const controlDiabetes = await ControlDiabetes.findByPk(id);

      const responseNotFound: TypeResponse = {
        status: 400,
        message: "Data not found",
        data: {
          results: {
            data: {},
          },
        },
      };

      if (!controlDiabetes) return res.status(400).json(responseNotFound);

      await controlDiabetes.update({ ...body });
      const response: TypeResponse = {
        status: 200,
        message: "Data updated",
        data: {
          results: {
            data: controlDiabetes,
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
      const { query } = req;

      const id = query.id as string;

      const controlDiabetes = await ControlDiabetes.findByPk(id);
      const responseNotFound: TypeResponse = {
        status: 400,
        message: "Data not found",
        data: {
          results: {
            data: {},
          },
        },
      };

      if (!controlDiabetes) return res.status(400).json(responseNotFound);
      await controlDiabetes.destroy();
      const response: TypeResponse = {
        status: 200,
        message: "Data deleted",
        data: {
          results: {
            data: controlDiabetes,
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
