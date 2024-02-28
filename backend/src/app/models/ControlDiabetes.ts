/**
 * Keep this file in sync with the code in the "Usage without strict types for
 * attributes" section in /docs/manual/other-topics/typescript.md
 *
 * Don't include this comment in the md file.
 */
import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";
import dotenv from "dotenv";
import User from "./User";
dotenv.config({ path: ".env" });

class ControlDiabetes extends Model {
  declare id: string;
  declare userID: string;
  declare bloodSugarPressure: number;
  declare bloodPressure: number;
  declare systole: number;
  declare diastole: number;
  declare controlDrugConsumption: string;
  declare physicalActivity: string;
  declare checkhba1c: string;
  declare types_of_checks: string;
  declare createdAt: string;
  declare updatedAt: string;
  declare deletedAt: string;
}

ControlDiabetes.init(
  {
    id: {
      type: DataTypes.UUID,
      autoIncrement: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    userID: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    bloodSugarPressure: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bloodPressure: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    systole: {
      type: DataTypes.INTEGER,
    },
    diastole: {
      type: DataTypes.INTEGER,
    },
    controlDrugConsumption: {
      type: DataTypes.STRING(288),
      allowNull: false,
    },
    physicalActivity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checkhba1c: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    types_of_checks: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "diabetescontrols",
    sequelize, // passing the `sequelize` instance is required
    paranoid: true,
    timestamps: true,
  }
);

ControlDiabetes.belongsTo(User, {
  foreignKey: "userID",
  as: "user",
});
export default ControlDiabetes;
