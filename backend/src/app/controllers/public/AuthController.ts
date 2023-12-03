import { Request, Response } from "express";
import { TypeResponse } from "../../../types";
import User from "../../models/User";
import Security from "../../helpers/hash";
import { Op } from "sequelize";
import Jwt from "../../libraries/jwt";

export default {
  register: async (req: Request, res: Response) => {
    try {
      const { body } = req;

      const user = await User.create({
        ...body,
        password: Security.encrypt(body.password),
      });
      const response: TypeResponse = {
        status: 200,
        message: "success",
        data: {
          results: user,
        },
      };

      return res.status(200).json(response);
    } catch (error) {
      const response: TypeResponse = {
        status: 200,
        message: error?.message,
        data: {
          results: {},
        },
      };
      return res.status(500).json(response);
    }
  },
  login: async (req: Request, res: Response) => {
    try {
      const { body } = req;

      const user = await User.findOne({
        where: {
          [Op.or]: [
            {
              username: body.username,
            },
            {
              email: body.username,
            },
          ],
        },
      });

      const badReponse: TypeResponse = {
        status: 400,
        message: "The credentials do not match to our record",
        data: {
          results: {},
        },
      };
      if (!user) return res.status(400).json(badReponse);

      if (!Security.decrypt(user.password, body.password))
        return res.status(400).json(badReponse);

      const payload = {
        id: user.dataValues.id,
        username: user.dataValues.username,
        email: user.dataValues.email,
      };

      const generateToken = await Jwt.sign(payload);
      const response: TypeResponse = {
        status: 200,
        message: "Login successfully",
        data: {
          results: {
            data: { ...user.dataValues, token: generateToken },
          },
        },
      };

      return res.status(200).json(response);
    } catch (error) {
      const response: TypeResponse = {
        status: 200,
        message: error?.message,
        data: {
          results: {},
        },
      };
      return res.status(500).json(response);
    }
  },
  me: async (req: Request, res: Response) => {
    try {
      const { body } = req;

      const user = await User.findOne({
        where: {
          [Op.or]: [
            {
              username: body.username,
            },
            {
              email: body.username,
            },
          ],
        },
      });

      const badReponse: TypeResponse = {
        status: 400,
        message: "The credentials do not match to our record",
        data: {
          results: {},
        },
      };
      if (!user) return res.status(400).json(badReponse);

      if (!Security.decrypt(user.password, body.password))
        return res.status(400).json(badReponse);

      const generateToken = await Jwt.sign(user.dataValues);

      const response: TypeResponse = {
        status: 200,
        message: "Login successfully",
        data: {
          results: {
            data: { ...user.dataValues, token: generateToken },
          },
        },
      };

      return res.status(200).json(response);
    } catch (error) {
      const response: TypeResponse = {
        status: 200,
        message: error?.message,
        data: {
          results: {},
        },
      };
      return res.status(500).json(response);
    }
  },
  infoUser: async (req: Request, res: Response) => {
    try {
      const { query } = req;

      const user = await User.findOne({
        where: {
          [Op.or]: [
            {
              username: query.username,
            },
            {
              email: query.username,
            },
          ],
        },
      });

      const response: TypeResponse = {
        status: 200,
        message: "Login successfully",
        data: {
          results: {
            data: user ? { ...user.dataValues } : {},
          },
        },
      };

      return res.status(200).json(response);
    } catch (error) {
      const response: TypeResponse = {
        status: 200,
        message: error?.message,
        data: {
          results: {},
        },
      };
      return res.status(500).json(response);
    }
  },
};
