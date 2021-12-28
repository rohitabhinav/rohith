
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { SourceOperationalData} from "../entity/init-models";
import Sequelize = require('sequelize');
import {  Transaction } from "sequelize/types";

export class SourceOperationalDataRepository extends Repository{
    private logger :Logger;
    constructor(){
        super();
        this.logger = DI.get(Logger)
    }


    async get(whereObj: any): Promise<SourceOperationalData[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            SourceOperationalData.findAll({
                where: whereObj,attributes:[[Sequelize.fn('distinct', Sequelize.col('origin_country')), 'origin_country']],
            }).then((get: SourceOperationalData[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }


    async create(obj: any, transaction?: Transaction): Promise<SourceOperationalData> {
        return await new Promise((resolve, reject) => {
            SourceOperationalData.create(obj, { transaction }).then((created: SourceOperationalData) => {
                resolve(created);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        });
    }
}