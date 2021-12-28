import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { QueryBuilder } from "../util/QueryBuilder";
import { OTPerformanceRepository } from "../data/repository/OTPerformanceRepository";


export class OTPerformanceService {
    private logger: Logger;
    private oTPerformanceRepository: OTPerformanceRepository;
    private queryBuilder: QueryBuilder;
    constructor() {
        this.logger = DI.get(Logger);
        this.oTPerformanceRepository = DI.get(OTPerformanceRepository);
        this.queryBuilder = DI.get(QueryBuilder);
    }

    async getOtPerformance(originCountry?: any, month?: any, year?: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let obj: any = {};
                if (originCountry !== '') {
                    whereObj['origin_country'] = originCountry
                }
                if (month !== '') {
                    whereObj['month'] = month
                }
                if (year !== '') {
                    whereObj['year_number'] = year
                }
                let otPerformanceData: any = await this.oTPerformanceRepository.get(whereObj);
                let months: any = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
                let data: any = otPerformanceData.sort((a: any, b: any) => { return months.indexOf(a.month) - months.indexOf(b.month) })
                return resolve(data)
            } catch (e) {
                reject(e)
            }
        })
    }

}