import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface KpiDocumentAttributes {
  id: number;
  ship_id?: string;
  hawb?: string;
  parent_id?: string;
  shipper_name?: string;
  gross_ontime?: string;
  infull?: string;
  rebookedby?: string;
  rebooked?: string;
  cancelledby?: string;
  cancelled?: string;
  damage?: string;
  temp_deviation?: string;
  frozen?: string;
  remark?: string;
  action?: string;
  actiondate?: string;
  actionby?: string;
  standardized_action?: string;
  otifrootcauses?: string;
  netontime?: string;
  class?: string;
  lane?: string;
  rebooking?: string;
  shipment_count?: string;
  damage_intact?: string;
  coldchain?: string;
  nofreeze?: string;
  active_status?: string;
  reporting?: string;
  language?: string;
  service_reportings?: string;
  followup_complaints?: string;
  cost_saving?: string;
  accuracy_document?: string;
  pickup?: string;
  deviation_management?: string;
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
}

export type KpiDocumentPk = "id";
export type KpiDocumentId = KpiDocument[KpiDocumentPk];
export type KpiDocumentOptionalAttributes = "id" | "ship_id" | "hawb" | "parent_id" | "shipper_name" | "gross_ontime" | "infull" | "rebookedby" | "rebooked" | "cancelledby" | "cancelled" | "damage" | "temp_deviation" | "frozen" | "remark" | "action" | "actiondate" | "actionby" | "standardized_action" | "otifrootcauses" | "netontime" | "class" | "lane" | "rebooking" | "shipment_count" | "damage_intact" | "coldchain" | "nofreeze" | "active_status" | "reporting" | "language" | "service_reportings" | "followup_complaints" | "cost_saving" | "accuracy_document" | "pickup" | "deviation_management" | "carbon_netural" | "carbon_positive" | "carbon_calculation" | "reason_forbreach" | "cost_avoidance" | "amount_avoidance" | "reason_avoidance" | "cost_currencytype" | "createdAt" | "updatedAt";
export type KpiDocumentCreationAttributes = Optional<KpiDocumentAttributes, KpiDocumentOptionalAttributes>;

export class KpiDocument extends Model<KpiDocumentAttributes, KpiDocumentCreationAttributes> implements KpiDocumentAttributes {
  id!: number;
  ship_id?: string;
  hawb?: string;
  parent_id?: string;
  shipper_name?: string;
  gross_ontime?: string;
  infull?: string;
  rebookedby?: string;
  rebooked?: string;
  cancelledby?: string;
  cancelled?: string;
  damage?: string;
  temp_deviation?: string;
  frozen?: string;
  remark?: string;
  action?: string;
  actiondate?: string;
  actionby?: string;
  standardized_action?: string;
  otifrootcauses?: string;
  netontime?: string;
  class?: string;
  lane?: string;
  rebooking?: string;
  shipment_count?: string;
  damage_intact?: string;
  coldchain?: string;
  nofreeze?: string;
  active_status?: string;
  reporting?: string;
  language?: string;
  service_reportings?: string;
  followup_complaints?: string;
  cost_saving?: string;
  accuracy_document?: string;
  pickup?: string;
  deviation_management?: string;
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


  static initModel(sequelize: Sequelize.Sequelize): typeof KpiDocument {
    KpiDocument.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ship_id: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    hawb: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipper_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    gross_ontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    infull: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebookedby: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "if rebookedby 0 then rebooked by dhl else 1 then gsk"
    },
    rebooked: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cancelledby: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "if cancelled 0 then rebooked by dhl else 1 then gsk"
    },
    cancelled: {
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
      type: DataTypes.STRING(45),
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
      type: DataTypes.STRING(45),
      allowNull: true
    },
    otifrootcauses: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    netontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    class: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lane: {
      type: DataTypes.STRING(45),
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
    followup_complaints: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cost_saving: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    accuracy_document: {
      type: DataTypes.STRING(45),
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
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cost_avoidance: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    amount_avoidance: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reason_avoidance: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cost_currencytype: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'KPI_document',
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
    ]
  });
  return KpiDocument;
  }
}
