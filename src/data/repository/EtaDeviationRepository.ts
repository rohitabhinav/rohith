
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { BvShipmentEtaDeviation } from "../entity/init-models";
import { BvShipmentEtaDeviationNodate } from "../entity/init-models";


import { Transaction } from "sequelize/types";
import Sequelize = require('sequelize');
const { Op } = require("sequelize");
export class EtaDeviationRepository extends Repository {
    private logger: Logger;
    constructor() {
        super();
        this.logger = DI.get(Logger)
    }





    async getEtaSummary(whereObj: any,attributes:any): Promise<BvShipmentEtaDeviation[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvShipmentEtaDeviation.findAll({
                where: whereObj , attributes:attributes
            }).then((get: BvShipmentEtaDeviation[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }

    async getEtaSummaryWithOutDate(whereObj: any,attributes:any): Promise<BvShipmentEtaDeviationNodate[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvShipmentEtaDeviationNodate.findAll({
                where: whereObj,attributes:attributes
            }).then((get: BvShipmentEtaDeviationNodate[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }



}