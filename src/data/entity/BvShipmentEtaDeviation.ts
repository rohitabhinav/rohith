import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface BvShipmentEtaDeviationAttributes {
  origin_code?: string;
  destination_code?: string;
  shipper?: string;
  shipment_confirmed_date?: string;
  noOfShipments: number;
  hawb: number;
  etaDeviation_flag: number;
  totetaDeviation_flag: number;
  etaDeviation?: number;
}

export type BvShipmentEtaDeviationOptionalAttributes = "origin_code" | "destination_code" | "shipper" | "shipment_confirmed_date" | "noOfShipments" | "hawb" | "etaDeviation_flag" | "totetaDeviation_flag" | "etaDeviation";
export type BvShipmentEtaDeviationCreationAttributes = Optional<BvShipmentEtaDeviationAttributes, BvShipmentEtaDeviationOptionalAttributes>;

export class BvShipmentEtaDeviation extends Model<BvShipmentEtaDeviationAttributes, BvShipmentEtaDeviationCreationAttributes> implements BvShipmentEtaDeviationAttributes {
  origin_code?: string;
  destination_code?: string;
  shipper?: string;
  shipment_confirmed_date?: string;
  noOfShipments!: number;
  hawb!: number;
  etaDeviation_flag!: number;
  totetaDeviation_flag!: number;
  etaDeviation?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof BvShipmentEtaDeviation {
    BvShipmentEtaDeviation.init({
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
    shipment_confirmed_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    noOfShipments: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    hawb: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    etaDeviation_flag: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    totetaDeviation_flag: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    etaDeviation: {
      type: DataTypes.DECIMAL(24,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BV_shipment_eta_deviation',
    timestamps: false
  });
  return BvShipmentEtaDeviation;
  }
}
