import { BaseService } from "./BaseService";
import { Kafka, Consumer, Producer } from "kafkajs";
import { DI } from "../di/DIContainer";
import { Logger } from "../logger/Logger";

import { ImShipmentAnalyticsCostRepository } from "../data/repository/ImShipmentAnalyticsCostRepository";
import { IMShipmentAnalyticsRepository } from "../data/repository/IMShipmentAnalyticsRepository";
import { ImMessagesRepository } from "../data/repository/ImMessagesRepository";

const fs = require('fs')

//import { ErroredMessagesRepository } from "../data/repository/ErroredMessagesRepository";



export class ImAnalyticsPersistence implements BaseService {
    
    
    private kafkav: Kafka = new Kafka({ 
        clientId: process.env.KAFKA_CLIENT_ID_ANASHIP,
        brokers: ['kafka-ana-1:19092', 'kafka-ana-2:29092', 'kafka-ana-3:39092']
    });
    
    private logger: Logger;
    

    private ImShipmentAnalyticsCostRepository: ImShipmentAnalyticsCostRepository;
    private IMShipmentAnalyticsRepository: IMShipmentAnalyticsRepository;
    private imMessagesRepository: ImMessagesRepository;

   //private erroredMessagesRepository:ErroredMessagesRepository;



    constructor() {
        this.logger = DI.get(Logger);
        this.ImShipmentAnalyticsCostRepository = DI.get(ImShipmentAnalyticsCostRepository);
        this.IMShipmentAnalyticsRepository = DI.get(IMShipmentAnalyticsRepository);
        this.imMessagesRepository = DI.get(ImMessagesRepository);

        //this.erroredMessagesRepository = DI.get(ErroredMessagesRepository);
    }

    async consumeAnalyticRequest() {
        const consumer: Consumer = this.kafkav.consumer({
            groupId: process.env.GROUP_ID!
            //groupId: process.env.KAFKA_CLIENT_ID!
        });
        await consumer.connect();
        this.logger.log(`Topic name is ${process.env.IM_SHIPMENT_ANALYTICS_TOPIC!}`)
        await consumer.subscribe({ topic: process.env.IM_SHIPMENT_ANALYTICS_TOPIC! });

        await consumer.run({
            
            eachMessage: async ({ topic, partition, message }) => {
                console.log("TOPIC NAME", topic)
                console.log("Analytics module Consume timestamp", new Date());
                let value: any;
                this.logger.log("============================================ANALYTICS CONSUME NEW MESSAGE START===========================================================================================");
                this.logger.log("ANALYTICS Message =======================>", message);
                this.logger.log("Message Value =======================>", message.value);
               
                if (message.value != undefined) {
                    value = message.value!.toString();
                    this.logger.log("Message Value toString", value);
                    this.logger.log("Consumed Message", JSON.parse(value));
                    ////DB Insertion Logic
                   
                    value = JSON.parse(value);
                    this.logger.log("Message value after parse",value["messages"]);
                    let msgType: any = value["msgType"]
                    
                    this.logger.log("Message Type", msgType)
                    if (msgType == "im_shipment_analytics_cost"){
                        let costAnalyticReqDbObj: any = {};
                        let messagesList: any = JSON.parse(Buffer.from(value["messages"], 'base64').toString('utf8'));
                        this.logger.log(`messagesList is ${messagesList}`);
                        for (let messageItem of messagesList) {
                            
                            try {
                                this.logger.log(`messageItem is ${messageItem}`);
                                costAnalyticReqDbObj["parent_id"] = messageItem["parent_id"];
                                costAnalyticReqDbObj["inco_terms"] = messageItem["inco_terms"];                 
                                costAnalyticReqDbObj["shipment_id"] = messageItem["shipment_id"];
                                costAnalyticReqDbObj["service_code"] = messageItem["service_code"];
                                costAnalyticReqDbObj["origin_country"] = messageItem["origin_country"];
                                costAnalyticReqDbObj["shipper_org_Id"] = messageItem["shipper_org_Id"];
                                costAnalyticReqDbObj["chargeable_weight"] = messageItem["chargeable_weight"];
                                costAnalyticReqDbObj["mode_of_transport"] = messageItem["mode_of_transport"];
                                costAnalyticReqDbObj["publish_info_hash"] = messageItem["publish_info_hash"];
                                costAnalyticReqDbObj["ship_cost_lane_id"] = messageItem["ship_cost_lane_id"];
                                costAnalyticReqDbObj["ship_reference_id"] = messageItem["ship_reference_id"];
                                costAnalyticReqDbObj["destination_country"] = messageItem["destination_country"];
                                costAnalyticReqDbObj["ship_cost_lane_name"] = messageItem["ship_cost_lane_name"];
                                costAnalyticReqDbObj["unit_cost_total_price"] = messageItem["unit_cost_total_price"];
                                costAnalyticReqDbObj["shipper_account_number"] = messageItem["shipper_account_number"];
                                costAnalyticReqDbObj["chargeable_weight_units"] = messageItem["chargeable_weight_units"];
                                costAnalyticReqDbObj["ship_cost_container_type"] = messageItem["ship_cost_container_type"];
                                costAnalyticReqDbObj["shipment_creation_offset"] = messageItem["shipment_creation_offset"];
                                costAnalyticReqDbObj["unit_cost_total_price_az"] = messageItem["unit_cost_total_price_az"];
                                costAnalyticReqDbObj["ship_cost_dangerous_goods"] = messageItem["ship_cost_dangerous_goods"];
                                costAnalyticReqDbObj["calc_total_price_with_rate"] = messageItem["calc_total_price_with_rate"];
                                costAnalyticReqDbObj["ship_cost_invoice_currency"] = messageItem["ship_cost_invoice_currency"];
                                costAnalyticReqDbObj["shipment_creation_date_time"] = messageItem["shipment_creation_date_time"];
                                costAnalyticReqDbObj["calc_total_price_with_rate_az"] = messageItem["calc_total_price_with_rate_az"];
                                            
                                ////Insert into IMPUB_SHIPMENT_ANALYTICS_COST
                                this.logger.log('costAnalyticReqDbObj',costAnalyticReqDbObj);
                                //await this.ImShipmentAnalyticsCostRepository.updateOrCreate(costAnalyticReqDbObj, costAnalyticReqDbObj);
                                await this.ImShipmentAnalyticsCostRepository.create(costAnalyticReqDbObj);
                                this.logger.log(`ImShipmentAnalyticsCost - DB Insertion Completed`);
                            } catch (error) {
                                // this.logger.dbInsertionerror(`----------START-----IM-Insertion Error in Consume Service`);
                                // this.logger.dbInsertionerror(`DB Object is ${costAnalyticReqDbObj}`);
                                this.logger.dbInsertionerror(`Error is ${error}`);
                                // this.logger.dbInsertionerror(`----------STOP-----IM-Insertion Error in Consume Service`);
                            }
                        }

                        //Insert into im_messages table
                        let imMsgDbObj: any = {};
                        imMsgDbObj["uuid"] = value["uuid"];
                        imMsgDbObj["receivers"] = 'ANALYTICS';
                        imMsgDbObj["sender"] = value["sender"];
                        imMsgDbObj["message_file_path"] = value["msgFilePath"];
                        imMsgDbObj["type"] = 'CONSUME';
                        await this.imMessagesRepository.create(imMsgDbObj);
                        this.logger.log(`imMessages -DB Insertion COmpleted`);
                    }
                    else if(msgType == "im_shipment_analytics"){
                        let analyticReqDbObj: any = {};
                        let messagesList: any = JSON.parse(Buffer.from(value["messages"], 'base64').toString('utf8'));
                        this.logger.log(`messagesList is ${messagesList}`);
                        for (let messageItem of messagesList) {
                            try {
                                analyticReqDbObj["volume"] = messageItem["volume"]
                                analyticReqDbObj["weight"] = messageItem["weight"]
                                analyticReqDbObj["lspOrgId"] = messageItem["lspOrgId"]
                                analyticReqDbObj["parent_id"] = messageItem["parent_id"]
                                analyticReqDbObj["pickupZip"] = messageItem["pickupZip"]
                                analyticReqDbObj["event_code"] = messageItem["event_code"]
                                analyticReqDbObj["event_date"] = messageItem["event_date"]
                                analyticReqDbObj["event_dbid"] = messageItem["event_dbid"]
                                analyticReqDbObj["event_desc"] = messageItem["event_desc"]
                                analyticReqDbObj["event_type"] = messageItem["event_type"]
                                analyticReqDbObj["lspOrgName"] = messageItem["lspOrgName"]
                                analyticReqDbObj["master_eta"] = messageItem["master_eta"]
                                analyticReqDbObj["master_etd"] = messageItem["master_etd"]
                                analyticReqDbObj["pickupCity"] = messageItem["pickupCity"]
                                analyticReqDbObj["volume_uom"] = messageItem["volume_uom"]
                                analyticReqDbObj["weight_uom"] = messageItem["weight_uom"]
                                analyticReqDbObj["deliveryZip"] = messageItem["deliveryZip"]
                                analyticReqDbObj["carrier_code"] = messageItem["carrier_code"]
                                analyticReqDbObj["carrier_name"] = messageItem["carrier_name"]
                                analyticReqDbObj["deliveryCity"] = messageItem["deliveryCity"]
                                analyticReqDbObj["event_offset"] = messageItem["event_offset"]
                                analyticReqDbObj["shipment_eta"] = messageItem["shipment_eta"]
                                analyticReqDbObj["shipment_etd"] = messageItem["shipment_etd"]
                                analyticReqDbObj["shipper_code"] = messageItem["shipper_code"]
                                analyticReqDbObj["shipper_name"] = messageItem["shipper_name"]
                                analyticReqDbObj["tracking_num"] = messageItem["tracking_num"]
                                analyticReqDbObj["delivery_mode"] = messageItem["delivery_mode"]
                                analyticReqDbObj["freight_terms"] = messageItem["freight_terms"]
                                analyticReqDbObj["leg1_ata_date"] = messageItem["leg1_ata_date"]
                                analyticReqDbObj["leg1_atd_date"] = messageItem["leg1_atd_date"]
                                analyticReqDbObj["leg2_ata_date"] = messageItem["leg2_ata_date"]
                                analyticReqDbObj["leg2_atd_date"] = messageItem["leg2_atd_date"]
                                analyticReqDbObj["leg3_ata_date"] = messageItem["leg3_ata_date"]
                                analyticReqDbObj["leg3_atd_date"] = messageItem["leg3_atd_date"]
                                analyticReqDbObj["leg4_ata_date"] = messageItem["leg4_ata_date"]
                                analyticReqDbObj["leg4_atd_date"] = messageItem["leg4_atd_date"]
                                analyticReqDbObj["leg5_ata_date"] = messageItem["leg5_ata_date"]
                                analyticReqDbObj["leg5_atd_date"] = messageItem["leg5_atd_date"]
                                analyticReqDbObj["vessel_number"] = messageItem["vessel_number"]
                                analyticReqDbObj["voyage_number"] = messageItem["voyage_number"]
                                analyticReqDbObj["commodity_code"] = messageItem["commodity_code"]
                                analyticReqDbObj["commodity_text"] = messageItem["commodity_text"]
                                analyticReqDbObj["consginee_name"] = messageItem["consginee_name"]
                                analyticReqDbObj["consignee_code"] = messageItem["consignee_code"]
                                analyticReqDbObj["pickupAddress1"] = messageItem["pickupAddress1"]
                                analyticReqDbObj["pickupAddress2"] = messageItem["pickupAddress2"]
                                analyticReqDbObj["carrier_country"] = messageItem["carrier_country"]
                                analyticReqDbObj["dangerous_goods"] = messageItem["dangerous_goods"]
                                analyticReqDbObj["leg1_ata_offset"] = messageItem["leg1_ata_offset"]
                                analyticReqDbObj["leg1_atd_offset"] = messageItem["leg1_atd_offset"]
                                analyticReqDbObj["leg2_ata_offset"] = messageItem["leg2_ata_offset"]
                                analyticReqDbObj["leg2_atd_offset"] = messageItem["leg2_atd_offset"]
                                analyticReqDbObj["leg3_ata_offset"] = messageItem["leg3_ata_offset"]
                                analyticReqDbObj["leg3_atd_offset"] = messageItem["leg3_atd_offset"]
                                analyticReqDbObj["leg4_ata_offset"] = messageItem["leg4_ata_offset"]
                                analyticReqDbObj["leg4_atd_offset"] = messageItem["leg4_atd_offset"]
                                analyticReqDbObj["leg5_ata_offset"] = messageItem["leg5_ata_offset"]
                                analyticReqDbObj["leg5_atd_offset"] = messageItem["leg5_atd_offset"]
                                analyticReqDbObj["pickuppartyType"] = messageItem["pickuppartyType"]
                                analyticReqDbObj["shipment_status"] = messageItem["shipment_status"]
                                analyticReqDbObj["count_eta_change"] = messageItem["count_eta_change"]
                                analyticReqDbObj["count_etd_change"] = messageItem["count_etd_change"]
                                analyticReqDbObj["deliveryAddress1"] = messageItem["deliveryAddress1"]
                                analyticReqDbObj["deliveryAddress2"] = messageItem["deliveryAddress2"]
                                analyticReqDbObj["leg1_origin_code"] = messageItem["leg1_origin_code"]
                                analyticReqDbObj["leg1_origin_name"] = messageItem["leg1_origin_name"]
                                analyticReqDbObj["leg1_sequence_no"] = messageItem["leg1_sequence_no"]
                                analyticReqDbObj["leg2_origin_code"] = messageItem["leg2_origin_code"]
                                analyticReqDbObj["leg2_origin_name"] = messageItem["leg2_origin_name"]
                                analyticReqDbObj["leg2_sequence_no"] = messageItem["leg2_sequence_no"]
                                analyticReqDbObj["leg3_origin_code"] = messageItem["leg3_origin_code"]
                                analyticReqDbObj["leg3_origin_name"] = messageItem["leg3_origin_name"]
                                analyticReqDbObj["leg3_sequence_no"] = messageItem["leg3_sequence_no"]
                                analyticReqDbObj["leg4_origin_code"] = messageItem["leg4_origin_code"]
                                analyticReqDbObj["leg4_origin_name"] = messageItem["leg4_origin_name"]
                                analyticReqDbObj["leg4_sequence_no"] = messageItem["leg4_sequence_no"]
                                analyticReqDbObj["leg5_origin_code"] = messageItem["leg5_origin_code"]
                                analyticReqDbObj["leg5_origin_name"] = messageItem["leg5_origin_name"]
                                analyticReqDbObj["leg5_sequence_no"] = messageItem["leg5_sequence_no"]
                                analyticReqDbObj["mst_reference_id"] = messageItem["mst_reference_id"]
                                analyticReqDbObj["number_of_pieces"] = messageItem["number_of_pieces"]
                                analyticReqDbObj["transport_number"] = messageItem["transport_number"]
                                analyticReqDbObj["chargeable_weight"] = messageItem["chargeable_weight"]
                                analyticReqDbObj["deliveryPartyType"] = messageItem["deliveryPartyType"]
                                analyticReqDbObj["leg1_carrier_code"] = messageItem["leg1_carrier_code"]
                                analyticReqDbObj["leg1_carrier_name"] = messageItem["leg1_carrier_name"]
                                analyticReqDbObj["leg2_carrier_code"] = messageItem["leg2_carrier_code"]
                                analyticReqDbObj["leg2_carrier_name"] = messageItem["leg2_carrier_name"]
                                analyticReqDbObj["leg3_carrier_code"] = messageItem["leg3_carrier_code"]
                                analyticReqDbObj["leg3_carrier_name"] = messageItem["leg3_carrier_name"]
                                analyticReqDbObj["leg4_carrier_code"] = messageItem["leg4_carrier_code"]
                                analyticReqDbObj["leg4_carrier_name"] = messageItem["leg4_carrier_name"]
                                analyticReqDbObj["leg5_carrier_code"] = messageItem["leg5_carrier_code"]
                                analyticReqDbObj["leg5_carrier_name"] = messageItem["leg5_carrier_name"]
                                analyticReqDbObj["master_eta_offset"] = messageItem["master_eta_offset"]
                                analyticReqDbObj["master_etd_offset"] = messageItem["master_etd_offset"]
                                analyticReqDbObj["publish_info_hash"] = messageItem["publish_info_hash"]
                                analyticReqDbObj["ship_reference_id"] = messageItem["ship_reference_id"]
                                analyticReqDbObj["ship_tracking_num"] = messageItem["ship_tracking_num"]
                                analyticReqDbObj["shipper_org_group"] = messageItem["shipper_org_group"]
                                analyticReqDbObj["shipper_reference"] = messageItem["shipper_reference"]
                                analyticReqDbObj["type_of_transport"] = messageItem["type_of_transport"]
                                analyticReqDbObj["inco_term_location"] = messageItem["inco_term_location"]
                                analyticReqDbObj["master_origin_code"] = messageItem["master_origin_code"]
                                analyticReqDbObj["master_origin_name"] = messageItem["master_origin_name"]
                                analyticReqDbObj["shipment_type_code"] = messageItem["shipment_type_code"]
                                analyticReqDbObj["carrier_iata_code2L"] = messageItem["carrier_iata_code2L"]
                                analyticReqDbObj["leg1_origin_country"] = messageItem["leg1_origin_country"]
                                analyticReqDbObj["leg2_origin_country"] = messageItem["leg2_origin_country"]
                                analyticReqDbObj["leg3_origin_country"] = messageItem["leg3_origin_country"]
                                analyticReqDbObj["leg4_origin_country"] = messageItem["leg4_origin_country"]
                                analyticReqDbObj["leg5_origin_country"] = messageItem["leg5_origin_country"]
                                analyticReqDbObj["other_charges_terms"] = messageItem["other_charges_terms"]
                                analyticReqDbObj["shipment_eta_offset"] = messageItem["shipment_eta_offset"]
                                analyticReqDbObj["shipment_etd_offset"] = messageItem["shipment_etd_offset"]
                                analyticReqDbObj["shipment_inco_terms"] = messageItem["shipment_inco_terms"]
                                analyticReqDbObj["shipment_origin_code"] = messageItem["shipment_origin_code"]
                                analyticReqDbObj["shipment_origin_name"] = messageItem["shipment_origin_name"]
                                analyticReqDbObj["shipperAccountNumber"] = messageItem["shipperAccountNumber"]
                                analyticReqDbObj["chargeable_weight_uom"] = messageItem["chargeable_weight_uom"]
                                analyticReqDbObj["leg1_destination_code"] = messageItem["leg1_destination_code"]
                                analyticReqDbObj["leg1_destination_name"] = messageItem["leg1_destination_name"]
                                analyticReqDbObj["leg1_transport_number"] = messageItem["leg1_transport_number"]
                                analyticReqDbObj["leg2_destination_code"] = messageItem["leg2_destination_code"]
                                analyticReqDbObj["leg2_destination_name"] = messageItem["leg2_destination_name"]
                                analyticReqDbObj["leg2_transport_number"] = messageItem["leg2_transport_number"]
                                analyticReqDbObj["leg3_destination_code"] = messageItem["leg3_destination_code"]
                                analyticReqDbObj["leg3_destination_name"] = messageItem["leg3_destination_name"]
                                analyticReqDbObj["leg3_transport_number"] = messageItem["leg3_transport_number"]
                                analyticReqDbObj["leg4_destination_code"] = messageItem["leg4_destination_code"]
                                analyticReqDbObj["leg4_destination_name"] = messageItem["leg4_destination_name"]
                                analyticReqDbObj["leg4_transport_number"] = messageItem["leg4_transport_number"]
                                analyticReqDbObj["leg5_destination_code"] = messageItem["leg5_destination_code"]
                                analyticReqDbObj["leg5_destination_name"] = messageItem["leg5_destination_name"]
                                analyticReqDbObj["leg5_transport_number"] = messageItem["leg5_transport_number"]
                                analyticReqDbObj["master_origin_country"] = messageItem["master_origin_country"]
                                analyticReqDbObj["shipment_service_code"] = messageItem["shipment_service_code"]
                                analyticReqDbObj["shipment_total_charge"] = messageItem["shipment_total_charge"]
                                analyticReqDbObj["leg1_mode_of_transport"] = messageItem["leg1_mode_of_transport"]
                                analyticReqDbObj["leg2_mode_of_transport"] = messageItem["leg2_mode_of_transport"]
                                analyticReqDbObj["leg3_mode_of_transport"] = messageItem["leg3_mode_of_transport"]
                                analyticReqDbObj["leg4_mode_of_transport"] = messageItem["leg4_mode_of_transport"]
                                analyticReqDbObj["leg5_mode_of_transport"] = messageItem["leg5_mode_of_transport"]
                                analyticReqDbObj["master_destination_code"] = messageItem["master_destination_code"]
                                analyticReqDbObj["master_destination_name"] = messageItem["master_destination_name"]
                                analyticReqDbObj["shipment_origin_country"] = messageItem["shipment_origin_country"]
                                analyticReqDbObj["shipment_total_currency"] = messageItem["shipment_total_currency"]
                                analyticReqDbObj["waybill_creation_offset"] = messageItem["waybill_creation_offset"]
                                analyticReqDbObj["leg1_destination_country"] = messageItem["leg1_destination_country"]
                                analyticReqDbObj["leg2_destination_country"] = messageItem["leg2_destination_country"]
                                analyticReqDbObj["leg3_destination_country"] = messageItem["leg3_destination_country"]
                                analyticReqDbObj["leg4_destination_country"] = messageItem["leg4_destination_country"]
                                analyticReqDbObj["leg5_destination_country"] = messageItem["leg5_destination_country"]
                                analyticReqDbObj["master_mode_of_transport"] = messageItem["master_mode_of_transport"]
                                analyticReqDbObj["shipment_creation_offset"] = messageItem["shipment_creation_offset"]
                                analyticReqDbObj["count_service_code_change"] = messageItem["count_service_code_change"]
                                analyticReqDbObj["shipment_destination_code"] = messageItem["shipment_destination_code"]
                                analyticReqDbObj["shipment_destination_name"] = messageItem["shipment_destination_name"]
                                analyticReqDbObj["master_destination_country"] = messageItem["master_destination_country"]
                                analyticReqDbObj["shipment_mode_of_transport"] = messageItem["shipment_mode_of_transport"]
                                analyticReqDbObj["waybill_creation_date_time"] = messageItem["waybill_creation_date_time"]
                                analyticReqDbObj["shipment_creation_date_time"] = messageItem["shipment_creation_date_time"]
                                analyticReqDbObj["shipment_destination_country"] = messageItem["shipment_destination_country"]

   
                                ////Insert into IMPUB_SHIPMENT_ANALYTICS
                                this.logger.log('analyticReqDbObj',analyticReqDbObj);
                                //await this.shipmanalyticreqExtRepository.updateOrCreate(analyticReqDbObj, analyticReqDbObj);
                                await this.IMShipmentAnalyticsRepository.create(analyticReqDbObj);
                                this.logger.log(`ImShipmentAnalytics - DB Insertion Completed`);
                            } catch (error) {
                                //this.logger.dbInsertionerror(`----------START-----IM-Insertion Error in Consume Service`);
                                //this.logger.dbInsertionerror(`DB Object is ${analyticReqDbObj}`);
                                this.logger.dbInsertionerror(`Error is ${error}`);
                                //this.logger.dbInsertionerror(`----------STOP-----IM-Insertion Error in Consume Service`);
                            }
                        }
                        
                        //Insert into im_messages table
                        let imMsgDbObj: any = {};
                        imMsgDbObj["uuid"] = value["uuid"];
                        imMsgDbObj["receivers"] = 'ANALYTICS';
                        imMsgDbObj["sender"] = value["sender"];
                        imMsgDbObj["message_file_path"] = value["msgFilePath"];
                        imMsgDbObj["type"] = 'CONSUME';
                        await this.imMessagesRepository.create(imMsgDbObj);
                        this.logger.log(`imMessages -DB Insertion COmpleted`);
                        
                        
                        
                    }
                }
                this.logger.log("============================================STOP-CONSUME NEW MESSAGE STOP==========================================================");

            }
        }).catch((error: any) => { this.logger.log("Consume Message Error:", error) });
    }

}