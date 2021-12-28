import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface BvShipmentEtaDeviationNodateAttributes {
  origin_code?: string;
  destination_code?: string;
  shipper?: string;
  noOfShipments?: number;
  hawb?: number;
  etaDeviation_flag?: number;
  totetaDeviation_flag?: number;
  etaDeviation?: number;
}

export type BvShipmentEtaDeviationNodateOptionalAttributes = "origin_code" | "destination_code" | "shipper" | "noOfShipments" | "hawb" | "etaDeviation_flag" | "totetaDeviation_flag" | "etaDeviation";
export type BvShipmentEtaDeviationNodateCreationAttributes = Optional<BvShipmentEtaDeviationNodateAttributes, BvShipmentEtaDeviationNodateOptionalAttributes>;

export class BvShipmentEtaDeviationNodate extends Model<BvShipmentEtaDeviationNodateAttributes, BvShipmentEtaDeviationNodateCreationAttributes> implements BvShipmentEtaDeviationNodateAttributes {
  origin_code?: string;
  destination_code?: string;
  shipper?: string;
  noOfShipments?: number;
  hawb?: number;
  etaDeviation_flag?: number;
  totetaDeviation_flag?: number;
  etaDeviation?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof BvShipmentEtaDeviationNodate {
    BvShipmentEtaDeviationNodate.init({
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
    noOfShipments: {
      type: DataTypes.DECIMAL(42,0),
      allowNull: true
    },
    hawb: {
      type: DataTypes.DECIMAL(42,0),
      allowNull: true
    },
    etaDeviation_flag: {
      type: DataTypes.DECIMAL(42,0),
      allowNull: true
    },
    totetaDeviation_flag: {
      type: DataTypes.DECIMAL(42,0),
      allowNull: true
    },
    etaDeviation: {
      type: DataTypes.DECIMAL(46,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BV_shipment_eta_deviation_nodate',
    timestamps: false
  });
  return BvShipmentEtaDeviationNodate;
  }
}
