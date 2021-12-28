import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { Transaction } from "sequelize/types";
import { AppUsers } from "../entity/AppUsers";

export class UsersRepository implements Repository{
    private logger: Logger;
    constructor(){
        this.logger = DI.get(Logger);
    }  
    async get(whereObj: any, transaction?: Transaction): Promise<AppUsers[]> {
        return await new Promise((resolve, reject) => {
            AppUsers.findAll({ where: whereObj}).then((get: AppUsers[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }

    async getUsersList(whereObj: any): Promise<AppUsers[]> {
        return await new Promise((resolve, reject) => {
            AppUsers.findAll({where: whereObj, attributes: ['EMAIL_ID', 'USER_TYPE', 'USER_ORG','USER_ID','USER_ROLE','createdAt','updatedAt']},).then((get: AppUsers[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }

    async create(obj: any, transaction?: Transaction): Promise<AppUsers> {
        return await new Promise((resolve, reject) => {
            AppUsers.create(obj, { transaction }).then((created: AppUsers) => {
                resolve(created);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        });
    }
    

    async update(whereObj: any, updateObj: any, transaction?: Transaction): Promise<Number> {
        return await new Promise((resolve, reject) => {
            AppUsers.update(updateObj, { where: whereObj }).then((update: [number, AppUsers[]]) => {
                resolve(update[0]);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        });
    }


    async delete(whereObj: any): Promise<Number> {
        return await new Promise((resolve, reject) => {
            AppUsers.destroy({ where: whereObj}).then((rowDeleted) => {
                resolve(rowDeleted);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        });
    }
}