import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DimConsignee, DimConsigneeId } from './DimConsignee';
import type { DimAirline, DimAirlineId } from './DimAirline';
import type { DimDelivery, DimDeliveryId } from './DimDelivery';
import type { DimPickup, DimPickupId } from './DimPickup';
import type { DimPortofDest, DimPortofDestId } from './DimPortofDest';
import type { DimPortofOrigin, DimPortofOriginId } from './DimPortofOrigin';
import type { DimShipper, DimShipperId } from './DimShipper';
import type { DimTime, DimTimeId } from './DimTime';

export interface FactOperationalDataAttributes {
  id: number;
  hawb?: string;
  shipment_reference_num?: string;
  consignee_reference?: string;
  console_reference_num?: string;
  airline_prifix?: string;
  mawb?: string;
  freight_terms?: string;
  total_volume?: number;
  shipment_service_code?: string;
  weight_uom?: string;
  content_description?: string;
  hbcreationdate?: string;
  total_pieces?: string;
  actual_arrival?: string;
  total_weight?: number;
  chargeable_weight?: number;
  gross_ontime?: string;
  security_pripaid?: string;
  fuel_prepaid?: number;
  export_freightcharges?: number;
  total_cost?: number;
  preference_level?: string;
  podday?: string;
  hbday?: string;
  wdays_pickupto_pod?: string;
  elapsed_days?: string;
  dis_description?: string;
  dis_timestamp?: string;
  pod_name?: string;
  pod?: string;
  estimated_arrival?: string;
  container_weight?: string;
  infull?: string;
  rebooked?: string;
  rebooked_gsk?: string;
  damage?: string;
  temp_deviation?: string;
  frozen?: string;
  remark?: string;
  action?: string;
  actiondate?: string;
  actionby?: string;
  standardized_action?: string;
  standardized_otifrootcauses?: string;
  netontime?: string;
  class?: string;
  lane?: string;
  rebooking?: string;
  shipment_count?: string;
  damage_intact?: string;
  coldchain?: string;
  nofreeze?: string;
  modeof_transport?: string;
  active_status?: string;
  reporting?: string;
  language?: string;
  service_reportings?: string;
  complaints?: string;
  cost_saving?: string;
  accuracy_document?: string;
  pickup?: string;
  deviation_management?: string;
  destairline_id?: number;
  consignee_id?: number;
  dest_id?: number;
  org_id?: number;
  shipper_id?: number;
  dimtime_id?: number;
  dimpickup_id?: number;
  dimdelivery_id?: number;
  cancelledby?: string;
  cancelled?: string;
  carbon_netural?: string;
  carbon_positive?: string;
  carbon_calculation?: string;
  reason_forbreach?: string;
  cost_avoidance?: string;
  amount_avoidance?: string;
  reason_avoidance?: string;
  cost_currencytype?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type FactOperationalDataPk = "id";
export type FactOperationalDataId = FactOperationalData[FactOperationalDataPk];
export type FactOperationalDataOptionalAttributes = "id" | "hawb" | "shipment_reference_num" | "consignee_reference" | "console_reference_num" | "airline_prifix" | "mawb" | "freight_terms" | "total_volume" | "shipment_service_code" | "weight_uom" | "content_description" | "hbcreationdate" | "total_pieces" | "actual_arrival" | "total_weight" | "chargeable_weight" | "gross_ontime" | "security_pripaid" | "fuel_prepaid" | "export_freightcharges" | "total_cost" | "preference_level" | "podday" | "hbday" | "wdays_pickupto_pod" | "elapsed_days" | "dis_description" | "dis_timestamp" | "pod_name" | "pod" | "estimated_arrival" | "container_weight" | "infull" | "rebooked" | "rebooked_gsk" | "damage" | "temp_deviation" | "frozen" | "remark" | "action" | "actiondate" | "actionby" | "standardized_action" | "standardized_otifrootcauses" | "netontime" | "class" | "lane" | "rebooking" | "shipment_count" | "damage_intact" | "coldchain" | "nofreeze" | "modeof_transport" | "active_status" | "reporting" | "language" | "service_reportings" | "complaints" | "cost_saving" | "accuracy_document" | "pickup" | "deviation_management" | "destairline_id" | "consignee_id" | "dest_id" | "org_id" | "shipper_id" | "dimtime_id" | "dimpickup_id" | "dimdelivery_id" | "cancelledby" | "cancelled" | "carbon_netural" | "carbon_positive" | "carbon_calculation" | "reason_forbreach" | "cost_avoidance" | "amount_avoidance" | "reason_avoidance" | "cost_currencytype" | "createdAt" | "updatedAt" | "deletedAt";
export type FactOperationalDataCreationAttributes = Optional<FactOperationalDataAttributes, FactOperationalDataOptionalAttributes>;

export class FactOperationalData extends Model<FactOperationalDataAttributes, FactOperationalDataCreationAttributes> implements FactOperationalDataAttributes {
  id!: number;
  hawb?: string;
  shipment_reference_num?: string;
  consignee_reference?: string;
  console_reference_num?: string;
  airline_prifix?: string;
  mawb?: string;
  freight_terms?: string;
  total_volume?: number;
  shipment_service_code?: string;
  weight_uom?: string;
  content_description?: string;
  hbcreationdate?: string;
  total_pieces?: string;
  actual_arrival?: string;
  total_weight?: number;
  chargeable_weight?: number;
  gross_ontime?: string;
  security_pripaid?: string;
  fuel_prepaid?: number;
  export_freightcharges?: number;
  total_cost?: number;
  preference_level?: string;
  podday?: string;
  hbday?: string;
  wdays_pickupto_pod?: string;
  elapsed_days?: string;
  dis_description?: string;
  dis_timestamp?: string;
  pod_name?: string;
  pod?: string;
  estimated_arrival?: string;
  container_weight?: string;
  infull?: string;
  rebooked?: string;
  rebooked_gsk?: string;
  damage?: string;
  temp_deviation?: string;
  frozen?: string;
  remark?: string;
  action?: string;
  actiondate?: string;
  actionby?: string;
  standardized_action?: string;
  standardized_otifrootcauses?: string;
  netontime?: string;
  class?: string;
  lane?: string;
  rebooking?: string;
  shipment_count?: string;
  damage_intact?: string;
  coldchain?: string;
  nofreeze?: string;
  modeof_transport?: string;
  active_status?: string;
  reporting?: string;
  language?: string;
  service_reportings?: string;
  complaints?: string;
  cost_saving?: string;
  accuracy_document?: string;
  pickup?: string;
  deviation_management?: string;
  destairline_id?: number;
  consignee_id?: number;
  dest_id?: number;
  org_id?: number;
  shipper_id?: number;
  dimtime_id?: number;
  dimpickup_id?: number;
  dimdelivery_id?: number;
  cancelledby?: string;
  cancelled?: string;
  carbon_netural?: string;
  carbon_positive?: string;
  carbon_calculation?: string;
  reason_forbreach?: string;
  cost_avoidance?: string;
  amount_avoidance?: string;
  reason_avoidance?: string;
  cost_currencytype?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  // FactOperationalData belongsTo DimConsignee via consignee_id
  consignee!: DimConsignee;
  getConsignee!: Sequelize.BelongsToGetAssociationMixin<DimConsignee>;
  setConsignee!: Sequelize.BelongsToSetAssociationMixin<DimConsignee, DimConsigneeId>;
  createConsignee!: Sequelize.BelongsToCreateAssociationMixin<DimConsignee>;
  // FactOperationalData belongsTo DimAirline via destairline_id
  destairline!: DimAirline;
  getDestairline!: Sequelize.BelongsToGetAssociationMixin<DimAirline>;
  setDestairline!: Sequelize.BelongsToSetAssociationMixin<DimAirline, DimAirlineId>;
  createDestairline!: Sequelize.BelongsToCreateAssociationMixin<DimAirline>;
  // FactOperationalData belongsTo DimDelivery via dimdelivery_id
  dimdelivery!: DimDelivery;
  getDimdelivery!: Sequelize.BelongsToGetAssociationMixin<DimDelivery>;
  setDimdelivery!: Sequelize.BelongsToSetAssociationMixin<DimDelivery, DimDeliveryId>;
  createDimdelivery!: Sequelize.BelongsToCreateAssociationMixin<DimDelivery>;
  // FactOperationalData belongsTo DimPickup via dimpickup_id
  dimpickup!: DimPickup;
  getDimpickup!: Sequelize.BelongsToGetAssociationMixin<DimPickup>;
  setDimpickup!: Sequelize.BelongsToSetAssociationMixin<DimPickup, DimPickupId>;
  createDimpickup!: Sequelize.BelongsToCreateAssociationMixin<DimPickup>;
  // FactOperationalData belongsTo DimPortofDest via dest_id
  dest!: DimPortofDest;
  getDest!: Sequelize.BelongsToGetAssociationMixin<DimPortofDest>;
  setDest!: Sequelize.BelongsToSetAssociationMixin<DimPortofDest, DimPortofDestId>;
  createDest!: Sequelize.BelongsToCreateAssociationMixin<DimPortofDest>;
  // FactOperationalData belongsTo DimPortofOrigin via org_id
  org!: DimPortofOrigin;
  getOrg!: Sequelize.BelongsToGetAssociationMixin<DimPortofOrigin>;
  setOrg!: Sequelize.BelongsToSetAssociationMixin<DimPortofOrigin, DimPortofOriginId>;
  createOrg!: Sequelize.BelongsToCreateAssociationMixin<DimPortofOrigin>;
  // FactOperationalData belongsTo DimShipper via shipper_id
  shipper!: DimShipper;
  getShipper!: Sequelize.BelongsToGetAssociationMixin<DimShipper>;
  setShipper!: Sequelize.BelongsToSetAssociationMixin<DimShipper, DimShipperId>;
  createShipper!: Sequelize.BelongsToCreateAssociationMixin<DimShipper>;
  // FactOperationalData belongsTo DimTime via dimtime_id
  dimtime!: DimTime;
  getDimtime!: Sequelize.BelongsToGetAssociationMixin<DimTime>;
  setDimtime!: Sequelize.BelongsToSetAssociationMixin<DimTime, DimTimeId>;
  createDimtime!: Sequelize.BelongsToCreateAssociationMixin<DimTime>;

  static initModel(sequelize: Sequelize.Sequelize): typeof FactOperationalData {
    FactOperationalData.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hawb: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipment_reference_num: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    consignee_reference: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    console_reference_num: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    airline_prifix: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mawb: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    freight_terms: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    total_volume: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    shipment_service_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    weight_uom: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    content_description: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    hbcreationdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    total_pieces: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    actual_arrival: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    total_weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    chargeable_weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    gross_ontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    security_pripaid: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fuel_prepaid: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    export_freightcharges: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    total_cost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    preference_level: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    podday: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    hbday: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    wdays_pickupto_pod: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    elapsed_days: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dis_description: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    dis_timestamp: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pod_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pod: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estimated_arrival: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    container_weight: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    infull: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebooked: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebooked_gsk: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    damage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    temp_deviation: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    frozen: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(10000),
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    actiondate: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    actionby: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    standardized_action: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    standardized_otifrootcauses: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    netontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    class: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    lane: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    rebooking: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipment_count: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    damage_intact: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    coldchain: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nofreeze: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    modeof_transport: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    active_status: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    reporting: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    language: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    service_reportings: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    complaints: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    cost_saving: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    accuracy_document: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    pickup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    deviation_management: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    destairline_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dim_airline',
        key: 'id'
      }
    },
    consignee_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dim_Consignee',
        key: 'id'
      }
    },
    dest_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dim_portof_dest',
        key: 'id'
      }
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dim_portof_origin',
        key: 'id'
      }
    },
    shipper_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dim_shipper',
        key: 'id'
      }
    },
    dimtime_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dim_time',
        key: 'id'
      }
    },
    dimpickup_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dim_pickup',
        key: 'id'
      }
    },
    dimdelivery_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dim_delivery',
        key: 'id'
      }
    },
    cancelledby: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cancelled: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    carbon_netural: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    carbon_positive: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    carbon_calculation: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    reason_forbreach: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cost_avoidance: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    amount_avoidance: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    reason_avoidance: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cost_currencytype: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fact_operationalData',
    timestamps: true,
    paranoid: true,
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
        name: "fact_operationalData_fk1_idx",
        using: "BTREE",
        fields: [
          { name: "destairline_id" },
        ]
      },
      {
        name: "fact_operationalData_fk2_idx",
        using: "BTREE",
        fields: [
          { name: "consignee_id" },
        ]
      },
      {
        name: "fact_operationalData_fk2_idx1",
        using: "BTREE",
        fields: [
          { name: "dest_id" },
        ]
      },
      {
        name: "fact_operationalData_fk3_idx",
        using: "BTREE",
        fields: [
          { name: "org_id" },
        ]
      },
      {
        name: "fact_operationalData_fk4_idx",
        using: "BTREE",
        fields: [
          { name: "shipper_id" },
        ]
      },
      {
        name: "fact_operationalData_fk4_idx1",
        using: "BTREE",
        fields: [
          { name: "dimtime_id" },
        ]
      },
      {
        name: "fact_operationalData_fk7_idx",
        using: "BTREE",
        fields: [
          { name: "dimpickup_id" },
        ]
      },
      {
        name: "fact_operationalData_fk8_idx",
        using: "BTREE",
        fields: [
          { name: "dimdelivery_id" },
        ]
      },
    ]
  });
  return FactOperationalData;
  }
}
