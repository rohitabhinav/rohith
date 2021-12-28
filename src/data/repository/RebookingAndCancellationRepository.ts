
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { BvRebookingCancellations } from "../entity/init-models";
import { Transaction } from "sequelize/types";
const { Op } = require("sequelize");
export class RebookingAndCancellationRepository extends Repository {
    private logger: Logger;
    constructor() {
        super();
        this.logger = DI.get(Logger)
    }



    async get(whereObj: any,attributes:any): Promise<BvRebookingCancellations[]> {
        return await new Promise((resolve, reject) => {
            BvRebookingCancellations.findAll({
                where: whereObj , attributes:attributes
            }).then((get: BvRebookingCancellations[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }

}