import { Request, Response } from "express";
import { TypeResponse } from "../../../types";

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
