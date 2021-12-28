import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ShipmentDeviatedAttributes {
  id: number;
  parent_id?: number;
  shipment_eta?: Date;
  delivered_date?: Date;
  etaDeviation_flag?: string;
  deviation_days?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ShipmentDeviatedPk = "id";
export type ShipmentDeviatedId = ShipmentDeviated[ShipmentDeviatedPk];
export type ShipmentDeviatedOptionalAttributes = "id" | "parent_id" | "shipment_eta" | "delivered_date" | "etaDeviation_flag" | "deviation_days" | "createdAt" | "updatedAt";
export type ShipmentDeviatedCreationAttributes = Optional<ShipmentDeviatedAttributes, ShipmentDeviatedOptionalAttributes>;

export class ShipmentDeviated extends Model<ShipmentDeviatedAttributes, ShipmentDeviatedCreationAttributes> implements ShipmentDeviatedAttributes {
  id!: number;
  parent_id?: number;
  shipment_eta?: Date;
  delivered_date?: Date;
  etaDeviation_flag?: string;
  deviation_days?: number;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ShipmentDeviated {
    ShipmentDeviated.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipment_eta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    delivered_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    etaDeviation_flag: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    deviation_days: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shipment_deviated',
    timestamps: true,
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
        name: "shipment_eta",
        using: "BTREE",
        fields: [
          { name: "etaDeviation_flag" },
        ]
      },
      {
        name: "delivered_date",
        using: "BTREE",
        fields: [
          { name: "delivered_date" },
        ]
      },
      {
        name: "idx_shipment_deviated",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
  return ShipmentDeviated;
  }
}
