import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AppUsersAttributes {
  id: number;
  EMAIL_ID?: string;
  PASSWORD?: string;
  USER_TYPE?: string;
  USER_ID?: string;
  USER_ROLE?: string;
  USER_ORG?: string;
}

export type AppUsersPk = "id";
export type AppUsersId = AppUsers[AppUsersPk];
export type AppUsersOptionalAttributes = "id" | "EMAIL_ID" | "PASSWORD" | "USER_TYPE" | "USER_ID" | "USER_ROLE" | "USER_ORG";
export type AppUsersCreationAttributes = Optional<AppUsersAttributes, AppUsersOptionalAttributes>;

export class AppUsers extends Model<AppUsersAttributes, AppUsersCreationAttributes> implements AppUsersAttributes {
  id!: number;
  EMAIL_ID?: string;
  PASSWORD?: string;
  USER_TYPE?: string;
  USER_ID?: string;
  USER_ROLE?: string;
  USER_ORG?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AppUsers {
    AppUsers.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EMAIL_ID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PASSWORD: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    USER_TYPE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    USER_ID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    USER_ROLE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    USER_ORG: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AppUsers',
    timestamps: false,
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
  return AppUsers;
  }
}
