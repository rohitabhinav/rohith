
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { KpiDocument } from "../entity/init-models";
import { OtifrootcausesMaster } from "../entity/init-models";
import { Transaction } from "sequelize/types";
const { Op } = require("sequelize");
export class OperationalDataRepository extends Repository{
    private logger :Logger;
    constructor(){
        super();
        this.logger = DI.get(Logger)
    }


    async get(whereObj: any ,transaction?: Transaction): Promise<KpiDocument[]> {
       
            return await new Promise((resolve, reject) => {
                KpiDocument.findAll({ where: whereObj
                }).then((get: KpiDocument[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })
        

    }

    async create(obj: any, transaction?: Transaction): Promise<KpiDocument> {
        return await new Promise((resolve, reject) => {
            KpiDocument.create(obj, { transaction }).then((created: KpiDocument) => {
                resolve(created);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        });
    }

    
    async update(whereObj: any, updateObj: any, transaction?: Transaction): Promise<KpiDocument> {
        return await new Promise((resolve, reject) => {
            KpiDocument.update(updateObj, { where: whereObj }).then((results: KpiDocument | any) => {
                resolve(results[0]);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        });
    }

    async getRootCauses(whereObj: any ,transaction?: Transaction): Promise<OtifrootcausesMaster[]> {
       
            return await new Promise((resolve, reject) => {
                OtifrootcausesMaster.findAll({ where: whereObj
                }).then((get: OtifrootcausesMaster[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })
    }        
}