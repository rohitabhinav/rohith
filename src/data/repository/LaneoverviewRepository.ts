
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { AggLaneoverview } from "../entity/init-models";
import { Transaction } from "sequelize/types";
const { Op } = require("sequelize");
export class LaneoverviewRepository extends Repository{
    private logger :Logger;
    constructor(){
        super();
        this.logger = DI.get(Logger)
    }

    

    async get(whereObj: any, sort?:any,limit?:number,offset?:number, attributes?:any ,transaction?: Transaction): Promise<AggLaneoverview[]> {
        whereObj = (whereObj==undefined && whereObj == null)?{}:whereObj
        if(attributes != undefined && attributes != null && attributes.length>0){
            return await new Promise((resolve, reject) => {
                AggLaneoverview.findAll({ where: whereObj,order: sort,limit:limit,offset:offset,attributes:attributes
                }).then((get: AggLaneoverview[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })
        }else{
            return await new Promise((resolve, reject) => {
                AggLaneoverview.findAll({ where: whereObj,order: sort
                }).then((get: AggLaneoverview[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })
        }

    }

    async getAll(): Promise<AggLaneoverview[]> {
            return await new Promise((resolve, reject) => {
                AggLaneoverview.findAll({
                }).then((get: AggLaneoverview[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })

    }

}