/**
 * Keep this file in sync with the code in the "Usage without strict types for
 * attributes" section in /docs/manual/other-topics/typescript.md
 *
 * Don't include this comment in the md file.
 */
import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

class BrushingChecklist extends Model {
  declare id: string;
  declare userID: string;
  declare checklist: string;
  declare date: string;
  declare createdAt: string;
  declare updatedAt: string;
  declare deletedAt: string;
}

BrushingChecklist.init(
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
    checklist: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
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
      allowNull: false,
    },
  },
  {
    tableName: "brushingchecklists",
    sequelize, // passing the `sequelize` instance is required
    paranoid: true,
    timestamps: true,
  }
);
export default BrushingChecklist;
