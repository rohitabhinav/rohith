import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SourceOperationalDataAttributes {
  id: number;
  shipper_AccNumber?: string;
  hawb?: string;
  shipper_name?: string;
  shipper_country?: string;
  shipment_reference_num?: string;
  Consignee_city?: string;
  Consignee_name?: string;
  Consignee_reference?: string;
  console_reference_num?: string;
  origin_country?: string;
  destination_country?: string;
  org?: string;
  destination_code?: string;
  airline_prifix?: string;
  mawb?: string;
  freight_terms?: string;
  shipment_service_code?: string;
  content_description?: string;
  total_pieces?: string;
  total_weight?: number;
  chargeable_weight?: number;
  total_volume?: number;
  weight_uom?: string;
  hbcreationdate?: string;
  actual_arrival?: string;
  estimated_arrival?: string;
  pod?: string;
  pod_name?: string;
  dis_timestamp?: string;
  dis_description?: string;
  airline_name?: string;
  total_cost?: number;
  export_freightcharges?: string;
  fuel_prepaid?: string;
  security_pripaid?: string;
  destairline?: string;
  elapsed_days?: string;
  wdays_pickupto_pod?: string;
  preference_level?: string;
  hbday?: string;
  podday?: string;
  gross_ontime?: string;
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
  month_number?: string;
  class?: string;
  year_number?: string;
  lane?: string;
  quarter?: string;
  year_quarter?: string;
  year_month?: string;
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
  followup_complaints?: string;
  cost_saving?: string;
  accuracy_document?: string;
  pickup?: string;
  deviation_management?: string;
}

export type SourceOperationalDataPk = "id";
export type SourceOperationalDataId = SourceOperationalData[SourceOperationalDataPk];
export type SourceOperationalDataOptionalAttributes = "id" | "shipper_AccNumber" | "hawb" | "shipper_name" | "shipper_country" | "shipment_reference_num" | "Consignee_city" | "Consignee_name" | "Consignee_reference" | "console_reference_num" | "origin_country" | "destination_country" | "org" | "destination_code" | "airline_prifix" | "mawb" | "freight_terms" | "shipment_service_code" | "content_description" | "total_pieces" | "total_weight" | "chargeable_weight" | "total_volume" | "weight_uom" | "hbcreationdate" | "actual_arrival" | "estimated_arrival" | "pod" | "pod_name" | "dis_timestamp" | "dis_description" | "airline_name" | "total_cost" | "export_freightcharges" | "fuel_prepaid" | "security_pripaid" | "destairline" | "elapsed_days" | "wdays_pickupto_pod" | "preference_level" | "hbday" | "podday" | "gross_ontime" | "infull" | "rebooked" | "rebooked_gsk" | "damage" | "temp_deviation" | "frozen" | "remark" | "action" | "actiondate" | "actionby" | "standardized_action" | "standardized_otifrootcauses" | "netontime" | "month_number" | "class" | "year_number" | "lane" | "quarter" | "year_quarter" | "year_month" | "rebooking" | "shipment_count" | "damage_intact" | "coldchain" | "nofreeze" | "modeof_transport" | "active_status" | "reporting" | "language" | "service_reportings" | "followup_complaints" | "cost_saving" | "accuracy_document" | "pickup" | "deviation_management";
export type SourceOperationalDataCreationAttributes = Optional<SourceOperationalDataAttributes, SourceOperationalDataOptionalAttributes>;

export class SourceOperationalData extends Model<SourceOperationalDataAttributes, SourceOperationalDataCreationAttributes> implements SourceOperationalDataAttributes {
  id!: number;
  shipper_AccNumber?: string;
  hawb?: string;
  shipper_name?: string;
  shipper_country?: string;
  shipment_reference_num?: string;
  Consignee_city?: string;
  Consignee_name?: string;
  Consignee_reference?: string;
  console_reference_num?: string;
  origin_country?: string;
  destination_country?: string;
  org?: string;
  destination_code?: string;
  airline_prifix?: string;
  mawb?: string;
  freight_terms?: string;
  shipment_service_code?: string;
  content_description?: string;
  total_pieces?: string;
  total_weight?: number;
  chargeable_weight?: number;
  total_volume?: number;
  weight_uom?: string;
  hbcreationdate?: string;
  actual_arrival?: string;
  estimated_arrival?: string;
  pod?: string;
  pod_name?: string;
  dis_timestamp?: string;
  dis_description?: string;
  airline_name?: string;
  total_cost?: number;
  export_freightcharges?: string;
  fuel_prepaid?: string;
  security_pripaid?: string;
  destairline?: string;
  elapsed_days?: string;
  wdays_pickupto_pod?: string;
  preference_level?: string;
  hbday?: string;
  podday?: string;
  gross_ontime?: string;
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
  month_number?: string;
  class?: string;
  year_number?: string;
  lane?: string;
  quarter?: string;
  year_quarter?: string;
  year_month?: string;
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
  followup_complaints?: string;
  cost_saving?: string;
  accuracy_document?: string;
  pickup?: string;
  deviation_management?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof SourceOperationalData {
    SourceOperationalData.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    shipper_AccNumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hawb: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipper_name: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    shipper_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_reference_num: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Consignee_city: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Consignee_name: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    Consignee_reference: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    console_reference_num: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    origin_country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    destination_country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    org: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    destination_code: {
      type: DataTypes.STRING(3000),
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
      type: DataTypes.STRING(300),
      allowNull: true
    },
    shipment_service_code: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    content_description: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    total_pieces: {
      type: DataTypes.STRING(100),
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
    total_volume: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    weight_uom: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    hbcreationdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    actual_arrival: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estimated_arrival: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pod: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pod_name: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    dis_timestamp: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    dis_description: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    airline_name: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    total_cost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    export_freightcharges: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    fuel_prepaid: {
      type: DataTypes.STRING(300),
      allowNull: true,
      defaultValue: "0"
    },
    security_pripaid: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    destairline: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    elapsed_days: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    wdays_pickupto_pod: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    preference_level: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    hbday: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    podday: {
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
      type: DataTypes.STRING(45),
      allowNull: true
    },
    standardized_otifrootcauses: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    netontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    month_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    class: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lane: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    quarter: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_quarter: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_month: {
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
      type: DataTypes.STRING(200),
      allowNull: true
    },
    followup_complaints: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    cost_saving: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    accuracy_document: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    pickup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    deviation_management: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sourceOperationalData',
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
    ]
  });
  return SourceOperationalData;
  }
}
