import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AggCostanalysisShipmentsAttributes {
  origin_code?: string;
  destination_code?: string;
  shipper?: string;
  lspOrgName?: string;
  smode_of_transport?: string;
  noofshipments: number;
  noofhawbs: number;
  assumed_ratesused?: number;
  totalcost?: number;
  shipment_confirmed_date?: Date;
}

export type AggCostanalysisShipmentsOptionalAttributes = "origin_code" | "destination_code" | "shipper" | "lspOrgName" | "smode_of_transport" | "noofshipments" | "noofhawbs" | "assumed_ratesused" | "totalcost" | "shipment_confirmed_date";
export type AggCostanalysisShipmentsCreationAttributes = Optional<AggCostanalysisShipmentsAttributes, AggCostanalysisShipmentsOptionalAttributes>;

export class AggCostanalysisShipments extends Model<AggCostanalysisShipmentsAttributes, AggCostanalysisShipmentsCreationAttributes> implements AggCostanalysisShipmentsAttributes {
  origin_code?: string;
  destination_code?: string;
  shipper?: string;
  lspOrgName?: string;
  smode_of_transport?: string;
  noofshipments!: number;
  noofhawbs!: number;
  assumed_ratesused?: number;
  totalcost?: number;
  shipment_confirmed_date?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof AggCostanalysisShipments {
    AggCostanalysisShipments.init({
    origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipper: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lspOrgName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    smode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    noofshipments: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    noofhawbs: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    assumed_ratesused: {
      type: DataTypes.DOUBLE(19,2),
      allowNull: true
    },
    totalcost: {
      type: DataTypes.DOUBLE(19,2),
      allowNull: true
    },
    shipment_confirmed_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agg_costanalysis_shipments',
    timestamps: false
  });
  return AggCostanalysisShipments;
  }
}
