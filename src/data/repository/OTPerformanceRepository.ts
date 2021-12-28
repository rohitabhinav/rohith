
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { AggGrossNetotPerformance } from "../entity/init-models";
import Sequelize = require('sequelize');
import { Transaction } from "sequelize/types";
const { Op } = require("sequelize");
export class OTPerformanceRepository extends Repository {
    private logger: Logger;
    constructor() {
        super();
        this.logger = DI.get(Logger)
    }


    async get(whereObj: any): Promise<AggGrossNetotPerformance[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            AggGrossNetotPerformance.findAll({
                where: whereObj,attributes:['month','year_number',[Sequelize.fn('sum', Sequelize.col('shipments')), 'shipments'],[Sequelize.fn('avg', Sequelize.col('gross_ontime')), 'gross_ontime'],[Sequelize.fn('avg', Sequelize.col('netontime')), 'netontime']],order:[['year_number','ASC']],group: ['month','year_number'],
            }).then((get: AggGrossNetotPerformance[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }
}