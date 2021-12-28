
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { AggAirlinePerformance } from "../entity/init-models";
import { Transaction } from "sequelize/types";
const { Op } = require("sequelize");
export class AirLinePerformanceRepository extends Repository{
    private logger :Logger;
    constructor(){
        super();
        this.logger = DI.get(Logger)
    }

    

    async get(whereObj: any, sort?:any,limit?:number,offset?:number, attributes?:any ,transaction?: Transaction): Promise<AggAirlinePerformance[]> {
        whereObj = (whereObj==undefined && whereObj == null)?{}:whereObj
        if(whereObj === {}){
            return await new Promise((resolve, reject) => {
                AggAirlinePerformance.findAll({ where: whereObj
                }).then((get: AggAirlinePerformance[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })
        }else{
            return await new Promise((resolve, reject) => {
                AggAirlinePerformance.findAll({ where: whereObj,order: sort
                }).then((get: AggAirlinePerformance[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })
        }

    }

    async getAll(): Promise<AggAirlinePerformance[]> {
            return await new Promise((resolve, reject) => {
                AggAirlinePerformance.findAll({
                }).then((get: AggAirlinePerformance[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })

    }

}