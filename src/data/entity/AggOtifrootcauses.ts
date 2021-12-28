import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AggOtifrootcausesAttributes {
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

export type AggOtifrootcausesPk = "id";
export type AggOtifrootcausesId = AggOtifrootcauses[AggOtifrootcausesPk];
export type AggOtifrootcausesOptionalAttributes = "id" | "origin_country" | "year_number" | "modeof_transport" | "month" | "year_month" | "standardized_otifrootcauses" | "shipments" | "gross_ontime";
export type AggOtifrootcausesCreationAttributes = Optional<AggOtifrootcausesAttributes, AggOtifrootcausesOptionalAttributes>;

export class AggOtifrootcauses extends Model<AggOtifrootcausesAttributes, AggOtifrootcausesCreationAttributes> implements AggOtifrootcausesAttributes {
  id!: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  year_month?: string;
  standardized_otifrootcauses?: string;
  shipments?: number;
  gross_ontime?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AggOtifrootcauses {
    AggOtifrootcauses.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
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
      type: DataTypes.STRING(200),
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
    tableName: 'agg_otifrootcauses',
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
      {
        name: "gross_ontime",
        using: "BTREE",
        fields: [
          { name: "gross_ontime" },
        ]
      },
    ]
  });
  return AggOtifrootcauses;
  }
}
