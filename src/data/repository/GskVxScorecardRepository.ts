
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { AggGskvxscorecard } from "../entity/init-models";
import { Transaction } from "sequelize/types";
const { Op } = require("sequelize");
export class GskVxScorecardRepository extends Repository{
    private logger :Logger;
    constructor(){
        super();
        this.logger = DI.get(Logger)
    }

    

    async get(whereObj: any, sort?:any,limit?:number,offset?:number, attributes?:any ,transaction?: Transaction): Promise<AggGskvxscorecard[]> {
        whereObj = (whereObj==undefined && whereObj == null)?{}:whereObj
        if(attributes != undefined && attributes != null && attributes.length>0){
            return await new Promise((resolve, reject) => {
                AggGskvxscorecard.findAll({ where: whereObj,order: sort,limit:limit,offset:offset,attributes:attributes
                }).then((get: AggGskvxscorecard[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })
        }else{
            return await new Promise((resolve, reject) => {
                AggGskvxscorecard.findAll({ where: whereObj,order: sort
                }).then((get: AggGskvxscorecard[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })
        }

    }

    async getAll(): Promise<AggGskvxscorecard[]> {
            return await new Promise((resolve, reject) => {
                AggGskvxscorecard.findAll({
                }).then((get: AggGskvxscorecard[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })

    }


}