
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { BvAggCostanalysis, AggGskvxscorecard } from "../entity/init-models";
import { BvEtaDeviationDrilldown } from "../entity/init-models";

import { ImShipmentAnalyticsCost } from "../entity/init-models";

import { Transaction } from "sequelize/types";
import Sequelize = require('sequelize');
const { Op } = require("sequelize");
export class ImShipmentAnalyticsCostRepository extends Repository {
    private logger: Logger;
    constructor() {
        super();
        this.logger = DI.get(Logger)
    }



    async get(whereObj: any, attributes?: any, transaction?: Transaction): Promise<BvAggCostanalysis[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvAggCostanalysis.findAll({
                where: whereObj, attributes: attributes
            }).then((get: BvAggCostanalysis[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })

    }

    async getAllAccounts(whereObj: any): Promise<BvAggCostanalysis[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvAggCostanalysis.findAll({
                where: whereObj, attributes: [[Sequelize.fn('distinct', Sequelize.col('shipper')), 'accounts']]
            }).then((get: BvAggCostanalysis[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })

    }

    async getAllForwarders(whereObj: any): Promise<BvAggCostanalysis[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvAggCostanalysis.findAll({
                where: whereObj, attributes: [[Sequelize.fn('distinct', Sequelize.col('lspOrgName')), 'forwarder/courier']]
            }).then((get: BvAggCostanalysis[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })

    }

    async getRegionalCostAnalysis(whereObj: any, flag: any): Promise<BvAggCostanalysis[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            if (flag === 'table') {
                BvAggCostanalysis.findAll({
                    where: whereObj, attributes: ['origin_region','destination_origin','origin_latitude','origin_longitude','destination_latitude','destination_longitude',[Sequelize.fn('count', Sequelize.col('shipment_id')), 'noofshipments'], [Sequelize.fn('count', Sequelize.col('hawb')), 'hawb'], [Sequelize.fn('sum', Sequelize.col('number_of_pieces')), 'quantity'], [Sequelize.fn('ROUND', Sequelize.fn('sum', Sequelize.col('calc_total_price_with_rate'))), 'cost'], [Sequelize.literal('ROUND(sum(`unit_cost_total_price`)/IFNULL(count(`hawb`),1),2)'), 'ratesUsed']], group: ['origin_region', 'destination_origin','origin_latitude','origin_longitude','destination_latitude','destination_longitude']
                }).then((get: BvAggCostanalysis[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            }
            else if (flag === 'graph') {
                BvAggCostanalysis.findAll({
                    where: whereObj, attributes: ['origin_region','destination_origin', 'origin_latitude','origin_longitude','destination_latitude','destination_longitude',[Sequelize.fn('count', Sequelize.col('shipment_id')), 'noofshipments'], [Sequelize.fn('count', Sequelize.col('hawb')), 'hawb'], [Sequelize.fn('sum', Sequelize.col('number_of_pieces')), 'quantity'], [Sequelize.fn('ROUND', Sequelize.fn('sum', Sequelize.col('calc_total_price_with_rate'))), 'cost'], [Sequelize.literal('ROUND(sum(`unit_cost_total_price`)/IFNULL(count(`hawb`),1),2)'), 'ratesUsed']], group: ['origin_region','destination_origin','origin_latitude','origin_longitude','destination_latitude','destination_longitude']
                }).then((get: BvAggCostanalysis[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            }
        })

    }

    async getRegionalCostAnalysisGrp(whereObj: any, flag: any): Promise<BvAggCostanalysis[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            if (flag === 'nopayload') {
                BvAggCostanalysis.findAll({
                    where: whereObj, attributes: [['origin_region','label'],['origin_region','origin_region'],['AllRegions','destination_origin'],'shipment_total_currency',[Sequelize.fn('count', Sequelize.col('shipment_id')), 'noofshipments'], [Sequelize.fn('count', Sequelize.col('hawb')), 'hawb'], [Sequelize.fn('sum', Sequelize.col('number_of_pieces')), 'quantity'], [Sequelize.fn('ROUND', Sequelize.fn('sum', Sequelize.col('calc_total_price_with_rate'))), 'cost'], [Sequelize.literal('ROUND(sum(`unit_cost_total_price`)/IFNULL(count(`hawb`),1),2)'), 'ratesUsed']], group: ['origin_region','shipment_total_currency']
                }).then((get: BvAggCostanalysis[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            }
            else if (flag === 'payload') {
                BvAggCostanalysis.findAll({
                    where: whereObj, attributes: ['origin_region',['destination_origin','label'],['destination_origin','destination_origin'],'shipment_total_currency',[Sequelize.fn('count', Sequelize.col('shipment_id')), 'noofshipments'], [Sequelize.fn('count', Sequelize.col('hawb')), 'hawb'], [Sequelize.fn('sum', Sequelize.col('number_of_pieces')), 'quantity'], [Sequelize.fn('ROUND', Sequelize.fn('sum', Sequelize.col('calc_total_price_with_rate'))), 'cost'], [Sequelize.literal('ROUND(sum(`unit_cost_total_price`)/IFNULL(count(`hawb`),1),2)'), 'ratesUsed']], group: ['origin_region','destination_origin','shipment_total_currency']
                }).then((get: BvAggCostanalysis[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            }
        })

    }

    async getRegionCostAnalysisDetails(whereObj: any, attributes?: any, transaction?: Transaction): Promise<BvAggCostanalysis[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvAggCostanalysis.findAll({
                where: whereObj, attributes: attributes
            }).then((get: BvAggCostanalysis[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })

    }

    async getEtaSummary(whereObj: any): Promise<BvAggCostanalysis[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvAggCostanalysis.findAll({
                where: whereObj, attributes: ['origin_code', 'destination_code', 'shipper', [Sequelize.fn('count', Sequelize.col('sshipment_id')), 'noOfShipments'], [Sequelize.fn('count', Sequelize.col('hawb')), 'hawb'], [Sequelize.fn('count', Sequelize.col('etaDeviation_flag')), 'etaDeviation_flag'], [Sequelize.fn('count', Sequelize.col('totetaDeviation_flag')), 'totetaDeviation_flag'], [Sequelize.literal('ROUND(COUNT(etaDeviation_flag)/COUNT(totetaDeviation_flag)*100)'), 'etaDeviation']], group: ['origin_code', 'destination_code', 'shipper'], having: Sequelize.literal('etaDeviation_flag >0')
            }).then((get: BvAggCostanalysis[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })

    }

    async getEtaDetails(whereObj: any, attributes: any): Promise<BvEtaDeviationDrilldown[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvEtaDeviationDrilldown.findAll({
                where: whereObj, attributes: attributes
            }).then((get: BvEtaDeviationDrilldown[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })

    }

    async create(obj: any, transaction?: Transaction): Promise<ImShipmentAnalyticsCost> {
        return await new Promise((resolve, reject) => {
            ImShipmentAnalyticsCost.create(obj, { transaction }).then((created: ImShipmentAnalyticsCost) => {
                resolve(created);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        });
    }

    async getRegions(whereObj: any): Promise<BvAggCostanalysis[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvAggCostanalysis.findAll({
                where: whereObj, attributes: [[Sequelize.fn('distinct', Sequelize.col('origin_region')), 'regionNames'], [Sequelize.fn('lower', Sequelize.col('origin_region')), 'regionId']]
            }).then((get: BvAggCostanalysis[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })

    }

}