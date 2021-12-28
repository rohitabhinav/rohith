
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { ImShipmentAnalytics} from "../entity/init-models";
// import Sequelize = require('sequelize');
import { Op, Sequelize } from 'sequelize';
import {  Transaction } from "sequelize/types";
import { Model } from 'sequelize';
import { BvShipmentEtaDeviationNodate } from "../entity/init-models";
import { AggCostanalysisShipments, AggGskvxscorecard } from "../entity/init-models";

export class IMShipmentAnalyticsRepository extends Repository{
    private logger :Logger;
    constructor(){
        super();
        this.logger = DI.get(Logger)
    }

    getModel(): any {
        return Model;
    }
    async get(whereObj: any): Promise<ImShipmentAnalytics[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            
            ImShipmentAnalytics.findAll({
                where: whereObj,attributes:[[Sequelize.fn('distinct', Sequelize.col('origin_country')), 'origin_country']],
            }).then((get: ImShipmentAnalytics[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }

    async spMainDimension(hawbNo: any): Promise<any> {
        return await new Promise((resolve, reject) => {
            ImShipmentAnalytics.sequelize?.query('CALL main_dimension(:P_hawb)',{replacements:{P_hawb:hawbNo}})
            .then((get:any)=>{
               resolve({ status: { code: 'SUCCESS', message: get } })
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
            
        })
    }

    async spMainFactOpeartional(hawbNo: any): Promise<any> {
        return await new Promise((resolve, reject) => {
            ImShipmentAnalytics.sequelize?.query('CALL main_factoprdata(:P_hawb)',{replacements:{P_hawb:hawbNo}})
            .then((get:any)=>{
               resolve({ status: { code: 'SUCCESS', message: get } })
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
            
        })
    }

    async spImMainDimension(hawbNo: any): Promise<any> {
        return await new Promise((resolve, reject) => {
            ImShipmentAnalytics.sequelize?.query('CALL im_main_dimension(:P_hawb)',{replacements:{P_hawb:hawbNo}})
            .then((get:any)=>{
               resolve({ status: { code: 'SUCCESS', message: get } })
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
            
        })
    }

    async spImMainFactOpeartional(hawbNo: any): Promise<any> {
        return await new Promise((resolve, reject) => {
            ImShipmentAnalytics.sequelize?.query('CALL im_main_factoprdata(:P_hawb)',{replacements:{P_hawb:hawbNo}})
            .then((get:any)=>{
               resolve({ status: { code: 'SUCCESS', message: get } })
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
            
        })
    }
    async spAggOtifRootCause(): Promise<any> {
        return await new Promise((resolve, reject) => {
            ImShipmentAnalytics.sequelize?.query('CALL agg_otifrootcauses()')
            .then((get:any)=>{
               resolve({ status: { code: 'SUCCESS', message: get } })
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
            
        })
    }

    async spAggGrossNetOtPerformance(): Promise<any> {
        return await new Promise((resolve, reject) => {
            ImShipmentAnalytics.sequelize?.query('CALL agg_gnotperformance()')
            .then((get:any)=>{
               resolve({ status: { code: 'SUCCESS', message: get } })
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
            
        })
    }

    async spAggGskVsScorecard(): Promise<any> {
        return await new Promise((resolve, reject) => {
            ImShipmentAnalytics.sequelize?.query('CALL agg_gskvxscorecard()')
            .then((get:any)=>{
               resolve({ status: { code: 'SUCCESS', message: get } })
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
            
        })
    }

    async spAggYtdShipmentWeight(): Promise<any> {
        return await new Promise((resolve, reject) => {
            ImShipmentAnalytics.sequelize?.query('CALL agg_ytdshipmentweight()')
            .then((get:any)=>{
               resolve({ status: { code: 'SUCCESS', message: get } })
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
            
        })
    }

    async spAggLaneOverview(): Promise<any> {
        return await new Promise((resolve, reject) => {
            ImShipmentAnalytics.sequelize?.query('CALL agg_laneoverview()')
            .then((get:any)=>{
               resolve({ status: { code: 'SUCCESS', message: get } })
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
            
        })
    }

    async spAggAirLinePerformance(): Promise<any> {
        return await new Promise((resolve, reject) => {
            ImShipmentAnalytics.sequelize?.query('CALL agg_airlineperformance()')
            .then((get:any)=>{
               resolve({ status: { code: 'SUCCESS', message: get } })
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
            
        })
    }

    async spmainAggregation(): Promise<any> {
        return await new Promise((resolve, reject) => {
            ImShipmentAnalytics.sequelize?.query('CALL main_aggregation()')
            .then((get:any)=>{
               resolve({ status: { code: 'SUCCESS', message: get } })
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
            
        })
    }

    async getOriginCodes(whereObj: any): Promise<AggCostanalysisShipments[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            
            AggCostanalysisShipments.findAll({
                where: whereObj,attributes:[[Sequelize.fn('distinct', Sequelize.col('origin_code')), 'originCode'],[Sequelize.fn('lower', Sequelize.col('origin_code')), 'originId']],
            }).then((get: AggCostanalysisShipments[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }

    async getEtaOriginCodes(whereObj: any): Promise<BvShipmentEtaDeviationNodate[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            
            BvShipmentEtaDeviationNodate.findAll({
                where: whereObj,attributes:[[Sequelize.fn('distinct', Sequelize.col('origin_code')), 'originCode'],[Sequelize.fn('lower', Sequelize.col('origin_code')), 'originId']],
            }).then((get: BvShipmentEtaDeviationNodate[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }
    async getDestinationCodes(whereObj: any): Promise<AggCostanalysisShipments[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            
            AggCostanalysisShipments.findAll({
                where: whereObj,attributes:[[Sequelize.fn('distinct', Sequelize.col('destination_code')), 'destinationCode'],[Sequelize.fn('lower', Sequelize.col('destination_code')), 'destinationId']],
            }).then((get: AggCostanalysisShipments[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }
    async getEtaAllAccounts(whereObj: any): Promise<BvShipmentEtaDeviationNodate[]> {

        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj

        return await new Promise((resolve, reject) => {

            

            BvShipmentEtaDeviationNodate.findAll({

                where: whereObj,attributes:[[Sequelize.fn('distinct', Sequelize.col('shipper')), 'accounts'],[Sequelize.fn('lower', Sequelize.col('shipper')), 'accountId']],

            }).then((get: BvShipmentEtaDeviationNodate[]) => {

                resolve(get);

            }).catch((error: any) => {

                this.logger.error(error);

                reject(error);

            });

        })

    }
    
    async create(obj: any, transaction?: Transaction): Promise<ImShipmentAnalytics> {
        return await new Promise((resolve, reject) => {
            ImShipmentAnalytics.create(obj, { transaction }).then((created: ImShipmentAnalytics) => {
                resolve(created);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        });
    }

    async updateOrCreate(obj: any, uniqueFieldsWhereObj?: any, transaction?: Transaction): Promise<any> {
        let foundItem: any = false;
        if (Object.keys(uniqueFieldsWhereObj).length > 0) {
            foundItem = await this.getModel().findOne({ where: uniqueFieldsWhereObj, transaction });
        }

        return await new Promise((resolve, reject) => {
            let item = null;
            if (!foundItem) {
                item = this.getModel().create(obj, { transaction });
                resolve(item)
            } else {
                item = this.getModel().update(obj, { where: uniqueFieldsWhereObj, transaction });
                resolve(item)
            }
        });
    }

    async getHawb(whereObj: any ,transaction?: Transaction): Promise<ImShipmentAnalytics[]> {
       
            return await new Promise((resolve, reject) => {
                ImShipmentAnalytics.findAll({ where: whereObj,  limit: 1, order: Sequelize.literal('id DESC')
                }).then((get: ImShipmentAnalytics[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })
        

    }

    async getStatus(whereObj: any ,transaction?: Transaction): Promise<ImShipmentAnalytics[]> {
            return await new Promise((resolve, reject) => {
                ImShipmentAnalytics.findAll({ where: whereObj , attributes:[[Sequelize.fn('distinct', Sequelize.col('ship_tracking_num')), 'ship_tracking_num']]
                }).then((get: ImShipmentAnalytics[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })
        

    }
    
}