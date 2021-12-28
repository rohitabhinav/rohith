import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface FactImshipmentsAttributes {
  id: number;
  pickupAddress2?: string;
  leg4_destination_code?: string;
  voyage_number?: string;
  leg1_origin_country?: string;
  pickupZip?: string;
  event_desc?: string;
  shipment_origin_country?: string;
  leg3_destination_country?: string;
  leg3_origin_country?: string;
  leg5_sequence_no?: string;
  leg2_destination_code?: string;
  leg4_origin_code?: string;
  leg5_carrier_code?: string;
  leg4_destination_country?: string;
  leg3_ata_offset?: string;
  transport_number?: string;
  parent_id?: number;
  lspOrgId?: string;
  leg1_destination_code?: string;
  volume_uom?: string;
  leg4_carrier_code?: string;
  master_eta?: Date;
  publish_info_hash?: string;
  leg5_carrier_name?: string;
  master_etd?: Date;
  shipment_creation_offset?: string;
  deliveryPartyType?: string;
  mst_reference_id?: string;
  shipment_service_code?: string;
  shipment_destination_code?: string;
  shipment_origin_code?: string;
  leg2_atd_offset?: string;
  leg5_destination_code?: string;
  shipment_destination_name?: string;
  shipperAccountNumber?: string;
  leg5_ata_date?: string;
  leg2_origin_country?: string;
  leg2_transport_number?: string;
  smode_of_transport?: string;
  number_of_pieces?: number;
  consignee?: string;
  leg1_transport_number?: string;
  weight?: number;
  pickuppartyType?: string;
  delivery_mode?: string;
  master_eta_offset?: string;
  chargeable_weight_uom?: string;
  leg3_origin_code?: string;
  carrier_country?: string;
  leg1_mode_of_transport?: string;
  shipment_destination_country?: string;
  leg1_origin_code?: string;
  leg3_sequence_no?: string;
  chargeable_weight?: string;
  leg2_ata_date?: string;
  carrier_iata_code2L?: string;
  leg4_ata_offset?: string;
  leg1_origin_name?: string;
  leg1_atd_date?: string;
  vessel_number?: string;
  leg4_carrier_name?: string;
  master_destination_code?: string;
  leg3_destination_code?: string;
  waybill_creation_offset?: number;
  sshipment_id?: string;
  tracking_num?: string;
  leg2_carrier_name?: string;
  hawb?: string;
  shipment_eta_offset?: number;
  shipment_total_charge?: string;
  master_destination_country?: string;
  leg1_sequence_no?: string;
  leg4_origin_name?: string;
  leg5_destination_name?: string;
  master_destination_name?: string;
  leg4_origin_country?: string;
  freight_terms?: string;
  pickupAddress1?: string;
  shipment_origin_name?: string;
  event_dbid?: number;
  lspOrgName?: string;
  leg4_ata_date?: string;
  commodity_code?: string;
  leg3_origin_name?: string;
  shipper_reference?: string;
  leg2_origin_code?: string;
  leg5_ata_offset?: string;
  leg4_atd_date?: string;
  leg4_destination_name?: string;
  leg4_transport_number?: string;
  leg2_destination_name?: string;
  leg5_origin_country?: string;
  leg4_sequence_no?: string;
  leg2_mode_of_transport?: string;
  leg2_atd_date?: string;
  event_code?: string;
  deliveryAddress1?: string;
  leg3_ata_date?: string;
  master_mode_of_transport?: string;
  leg5_transport_number?: string;
  leg3_transport_number?: string;
  leg5_mode_of_transport?: string;
  leg3_destination_name?: string;
  leg1_carrier_code?: string;
  pickupCity?: string;
  leg1_carrier_name?: string;
  volume?: number;
  inco_term_location?: string;
  leg1_atd_offset?: string;
  master_origin_code?: string;
  leg3_carrier_code?: string;
  consignee_code?: string;
  leg2_carrier_code?: string;
  leg3_carrier_name?: string;
  weight_uom?: string;
  shipment_total_currency?: string;
  deliveryZip?: number;
  leg1_destination_name?: string;
  dangerous_goods?: string;
  leg2_destination_country?: string;
  master_origin_name?: string;
  leg5_atd_offset?: string;
  leg3_atd_offset?: string;
  shipment_pickupdate?: Date;
  event_type?: string;
  commodity_text?: string;
  deliveryAddress2?: string;
  leg4_mode_of_transport?: string;
  shipment_confirmed_date?: Date;
  leg1_ata_date?: string;
  leg1_ata_offset?: string;
  carrier?: string;
  consginee_name?: string;
  master_origin_country?: string;
  leg5_origin_code?: string;
  deliveryCity?: string;
  leg5_destination_country?: string;
  shipment_type_code?: string;
  leg2_ata_offset?: string;
  leg1_destination_country?: string;
  leg3_mode_of_transport?: string;
  event_date?: Date;
  shipment_etd_offset?: number;
  leg4_atd_offset?: string;
  leg2_origin_name?: string;
  event_offset?: string;
  shipment_eta?: string;
  shipment_etd?: string;
  leg2_sequence_no?: string;
  leg3_atd_date?: string;
  type_of_transport?: string;
  carrier_code?: string;
  master_etd_offset?: string;
  leg5_origin_name?: string;
  incoterms?: string;
  other_charges_terms?: string;
  leg5_atd_date?: string;
  shipper_account_number?: string;
  unit_cost_total_price_az?: number;
  ship_cost_dangerous_goods?: string;
  calc_total_price_with_rate?: number;
  origin_country?: string;
  ship_cost_lane_id?: number;
  chargeable_weight_units?: string;
  destination_country?: string;
  unit_cost_total_price?: number;
  mode_of_transport?: string;
  inco_terms?: string;
  ship_cost_invoice_currency?: string;
  service_code?: string;
  shipment_id?: string;
  calc_total_price_with_rate_az?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type FactImshipmentsPk = "id";
export type FactImshipmentsId = FactImshipments[FactImshipmentsPk];
export type FactImshipmentsOptionalAttributes = "id" | "pickupAddress2" | "leg4_destination_code" | "voyage_number" | "leg1_origin_country" | "pickupZip" | "event_desc" | "shipment_origin_country" | "leg3_destination_country" | "leg3_origin_country" | "leg5_sequence_no" | "leg2_destination_code" | "leg4_origin_code" | "leg5_carrier_code" | "leg4_destination_country" | "leg3_ata_offset" | "transport_number" | "parent_id" | "lspOrgId" | "leg1_destination_code" | "volume_uom" | "leg4_carrier_code" | "master_eta" | "publish_info_hash" | "leg5_carrier_name" | "master_etd" | "shipment_creation_offset" | "deliveryPartyType" | "mst_reference_id" | "shipment_service_code" | "shipment_destination_code" | "shipment_origin_code" | "leg2_atd_offset" | "leg5_destination_code" | "shipment_destination_name" | "shipperAccountNumber" | "leg5_ata_date" | "leg2_origin_country" | "leg2_transport_number" | "smode_of_transport" | "number_of_pieces" | "consignee" | "leg1_transport_number" | "weight" | "pickuppartyType" | "delivery_mode" | "master_eta_offset" | "chargeable_weight_uom" | "leg3_origin_code" | "carrier_country" | "leg1_mode_of_transport" | "shipment_destination_country" | "leg1_origin_code" | "leg3_sequence_no" | "chargeable_weight" | "leg2_ata_date" | "carrier_iata_code2L" | "leg4_ata_offset" | "leg1_origin_name" | "leg1_atd_date" | "vessel_number" | "leg4_carrier_name" | "master_destination_code" | "leg3_destination_code" | "waybill_creation_offset" | "sshipment_id" | "tracking_num" | "leg2_carrier_name" | "hawb" | "shipment_eta_offset" | "shipment_total_charge" | "master_destination_country" | "leg1_sequence_no" | "leg4_origin_name" | "leg5_destination_name" | "master_destination_name" | "leg4_origin_country" | "freight_terms" | "pickupAddress1" | "shipment_origin_name" | "event_dbid" | "lspOrgName" | "leg4_ata_date" | "commodity_code" | "leg3_origin_name" | "shipper_reference" | "leg2_origin_code" | "leg5_ata_offset" | "leg4_atd_date" | "leg4_destination_name" | "leg4_transport_number" | "leg2_destination_name" | "leg5_origin_country" | "leg4_sequence_no" | "leg2_mode_of_transport" | "leg2_atd_date" | "event_code" | "deliveryAddress1" | "leg3_ata_date" | "master_mode_of_transport" | "leg5_transport_number" | "leg3_transport_number" | "leg5_mode_of_transport" | "leg3_destination_name" | "leg1_carrier_code" | "pickupCity" | "leg1_carrier_name" | "volume" | "inco_term_location" | "leg1_atd_offset" | "master_origin_code" | "leg3_carrier_code" | "consignee_code" | "leg2_carrier_code" | "leg3_carrier_name" | "weight_uom" | "shipment_total_currency" | "deliveryZip" | "leg1_destination_name" | "dangerous_goods" | "leg2_destination_country" | "master_origin_name" | "leg5_atd_offset" | "leg3_atd_offset" | "shipment_pickupdate" | "event_type" | "commodity_text" | "deliveryAddress2" | "leg4_mode_of_transport" | "shipment_confirmed_date" | "leg1_ata_date" | "leg1_ata_offset" | "carrier" | "consginee_name" | "master_origin_country" | "leg5_origin_code" | "deliveryCity" | "leg5_destination_country" | "shipment_type_code" | "leg2_ata_offset" | "leg1_destination_country" | "leg3_mode_of_transport" | "event_date" | "shipment_etd_offset" | "leg4_atd_offset" | "leg2_origin_name" | "event_offset" | "shipment_eta" | "shipment_etd" | "leg2_sequence_no" | "leg3_atd_date" | "type_of_transport" | "carrier_code" | "master_etd_offset" | "leg5_origin_name" | "incoterms" | "other_charges_terms" | "leg5_atd_date" | "shipper_account_number" | "unit_cost_total_price_az" | "ship_cost_dangerous_goods" | "calc_total_price_with_rate" | "origin_country" | "ship_cost_lane_id" | "chargeable_weight_units" | "destination_country" | "unit_cost_total_price" | "mode_of_transport" | "inco_terms" | "ship_cost_invoice_currency" | "service_code" | "shipment_id" | "calc_total_price_with_rate_az" | "createdAt" | "updatedAt";
export type FactImshipmentsCreationAttributes = Optional<FactImshipmentsAttributes, FactImshipmentsOptionalAttributes>;

export class FactImshipments extends Model<FactImshipmentsAttributes, FactImshipmentsCreationAttributes> implements FactImshipmentsAttributes {
  id!: number;
  pickupAddress2?: string;
  leg4_destination_code?: string;
  voyage_number?: string;
  leg1_origin_country?: string;
  pickupZip?: string;
  event_desc?: string;
  shipment_origin_country?: string;
  leg3_destination_country?: string;
  leg3_origin_country?: string;
  leg5_sequence_no?: string;
  leg2_destination_code?: string;
  leg4_origin_code?: string;
  leg5_carrier_code?: string;
  leg4_destination_country?: string;
  leg3_ata_offset?: string;
  transport_number?: string;
  parent_id?: number;
  lspOrgId?: string;
  leg1_destination_code?: string;
  volume_uom?: string;
  leg4_carrier_code?: string;
  master_eta?: Date;
  publish_info_hash?: string;
  leg5_carrier_name?: string;
  master_etd?: Date;
  shipment_creation_offset?: string;
  deliveryPartyType?: string;
  mst_reference_id?: string;
  shipment_service_code?: string;
  shipment_destination_code?: string;
  shipment_origin_code?: string;
  leg2_atd_offset?: string;
  leg5_destination_code?: string;
  shipment_destination_name?: string;
  shipperAccountNumber?: string;
  leg5_ata_date?: string;
  leg2_origin_country?: string;
  leg2_transport_number?: string;
  smode_of_transport?: string;
  number_of_pieces?: number;
  consignee?: string;
  leg1_transport_number?: string;
  weight?: number;
  pickuppartyType?: string;
  delivery_mode?: string;
  master_eta_offset?: string;
  chargeable_weight_uom?: string;
  leg3_origin_code?: string;
  carrier_country?: string;
  leg1_mode_of_transport?: string;
  shipment_destination_country?: string;
  leg1_origin_code?: string;
  leg3_sequence_no?: string;
  chargeable_weight?: string;
  leg2_ata_date?: string;
  carrier_iata_code2L?: string;
  leg4_ata_offset?: string;
  leg1_origin_name?: string;
  leg1_atd_date?: string;
  vessel_number?: string;
  leg4_carrier_name?: string;
  master_destination_code?: string;
  leg3_destination_code?: string;
  waybill_creation_offset?: number;
  sshipment_id?: string;
  tracking_num?: string;
  leg2_carrier_name?: string;
  hawb?: string;
  shipment_eta_offset?: number;
  shipment_total_charge?: string;
  master_destination_country?: string;
  leg1_sequence_no?: string;
  leg4_origin_name?: string;
  leg5_destination_name?: string;
  master_destination_name?: string;
  leg4_origin_country?: string;
  freight_terms?: string;
  pickupAddress1?: string;
  shipment_origin_name?: string;
  event_dbid?: number;
  lspOrgName?: string;
  leg4_ata_date?: string;
  commodity_code?: string;
  leg3_origin_name?: string;
  shipper_reference?: string;
  leg2_origin_code?: string;
  leg5_ata_offset?: string;
  leg4_atd_date?: string;
  leg4_destination_name?: string;
  leg4_transport_number?: string;
  leg2_destination_name?: string;
  leg5_origin_country?: string;
  leg4_sequence_no?: string;
  leg2_mode_of_transport?: string;
  leg2_atd_date?: string;
  event_code?: string;
  deliveryAddress1?: string;
  leg3_ata_date?: string;
  master_mode_of_transport?: string;
  leg5_transport_number?: string;
  leg3_transport_number?: string;
  leg5_mode_of_transport?: string;
  leg3_destination_name?: string;
  leg1_carrier_code?: string;
  pickupCity?: string;
  leg1_carrier_name?: string;
  volume?: number;
  inco_term_location?: string;
  leg1_atd_offset?: string;
  master_origin_code?: string;
  leg3_carrier_code?: string;
  consignee_code?: string;
  leg2_carrier_code?: string;
  leg3_carrier_name?: string;
  weight_uom?: string;
  shipment_total_currency?: string;
  deliveryZip?: number;
  leg1_destination_name?: string;
  dangerous_goods?: string;
  leg2_destination_country?: string;
  master_origin_name?: string;
  leg5_atd_offset?: string;
  leg3_atd_offset?: string;
  shipment_pickupdate?: Date;
  event_type?: string;
  commodity_text?: string;
  deliveryAddress2?: string;
  leg4_mode_of_transport?: string;
  shipment_confirmed_date?: Date;
  leg1_ata_date?: string;
  leg1_ata_offset?: string;
  carrier?: string;
  consginee_name?: string;
  master_origin_country?: string;
  leg5_origin_code?: string;
  deliveryCity?: string;
  leg5_destination_country?: string;
  shipment_type_code?: string;
  leg2_ata_offset?: string;
  leg1_destination_country?: string;
  leg3_mode_of_transport?: string;
  event_date?: Date;
  shipment_etd_offset?: number;
  leg4_atd_offset?: string;
  leg2_origin_name?: string;
  event_offset?: string;
  shipment_eta?: string;
  shipment_etd?: string;
  leg2_sequence_no?: string;
  leg3_atd_date?: string;
  type_of_transport?: string;
  carrier_code?: string;
  master_etd_offset?: string;
  leg5_origin_name?: string;
  incoterms?: string;
  other_charges_terms?: string;
  leg5_atd_date?: string;
  shipper_account_number?: string;
  unit_cost_total_price_az?: number;
  ship_cost_dangerous_goods?: string;
  calc_total_price_with_rate?: number;
  origin_country?: string;
  ship_cost_lane_id?: number;
  chargeable_weight_units?: string;
  destination_country?: string;
  unit_cost_total_price?: number;
  mode_of_transport?: string;
  inco_terms?: string;
  ship_cost_invoice_currency?: string;
  service_code?: string;
  shipment_id?: string;
  calc_total_price_with_rate_az?: number;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof FactImshipments {
    FactImshipments.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    pickupAddress2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    voyage_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pickupZip: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    event_desc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    shipment_origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_sequence_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_carrier_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_ata_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    transport_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lspOrgId: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    volume_uom: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_carrier_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_eta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    publish_info_hash: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_carrier_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_etd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    shipment_creation_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deliveryPartyType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mst_reference_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_service_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_atd_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_destination_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipperAccountNumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_ata_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_transport_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    smode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    number_of_pieces: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    consignee: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_transport_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    weight: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pickuppartyType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    delivery_mode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_eta_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    chargeable_weight_uom: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    carrier_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_mode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_sequence_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    chargeable_weight: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_ata_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    carrier_iata_code2L: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_ata_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_origin_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_atd_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vessel_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_carrier_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    waybill_creation_offset: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sshipment_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tracking_num: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_carrier_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hawb: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_eta_offset: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipment_total_charge: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_sequence_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_origin_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_destination_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_destination_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    freight_terms: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pickupAddress1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    shipment_origin_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    event_dbid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lspOrgName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_ata_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    commodity_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_origin_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipper_reference: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_ata_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_atd_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_destination_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_transport_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_destination_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_sequence_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_mode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_atd_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    event_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deliveryAddress1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    leg3_ata_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_mode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_transport_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_transport_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_mode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_destination_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_carrier_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pickupCity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_carrier_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    volume: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    inco_term_location: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_atd_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_carrier_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    consignee_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_carrier_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_carrier_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    weight_uom: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_total_currency: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deliveryZip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    leg1_destination_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dangerous_goods: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_origin_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_atd_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_atd_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_pickupdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    event_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    commodity_text: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    deliveryAddress2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    leg4_mode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_confirmed_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    leg1_ata_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_ata_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    carrier: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    consginee_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deliveryCity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_type_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_ata_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_mode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    shipment_etd_offset: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    leg4_atd_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_origin_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    event_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_eta: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_etd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_sequence_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_atd_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    carrier_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_etd_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_origin_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    incoterms: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    other_charges_terms: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_atd_date: {
      type: DataTypes.STRING(100),
      allowNull: true
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
    calc_total_price_with_rate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ship_cost_lane_id: {
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
    }
  }, {
    sequelize,
    tableName: 'fact_imshipments',
    timestamps: true
  });
  return FactImshipments;
  }
}
