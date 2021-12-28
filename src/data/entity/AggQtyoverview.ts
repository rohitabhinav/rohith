import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AggQtyoverviewAttributes {
  id: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  year_month?: string;
  shipments?: string;
  totchargeable_weight?: string;
  total_volume?: string;
  grass_ontime?: string;
  dhlnetontime_perfomence?: string;
  shipment_total_charge?: string;
  quarter?: string;
}

export type AggQtyoverviewPk = "id";
export type AggQtyoverviewId = AggQtyoverview[AggQtyoverviewPk];
export type AggQtyoverviewOptionalAttributes = "id" | "origin_country" | "year_number" | "modeof_transport" | "month" | "year_month" | "shipments" | "totchargeable_weight" | "total_volume" | "grass_ontime" | "dhlnetontime_perfomence" | "shipment_total_charge" | "quarter";
export type AggQtyoverviewCreationAttributes = Optional<AggQtyoverviewAttributes, AggQtyoverviewOptionalAttributes>;

export class AggQtyoverview extends Model<AggQtyoverviewAttributes, AggQtyoverviewCreationAttributes> implements AggQtyoverviewAttributes {
  id!: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  year_month?: string;
  shipments?: string;
  totchargeable_weight?: string;
  total_volume?: string;
  grass_ontime?: string;
  dhlnetontime_perfomence?: string;
  shipment_total_charge?: string;
  quarter?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AggQtyoverview {
    AggQtyoverview.init({
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
    shipments: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    totchargeable_weight: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    total_volume: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    grass_ontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dhlnetontime_perfomence: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipment_total_charge: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    quarter: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "should calculate from trx table"
    }
  }, {
    sequelize,
    tableName: 'agg_qtyoverview',
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
        name: "totchargeable_weight",
        using: "BTREE",
        fields: [
          { name: "totchargeable_weight" },
        ]
      },
      {
        name: "total_volume",
        using: "BTREE",
        fields: [
          { name: "total_volume" },
        ]
      },
      {
        name: "grass_ontime",
        using: "BTREE",
        fields: [
          { name: "grass_ontime" },
        ]
      },
      {
        name: "shiptotal_charge",
        using: "BTREE",
        fields: [
          { name: "shipment_total_charge" },
        ]
      },
    ]
  });
  return AggQtyoverview;
  }
}
