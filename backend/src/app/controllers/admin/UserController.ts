import { Request, Response } from "express";
import { TypeResponse } from "../../../types";
import User from "../../models/User";

export default {
  get: async (req: Request, res: Response) => {
    try {
      const response: TypeResponse = {
        status: 200,
        message: "Login successfully",
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
  post: async (req: Request, res: Response) => {
    try {
      const response: TypeResponse = {
        status: 200,
        message: "Login successfully",
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
  put: async (req: Request, res: Response) => {
    try {
      const { query, body } = req;
      const id = query.id as string;
      const user = await User.findByPk(id);

      const responseNotFound: TypeResponse = {
        status: 400,
        message: "Data not found",
        data: {
          results: {
            data: {},
          },
        },
      };

      if (!user) return res.status(400).json(responseNotFound);
      await user.update({ ...body });

      const response: TypeResponse = {
        status: 200,
        message: "success",
        data: {
          results: {
            data: user,
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
      const response: TypeResponse = {
        status: 200,
        message: "Login successfully",
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
