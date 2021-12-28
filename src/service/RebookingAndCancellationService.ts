import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { RebookingAndCancellationRepository } from "../data/repository/RebookingAndCancellationRepository"
import { QueryBuilder } from "../util/QueryBuilder";
import { any } from "bluebird";


export class RebookingAndCancellationService {
    private logger: Logger;
    private rebookingAndCancellationRepository: RebookingAndCancellationRepository;
    private queryBuilder: QueryBuilder;
    constructor() {
        this.logger = DI.get(Logger);
        this.rebookingAndCancellationRepository = DI.get(RebookingAndCancellationRepository);
        this.queryBuilder = DI.get(QueryBuilder);
    }

    async getRebookingAndCancellationData(originCountry?: any, monthNumber?: any, year?: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                if (originCountry !== '') {
                    whereObj['origin'] = originCountry
                }
                if (monthNumber !== '') {
                    whereObj['month'] = monthNumber
                }
                if (year !== '') {
                    whereObj['year_number'] = year
                }
                let attributes:any;
                attributes = ['month','hawb','mb','shipper_reference','origin','destination','airline','numof_rebookings_shipment','cost_avoidance','comments','year_number']
                let rebookingAndCancellationData: any = await this.rebookingAndCancellationRepository.get(whereObj,attributes);
                return resolve({ "result": rebookingAndCancellationData})
            } catch (e) {
                reject(e)
            }
        })
    }
}