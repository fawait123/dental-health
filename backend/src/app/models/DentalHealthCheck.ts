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

class DentalHealthCheck extends Model {
  declare id: string;
  declare userID: string;
  declare debrisIndex: number;
  declare CPITN: number;
  declare countTeeth: number;
  declare countTeethLoose: number;
  declare numberofcavities: number;
  declare gingivitisConditions: boolean;
  declare createdAt: string;
  declare updatedAt: string;
  declare deletedAt: string;
}

DentalHealthCheck.init(
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
    debrisIndex: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    CPITN: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    countTeeth: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    countTeethLoose: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numberofcavities: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gingivitisConditions: {
      type: DataTypes.BOOLEAN,
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
    tableName: "dentalhealthchecks",
    sequelize, // passing the `sequelize` instance is required
    paranoid: true,
    timestamps: false,
  }
);

DentalHealthCheck.belongsTo(User, {
  foreignKey: "userID",
  as: "user",
});
export default DentalHealthCheck;
