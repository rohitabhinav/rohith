import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { QueryBuilder } from "../util/QueryBuilder";
//import { GenericUtil } from "../util/GenericUtil";
import { SourceOperationalDataRepository } from "../data/repository/SourceOperationalDataRepository";
import { IMShipmentAnalyticsRepository } from "../data/repository/IMShipmentAnalyticsRepository";

// import * as fs from 'fs';
const xlsxtojson = require("xlsx-to-json-lc");
import * as xlsx from 'xlsx';
import moment from "moment";
var multer = require('multer');
var uuid = require('uuid')
var fs = require('fs');


export class ShipmentService {
    private logger: Logger;
    private SourceOperationalDataRepository: SourceOperationalDataRepository;
    private IMShipmentAnalyticsRepository: IMShipmentAnalyticsRepository;
    private queryBuilder: QueryBuilder;
    constructor() {
        this.logger = DI.get(Logger);
        this.queryBuilder = DI.get(QueryBuilder);
        this.SourceOperationalDataRepository = DI.get(SourceOperationalDataRepository);
        this.IMShipmentAnalyticsRepository = DI.get(IMShipmentAnalyticsRepository);
    }



    async excelUpload(route: any, req: any, res?: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const dis = this;
                let responseArray: any[] = [];
                console.log('route', route)
                if (route === 'preview') {
                    var upload: any = await this.uploadFiles(req, res);
                    for (let file of upload) {
                        if (file.newFileName.includes("xlsx") || file.newFileName.includes("xls")) {
                            file.newFileName = file.newFileName.replace(/"/g, '');
                            let fileid = file.uuid
                            console.log("FILE ID", fileid)
                            let path = './uploads/' + file.newFileName
                            let response = await this.excelToJson(path);
                            for (let [i, res] of response.entries()) {

                                const obj = {

                                    shipper_AccNumber: res.shipperaccnbr,
                                    hawb: res.hawb,
                                    shipper_name: res.shippername,
                                    shipper_country: res.shippercountry,
                                    shipment_reference_num: res.shipperreference,
                                    Consignee_city: res.consigneecity,
                                    Consignee_name: res.consigneename,
                                    Consignee_reference: res.consigneereference,
                                    console_reference_num: res.additionalreference,
                                    origin_country: res.origincountry,
                                    destination_country: res.destinationcountry,
                                    org: res.org,
                                    destination_code: res.dest,
                                    airline_prifix: res.airlineprefix,
                                    mawb: res.mb,
                                    freight_terms: res.freightterms,
                                    shipment_service_code: res.servicecode,
                                    content_description: res.contentdescription,
                                    total_pieces: res.totalpieces,
                                    total_weight: res.totalweight,
                                    chargeable_weight: res.ch_weight,
                                    total_volume: res.totalvolume,
                                    weight_uom: res.weightunit,
                                    hbcreationdate: res.hbcrea_pu,
                                    actual_arrival: res.actualarrival,
                                    estimated_arrival: res.estimatedarrival,
                                    pod: res.pod,
                                    pod_name: res.podname,
                                    dis_timestamp: res.distimestamp,
                                    dis_description: res.disdescription,
                                    airline_name: res.airlinename,
                                    total_cost: res.totalcost,
                                    export_freightcharges: res.exportfreightchargeprepaid,
                                    fuel_prepaid: res.fuelprepaid_fsh,
                                    security_pripaid: res.securityprepaid_spf,
                                    destairline: res.destairline_carrier,
                                    elapsed_days: res.elapseddaysdta_p,
                                    wdays_pickupto_pod: res.workdayspickuptopod,
                                    preference_level: res.preferencelevel,
                                    hbday: res.hbday,
                                    podday: res.podday,
                                    gross_ontime: res.grossontime,
                                    infull: res.infull,
                                    rebooked: res.rebooked,
                                    rebooked_gsk: res.rebookedgsk,
                                    damage: res.damage,
                                    temp_deviation: res.tempdeviation,
                                    frozen: res.frozen,
                                    remark: res.issue_remark.toString().replace(' - ', ' '),
                                    action: res.status_action,
                                    actiondate: res.actionwhen,
                                    actionby: res.actionwho,
                                    standardized_action: res.standardizedaction_dropdown,
                                    standardized_otifrootcauses: res.standardizedotifrootcauses,
                                    netontime: res.dhl_netontime_performance,
                                    month_number: res.monthnumber,
                                    class: res.class,
                                    year_number: res.yearnumber,
                                    lane: res.lane,
                                    quarter: res.quarter,
                                    year_quarter: res.yearquarter,
                                    year_month: res.yearmonth,
                                    rebooking: res.rebooking,
                                    shipment_count: res.shipmentcount,
                                    damage_intact: res.damage_intact1,
                                    coldchain: res.coldchain_intact1,
                                    nofreeze: res.nofreeze_intact1,
                                    modeof_transport: res.modeoftransport,
                                    active_status: res.active,
                                    reporting: res.reporting,
                                    language: res.language,
                                    service_reportings: res.servicedefectreporting,
                                    followup_complaints: res.followupofcomplaints,
                                    cost_saving: res.costsaving,
                                    accuracy_document: res.accuracyofdocument,
                                    pickup: res.pickup,
                                    deviation_management: res.deviationmanagement

                                }
                                responseArray.push(obj)

                            }
                            resolve(responseArray)

                        }
                    }


                }

                else if (route === 'create') {
                    if (Array.isArray(req)) {

                        for (let [i, data] of req.entries()) {
                            const obj = {
                                shipper_AccNumber: data.shipper_AccNumber,
                                hawb: data.hawb,
                                shipper_name: data.shipper_name,
                                shipper_country: data.shipper_country,
                                shipment_reference_num: data.shipment_reference_num,
                                Consignee_city: data.Consignee_city,
                                Consignee_name: data.Consignee_name,
                                Consignee_reference: data.Consignee_reference,
                                console_reference_num: data.console_reference_num,
                                origin_country: data.origin_country,
                                destination_country: data.destination_country,
                                org: data.org,
                                destination_code: data.destination_code,
                                airline_prifix: data.airline_prifix,
                                mawb: data.mawb,
                                freight_terms: data.freight_terms,
                                shipment_service_code: data.shipment_service_code,
                                content_description: data.content_description,
                                total_pieces: data.total_pieces,
                                total_weight: data.total_weight,
                                chargeable_weight: data.chargeable_weight,
                                total_volume: data.total_volume,
                                weight_uom: data.weight_uom,
                                hbcreationdate: data.hbcreationdate,
                                actual_arrival: data.actual_arrival,
                                estimated_arrival: data.estimated_arrival,
                                pod: data.pod,
                                pod_name: data.pod_name,
                                dis_timestamp: data.dis_timestamp,
                                dis_description: data.dis_description,
                                airline_name: data.airline_name,
                                total_cost: data.total_cost,
                                export_freightcharges: data.export_freightcharges,
                                fuel_prepaid: data.fuel_prepaid,
                                security_pripaid: data.security_pripaid,
                                destairline: data.destairline,
                                elapsed_days: data.elapsed_days,
                                wdays_pickupto_pod: data.wdays_pickupto_pod,
                                preference_level: data.preference_level,
                                hbday: data.hbday,
                                podday: data.podday,
                                gross_ontime: data.gross_ontime,
                                infull: data.infull,
                                rebooked: data.rebooked,
                                rebooked_gsk: data.rebooked_gsk,
                                damage: data.damage,
                                temp_deviation: data.temp_deviation,
                                frozen: data.frozen,
                                remark: data.remark.toString().replace(' - ', ' '),
                                action: data.action,
                                actiondate: data.actiondate,
                                actionby: data.actionby,
                                standardized_action: data.standardized_action,
                                standardized_otifrootcauses: data.standardized_otifrootcauses,
                                netontime: data.netontime,
                                month_number: data.month_number,
                                class: data.class,
                                year_number: data.year_number,
                                lane: data.lane,
                                quarter: data.quarter,
                                year_quarter: data.year_quarter,
                                year_month: data.year_month,
                                rebooking: data.rebooking,
                                shipment_count: data.shipment_count,
                                damage_intact: data.damage_intact,
                                coldchain: data.coldchain,
                                nofreeze: data.nofreeze,
                                modeof_transport: data.modeof_transport,
                                active_status: data.active_status,
                                reporting: data.reporting,
                                language: data.language,
                                service_reportings: data.service_reportings,
                                followup_complaints: data.followup_complaints,
                                cost_saving: data.cost_saving,
                                accuracy_document: data.accuracy_document,
                                pickup: data.pickup,
                                deviation_management: data.deviation_management

                            }
                            await this.SourceOperationalDataRepository.create(obj);
                            await this.IMShipmentAnalyticsRepository.spMainDimension(obj.hawb);
                            await this.IMShipmentAnalyticsRepository.spMainFactOpeartional(obj.hawb);
                        }
                        await this.IMShipmentAnalyticsRepository.spAggOtifRootCause();
                        await this.IMShipmentAnalyticsRepository.spAggGrossNetOtPerformance();
                        await this.IMShipmentAnalyticsRepository.spAggGskVsScorecard();
                        await this.IMShipmentAnalyticsRepository.spAggYtdShipmentWeight();
                        await this.IMShipmentAnalyticsRepository.spAggLaneOverview();
                        await this.IMShipmentAnalyticsRepository.spAggAirLinePerformance();
                    }
                    resolve({ status: { code: 'SUCCESS', message: "Created Suceessfully" } })
                }   

            } catch (e) {
                resolve({ status: { code: 'FAILURE', message: "Error in FileFormat", error: e } })
            }
        })
    }

    async uploadFiles(req: any, res: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const dis = this;
                let files: any[] = []
                var storage = multer.diskStorage({
                    destination: function (req: any, file: any, callback: any) {
                        if (!fs.existsSync('./uploads')) {
                            fs.mkdirSync('./uploads');
                            callback(null, './uploads');
                        }
                        else {
                            callback(null, './uploads');
                        }
                    },
                    filename: function (req: any, file: any, callback: any) {
                        callback(null, uuid.v4() + '_' + file.originalname);
                    }
                });
                console.log("storage", storage)
                let upload: any = await multer({ storage: storage }).array('file');
                await upload(req, res, function (err: any) {
                    if (err) {
                        reject(err)
                    }
                    for (let file of req.files) {
                        let name = file.originalname
                        let fileid = file.filename
                        fileid = fileid.replace(name, "").replace(/_/g, "")
                        files.push({ "originalFileName": file.originalname, "newFileName": file.filename, "uuid": fileid })   
                    }
                    return resolve(files);
                });
            } catch (e) {
                reject(e);
            }
        })
    }

    async excelToJson(path: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const dis = this;
                xlsxtojson({
                    input: path,
                    output: null,
                    lowerCaseHeaders: true //converts excel header rows into lowercase as json keys
                }, async function (err: any, result: any) {
                    if (err) {
                        reject(err)
                    } else {
                        fs.unlink(path, async function (err: any) {
                            if (err) {
                                reject(err)
                            }
                            else {
                                dis.logger.log("file removed to reduce space")
                                resolve('')
                            }
                        })
                        return resolve(result)
                    }
                })

            } catch (e) {
                reject(e);
            }
        })
    }

    readEXcelFile() {
        var wb = xlsx.readFile('./uploads/shipmentData.xlsx', { cellDates: true })
        var ws = wb.Sheets[wb["SheetNames"][0]]
        var data: any = xlsx.utils.sheet_to_json(ws, { raw: false, defval: "" })
        var replacedKey: any;
        for (var i = 0; i < data.length; i++) {
            Object.keys(data[i]).forEach((key) => {
                replacedKey = key.replace(/(\r\n|\n|-|\r| )/gm, "")
                if (key !== replacedKey) {
                    data[i][replacedKey] = data[i][key];
                    delete data[i][key];
                }
            });
        }
        return data
    }
}