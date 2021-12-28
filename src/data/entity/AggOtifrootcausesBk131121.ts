import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AggOtifrootcausesBk131121Attributes {
  id: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  year_month?: string;
  standardized_otifrootcauses?: string;
  shipments?: number;
  gross_ontime?: string;
}

export type AggOtifrootcausesBk131121Pk = "id";
export type AggOtifrootcausesBk131121Id = AggOtifrootcausesBk131121[AggOtifrootcausesBk131121Pk];
export type AggOtifrootcausesBk131121OptionalAttributes = "id" | "origin_country" | "year_number" | "modeof_transport" | "month" | "year_month" | "standardized_otifrootcauses" | "shipments" | "gross_ontime";
export type AggOtifrootcausesBk131121CreationAttributes = Optional<AggOtifrootcausesBk131121Attributes, AggOtifrootcausesBk131121OptionalAttributes>;

export class AggOtifrootcausesBk131121 extends Model<AggOtifrootcausesBk131121Attributes, AggOtifrootcausesBk131121CreationAttributes> implements AggOtifrootcausesBk131121Attributes {
  id!: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  year_month?: string;
  standardized_otifrootcauses?: string;
  shipments?: number;
  gross_ontime?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AggOtifrootcausesBk131121 {
    AggOtifrootcausesBk131121.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    origin_country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    modeof_transport: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    standardized_otifrootcauses: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipments: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gross_ontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agg_otifrootcauses_bk131121',
    timestamps: false
  });
  return AggOtifrootcausesBk131121;
  }
}
