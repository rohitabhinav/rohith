import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { QueryBuilder } from "../util/QueryBuilder";
import { OtifRootCausesRepository } from "../data/repository/OtifRootCausesRepository";

export class OtifRootCausesService {
    private logger: Logger;
    private otifRootCausesRepository:OtifRootCausesRepository
    private queryBuilder: QueryBuilder;
    constructor() {
        this.logger = DI.get(Logger);

        this.otifRootCausesRepository = DI.get(OtifRootCausesRepository);
        this.queryBuilder = DI.get(QueryBuilder);
    }

    async getOtifRootCauses(originCountry?:any, month?: any, year?:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let obj: any = {};
                if(originCountry !== ''){
                    whereObj['origin_country'] = originCountry                   
                }
                if(month !== ''){
                    whereObj['month'] = month
                }
                if(year !== ''){
                    whereObj['year_number'] = year
                }
                let otifRootCausesData :any = await this.otifRootCausesRepository.get(whereObj);
                return resolve(otifRootCausesData)
            } catch (e) {
                reject(e)
            }
        })
    }

}