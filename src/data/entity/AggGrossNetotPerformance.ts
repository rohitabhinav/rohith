import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AggGrossNetotPerformanceAttributes {
  id: number;
  origin_country?: string;
  year_number?: string;
  month?: string;
  shipments?: string;
  gross_ontime?: string;
  netontime?: string;
}

export type AggGrossNetotPerformancePk = "id";
export type AggGrossNetotPerformanceId = AggGrossNetotPerformance[AggGrossNetotPerformancePk];
export type AggGrossNetotPerformanceOptionalAttributes = "id" | "origin_country" | "year_number" | "month" | "shipments" | "gross_ontime" | "netontime";
export type AggGrossNetotPerformanceCreationAttributes = Optional<AggGrossNetotPerformanceAttributes, AggGrossNetotPerformanceOptionalAttributes>;

export class AggGrossNetotPerformance extends Model<AggGrossNetotPerformanceAttributes, AggGrossNetotPerformanceCreationAttributes> implements AggGrossNetotPerformanceAttributes {
  id!: number;
  origin_country?: string;
  year_number?: string;
  month?: string;
  shipments?: string;
  gross_ontime?: string;
  netontime?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AggGrossNetotPerformance {
    AggGrossNetotPerformance.init({
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
    month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipments: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "sum of shipment_reference_num"
    },
    gross_ontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    netontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agg_gross_netotPerformance',
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
        name: "shipcount",
        using: "BTREE",
        fields: [
          { name: "shipments" },
        ]
      },
      {
        name: "grossontime",
        using: "BTREE",
        fields: [
          { name: "gross_ontime" },
        ]
      },
      {
        name: "netontime",
        using: "BTREE",
        fields: [
          { name: "netontime" },
        ]
      },
    ]
  });
  return AggGrossNetotPerformance;
  }
}
