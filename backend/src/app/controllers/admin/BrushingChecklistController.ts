import { Request, Response } from "express";
import { TypeResponse } from "../../../types";
import BrushingChecklist from "../../models/BrushingCheklist";

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

      const brushingChecklist = await BrushingChecklist.findAll({
        where: {
          ...where,
        },
      });

      const response: TypeResponse = {
        status: 200,
        message: "success",
        data: {
          results: {
            data: brushingChecklist,
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
      const body = req.body;

      const brushingChecklist = await BrushingChecklist.create({ ...body });

      const response: TypeResponse = {
        status: 200,
        message: "Login successfully",
        data: {
          results: {
            data: brushingChecklist,
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

      const brushingChecklist = await BrushingChecklist.findByPk(id);
      const responseNotFouns: TypeResponse = {
        status: 404,
        message: "Data not found",
        data: {
          results: {
            data: {},
          },
        },
      };

      if (!brushingChecklist) return res.status(404).json(responseNotFouns);

      await brushingChecklist.update({ ...body });
      const response: TypeResponse = {
        status: 200,
        message: "success",
        data: {
          results: {
            data: brushingChecklist,
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

      const brushingChecklist = await BrushingChecklist.findByPk(id);
      const responseNotFouns: TypeResponse = {
        status: 404,
        message: "Data not found",
        data: {
          results: {
            data: {},
          },
        },
      };

      if (!brushingChecklist) return res.status(404).json(responseNotFouns);

      await brushingChecklist.destroy();
      const response: TypeResponse = {
        status: 200,
        message: "success",
        data: {
          results: {
            data: brushingChecklist,
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
