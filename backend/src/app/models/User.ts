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

class User extends Model {
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
  declare isActive: boolean;
  declare createdAt: string;
  declare updatedAt: string;
  declare deletedAt: string;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      autoIncrement: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(288),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    placebirth: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATEONLY(),
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("L", "P"),
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(14),
      allowNull: false,
    },
    history_sicknes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    photo: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
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
    tableName: "users",
    sequelize, // passing the `sequelize` instance is required
    paranoid: true,
    timestamps: true,
  }
);
export default User;
