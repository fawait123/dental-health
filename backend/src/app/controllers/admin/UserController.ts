import { Request, Response } from "express";
import { TypeResponse } from "../../../types";
import User from "../../models/User";
import Pagination from "../../helpers/Pagination";
import Security from "../../helpers/hash";

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

      const statementScope = new Pagination(req, User.getAttributes());

      statementScope.getPagination();

      const user = await User.findAndCountAll({
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
  all: async (req: Request, res: Response) => {
    try {
      const query = req.query;
      let where = {};

      if (query.id) {
        where = {
          ...where,
          id: query.id,
        };
      }

      if (query.userID) {
        where = {
          ...where,
          userID: query.userID,
        };
      }

      if (query.role) {
        where = {
          ...where,
          role: query.role,
        };
      }

      const statementScope = new Pagination(req, User.getAttributes());

      statementScope.getPagination();

      const user = await User.findAll({
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
  post: async (req: Request, res: Response) => {
    try {
      const body = req.body;

      const user = await User.create({
        ...body,
        password: Security.encrypt(body.password),
      });
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
      const { query } = req;
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

      await user.destroy();
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
};
