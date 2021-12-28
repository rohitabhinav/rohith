import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AggAirlinePerformanceAttributes {
  id: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  row_lables?: string;
  ontime_shipcount?: string;
  ontime_shippercentage?: string;
  rebookedgsk_shipcount?: string;
  rebookedgsk_shippercentage?: string;
  rebooked_shipcount?: string;
  rebooked_shippercentage?: string;
  inful_shipcount?: string;
  ifnul_shippercentage?: string;
  coldchain_shipments?: string;
  coldchain_percentage?: string;
  damage_shipcount?: string;
  damage_shippercentage?: string;
  totalshipments?: string;
  totalpercentage?: string;
}

export type AggAirlinePerformancePk = "id";
export type AggAirlinePerformanceId = AggAirlinePerformance[AggAirlinePerformancePk];
export type AggAirlinePerformanceOptionalAttributes = "id" | "origin_country" | "year_number" | "modeof_transport" | "month" | "row_lables" | "ontime_shipcount" | "ontime_shippercentage" | "rebookedgsk_shipcount" | "rebookedgsk_shippercentage" | "rebooked_shipcount" | "rebooked_shippercentage" | "inful_shipcount" | "ifnul_shippercentage" | "coldchain_shipments" | "coldchain_percentage" | "damage_shipcount" | "damage_shippercentage" | "totalshipments" | "totalpercentage";
export type AggAirlinePerformanceCreationAttributes = Optional<AggAirlinePerformanceAttributes, AggAirlinePerformanceOptionalAttributes>;

export class AggAirlinePerformance extends Model<AggAirlinePerformanceAttributes, AggAirlinePerformanceCreationAttributes> implements AggAirlinePerformanceAttributes {
  id!: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  row_lables?: string;
  ontime_shipcount?: string;
  ontime_shippercentage?: string;
  rebookedgsk_shipcount?: string;
  rebookedgsk_shippercentage?: string;
  rebooked_shipcount?: string;
  rebooked_shippercentage?: string;
  inful_shipcount?: string;
  ifnul_shippercentage?: string;
  coldchain_shipments?: string;
  coldchain_percentage?: string;
  damage_shipcount?: string;
  damage_shippercentage?: string;
  totalshipments?: string;
  totalpercentage?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AggAirlinePerformance {
    AggAirlinePerformance.init({
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
    row_lables: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ontime_shipcount: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ontime_shippercentage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebookedgsk_shipcount: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebookedgsk_shippercentage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebooked_shipcount: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebooked_shippercentage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    inful_shipcount: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ifnul_shippercentage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    coldchain_shipments: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    coldchain_percentage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    damage_shipcount: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    damage_shippercentage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    totalshipments: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    totalpercentage: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agg_airline_performance',
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
        name: "rebookshipcount",
        using: "BTREE",
        fields: [
          { name: "rebooked_shipcount" },
        ]
      },
      {
        name: "ontimeshipment",
        using: "BTREE",
        fields: [
          { name: "ontime_shipcount" },
        ]
      },
      {
        name: "rebookgskshipcount",
        using: "BTREE",
        fields: [
          { name: "rebookedgsk_shipcount" },
        ]
      },
      {
        name: "infulshipcount",
        using: "BTREE",
        fields: [
          { name: "inful_shipcount" },
        ]
      },
      {
        name: "damageshipcount",
        using: "BTREE",
        fields: [
          { name: "damage_shipcount" },
        ]
      },
      {
        name: "totshipcount",
        using: "BTREE",
        fields: [
          { name: "totalshipments" },
        ]
      },
    ]
  });
  return AggAirlinePerformance;
  }
}
