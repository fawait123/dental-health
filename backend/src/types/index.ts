import { ErrorRequestHandler } from "express";

interface IData {
  results: object | [];
}

export type TypeResponse = {
  status: number;
  message: string;
  data: IData;
};

export type TypeError = {
  message: ErrorRequestHandler;
};
