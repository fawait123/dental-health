import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import publicRoute from "./app/router/public";
import { TypeResponse } from "./types";
import adminRoute from "./app/router/admin";
// read .env
dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 4000;
// sync daabase
(() => {
  require("./app/models/sync");
})();

// configuration express
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: "100mb" }));
app.use(express.json({ limit: "100mb" }));

// router default
app.get("/", (req: Request, res: Response) => {
  const response: TypeResponse = {
    status: 200,
    message: "API Dental Healt",
    data: {
      results: {},
    },
  };
  return res.status(200).json(response);
});
// use router
app.use(publicRoute);
app.use(adminRoute);

// listen server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
