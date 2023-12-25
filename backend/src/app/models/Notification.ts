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

class Notification extends Model {
  declare id: string;
  declare name: string;
  declare username: string;
  declare email: string;
  declare password: string;
  declare placebirth: string;
  declare birthdate: string;
  declare address: string;
  declare gender: string;
  declare phone: string;
  declare history_sicknes: string;
  declare photo: string;
  declare createdAt: string;
  declare updatedAt: string;
  declare deletedAt: string;
}

Notification.init(
  {
    id: {
      type: DataTypes.UUID,
      autoIncrement: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    from: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    to: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    isRead: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
    tableName: "notifications",
    sequelize, // passing the `sequelize` instance is required
    paranoid: true,
    timestamps: true,
  }
);
export default Notification;
