
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { RegionMaster, AggGskvxscorecard } from "../entity/init-models";
import { Transaction } from "sequelize/types";
import Sequelize = require('sequelize');
const { Op } = require("sequelize");
export class RegionMasterRepository extends Repository{
    private logger :Logger;
    constructor(){
        super();
        this.logger = DI.get(Logger)
    }

    

    async get(whereObj: any): Promise<RegionMaster[]> {
        whereObj = (whereObj==undefined && whereObj == null)?{}:whereObj
            return await new Promise((resolve, reject) => {
                RegionMaster.findAll({ where: whereObj,attributes:[[Sequelize.fn('distinct', Sequelize.col('Region_name')), 'origin_region'],['dest_latitude','origin_latitude'],['dest_longitude','origin_longitude']]
                }).then((get: RegionMaster[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })

    }

}