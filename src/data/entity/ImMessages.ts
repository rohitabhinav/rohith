import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ImMessagesAttributes {
  id: number;
  uuid?: string;
  receivers?: string;
  sender?: string;
  message_file_path?: string;
  status?: string;
  type?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type ImMessagesPk = "id";
export type ImMessagesId = ImMessages[ImMessagesPk];
export type ImMessagesOptionalAttributes = "id" | "uuid" | "receivers" | "sender" | "message_file_path" | "status" | "type" | "createdAt" | "updatedAt" | "deletedAt";
export type ImMessagesCreationAttributes = Optional<ImMessagesAttributes, ImMessagesOptionalAttributes>;

export class ImMessages extends Model<ImMessagesAttributes, ImMessagesCreationAttributes> implements ImMessagesAttributes {
  id!: number;
  uuid?: string;
  receivers?: string;
  sender?: string;
  message_file_path?: string;
  status?: string;
  type?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ImMessages {
    ImMessages.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    receivers: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    message_file_path: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'im_messages',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return ImMessages;
  }
}
