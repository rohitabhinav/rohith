import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ImShipmentAnalyticsCostAttributes {
  id: number;
  shipper_account_number?: string;
  unit_cost_total_price_az?: number;
  ship_cost_dangerous_goods?: string;
  parent_id?: number;
  calc_total_price_with_rate?: number;
  chargeable_weight?: number;
  ship_cost_lane_name?: string;
  publish_info_hash?: string;
  origin_country?: string;
  ship_cost_lane_id?: string;
  shipment_creation_offset?: number;
  chargeable_weight_units?: string;
  destination_country?: string;
  unit_cost_total_price?: number;
  ship_reference_id?: string;
  mode_of_transport?: string;
  inco_terms?: string;
  ship_cost_invoice_currency?: string;
  shipment_creation_date_time?: Date;
  service_code?: string;
  shipment_id?: string;
  calc_total_price_with_rate_az?: number;
  createdAt?: Date;
  updatedAt?: Date;
  shipper_org_Id?: string;
  ship_cost_container_type?: string;
}

export type ImShipmentAnalyticsCostPk = "id";
export type ImShipmentAnalyticsCostId = ImShipmentAnalyticsCost[ImShipmentAnalyticsCostPk];
export type ImShipmentAnalyticsCostOptionalAttributes = "id" | "shipper_account_number" | "unit_cost_total_price_az" | "ship_cost_dangerous_goods" | "parent_id" | "calc_total_price_with_rate" | "chargeable_weight" | "ship_cost_lane_name" | "publish_info_hash" | "origin_country" | "ship_cost_lane_id" | "shipment_creation_offset" | "chargeable_weight_units" | "destination_country" | "unit_cost_total_price" | "ship_reference_id" | "mode_of_transport" | "inco_terms" | "ship_cost_invoice_currency" | "shipment_creation_date_time" | "service_code" | "shipment_id" | "calc_total_price_with_rate_az" | "createdAt" | "updatedAt" | "shipper_org_Id" | "ship_cost_container_type";
export type ImShipmentAnalyticsCostCreationAttributes = Optional<ImShipmentAnalyticsCostAttributes, ImShipmentAnalyticsCostOptionalAttributes>;

export class ImShipmentAnalyticsCost extends Model<ImShipmentAnalyticsCostAttributes, ImShipmentAnalyticsCostCreationAttributes> implements ImShipmentAnalyticsCostAttributes {
  id!: number;
  shipper_account_number?: string;
  unit_cost_total_price_az?: number;
  ship_cost_dangerous_goods?: string;
  parent_id?: number;
  calc_total_price_with_rate?: number;
  chargeable_weight?: number;
  ship_cost_lane_name?: string;
  publish_info_hash?: string;
  origin_country?: string;
  ship_cost_lane_id?: string;
  shipment_creation_offset?: number;
  chargeable_weight_units?: string;
  destination_country?: string;
  unit_cost_total_price?: number;
  ship_reference_id?: string;
  mode_of_transport?: string;
  inco_terms?: string;
  ship_cost_invoice_currency?: string;
  shipment_creation_date_time?: Date;
  service_code?: string;
  shipment_id?: string;
  calc_total_price_with_rate_az?: number;
  createdAt?: Date;
  updatedAt?: Date;
  shipper_org_Id?: string;
  ship_cost_container_type?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ImShipmentAnalyticsCost {
    ImShipmentAnalyticsCost.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    shipper_account_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    unit_cost_total_price_az: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ship_cost_dangerous_goods: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    calc_total_price_with_rate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    chargeable_weight: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ship_cost_lane_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    publish_info_hash: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ship_cost_lane_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_creation_offset: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chargeable_weight_units: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    unit_cost_total_price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ship_reference_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    inco_terms: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ship_cost_invoice_currency: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_creation_date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    service_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    calc_total_price_with_rate_az: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    shipper_org_Id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ship_cost_container_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'im_shipment_analytics_cost',
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
        name: "idx_im_shipment_analytics_cost_pid",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
  return ImShipmentAnalyticsCost;
  }
}
