import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { ImShipmentAnalyticsCostRepository } from "../data/repository/ImShipmentAnalyticsCostRepository"
import { IMShipmentAnalyticsRepository } from "../data/repository/IMShipmentAnalyticsRepository"
import { EtaDeviationRepository } from "../data/repository/EtaDeviationRepository"



import { QueryBuilder } from "../util/QueryBuilder";
import { any } from "bluebird";
const { Op } = require('sequelize');


export class EtaDeviationService {
    private logger: Logger;
    private imShipmentAnalyticsCostRepository: ImShipmentAnalyticsCostRepository;
    private iMShipmentAnalyticsRepository: IMShipmentAnalyticsRepository;
    private etaDeviationRepository:EtaDeviationRepository

    private queryBuilder: QueryBuilder;
    constructor() {
        this.logger = DI.get(Logger);
        this.imShipmentAnalyticsCostRepository = DI.get(ImShipmentAnalyticsCostRepository);
        this.iMShipmentAnalyticsRepository = DI.get(IMShipmentAnalyticsRepository);
        this.etaDeviationRepository = DI.get(EtaDeviationRepository)

        this.queryBuilder = DI.get(QueryBuilder);
    }

    async getEtaDeviationSummary(origin:any,accounts:any,startDate:any,endDate:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                let etaDetails:any;
                attributes = ['origin_code','destination_code','noOfShipments','hawb','etaDeviation_flag','totetaDeviation_flag','etaDeviation']
                if(startDate !== '' && endDate !== ''){
                    if(origin !== ''){
                        whereObj['origin_code'] = origin
                    }
                    else if(accounts !== ''){
                        whereObj['shipper'] = accounts
                    }
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_confirmed_date'] = { [Op.between]: [startDate, endDate] }
                    whereObj['etaDeviation'] = {[Op.gt]:0}
                    etaDetails = await this.etaDeviationRepository.getEtaSummary(whereObj,attributes);
                }
                else{
                    if(origin !== ''){
                        whereObj['origin_code'] = origin
                    }
                    if(accounts !== ''){
                        whereObj['shipper'] = accounts
                    }
                    whereObj['etaDeviation'] = {[Op.gt]:0}
                    etaDetails = await this.etaDeviationRepository.getEtaSummaryWithOutDate(whereObj,attributes);
                }
                return resolve({ "result": etaDetails })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getEtaDeviationDetails(destination:any,origin:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes:any;
                let directShipments: any=[];
                let transShipments:any=[];
                if(destination !== ''){
                    whereObj['destination_code'] = destination
                }
                if(origin !== ''){
                    whereObj['origin_code'] = origin
                }
                whereObj['shipment_status'] = 'DELIVERED'
                attributes = ['destination_code','shipper','consginee_name','sshipment_id','hawb','parent_id','leg1_destination_country','leg1_ata_date','leg2_ata_date','leg3_ata_date','leg4_ata_date','leg5_ata_date','smode_of_transport','incoterms','carrier','shipment_confirmed_date','planned_pickupdate','actual_pickupdate','actual_timeofdispatch','shipment_eta','shipment_status',['deviation_status','deviation']]
                let etaDetails: any = await this.imShipmentAnalyticsCostRepository.getEtaDetails(whereObj,attributes);
                for(let shipments of etaDetails){
                    if(shipments.leg1_destination_country === null || shipments.leg1_destination_country === 'null'){
                        directShipments.push(shipments)
                    }
                    else{
                        transShipments.push(shipments)
                    }
                }

                return resolve({ "transShipments": transShipments,"directShipments":directShipments })
            } catch (e) {
                reject(e)
            }
        })
    }
    async getOriginCodes(): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let imShipmentAnalyticsCost: any = await this.iMShipmentAnalyticsRepository.getOriginCodes(whereObj);
                return resolve({ "result": imShipmentAnalyticsCost })
            } catch (e) {
                reject(e)
            }
        })
    }
    
    async getEtaOriginCodes(): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let imShipmentAnalyticsCost: any = await this.iMShipmentAnalyticsRepository.getEtaOriginCodes(whereObj);

                return resolve({ "result": imShipmentAnalyticsCost })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getDestinationCodes(): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                let imShipmentAnalyticsCost: any = await this.iMShipmentAnalyticsRepository.getDestinationCodes(whereObj);

                return resolve({ "result": imShipmentAnalyticsCost })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getEtaAllAccounts(): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let imShipmentAnalyticsCost: any = await this.iMShipmentAnalyticsRepository.getEtaAllAccounts(whereObj);

                return resolve({ "result": imShipmentAnalyticsCost})
            } catch (e) {
                reject(e)
            }
        })
    }


}
