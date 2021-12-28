import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { IMShipmentAnalyticsRepository } from "../data/repository/IMShipmentAnalyticsRepository"
import { QueryBuilder } from "../util/QueryBuilder";
import { any } from "bluebird";


export class CronService {
    private logger: Logger;
    private imShipmentAnalyticsRepository: IMShipmentAnalyticsRepository;
    private queryBuilder: QueryBuilder;
    constructor() {
        this.logger = DI.get(Logger);
        this.imShipmentAnalyticsRepository = DI.get(IMShipmentAnalyticsRepository);
        this.queryBuilder = DI.get(QueryBuilder);
    }

    async gskCron(): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes:any;
                whereObj['shipment_status'] = 'Delivered'
                let shipmentDeliveredData: any = await this.imShipmentAnalyticsRepository.getStatus(whereObj);
                if (shipmentDeliveredData.length > 0) {
                    for (let data of shipmentDeliveredData) {
                        await this.imShipmentAnalyticsRepository.spImMainDimension(data.ship_tracking_num)
                        await this.imShipmentAnalyticsRepository.spImMainFactOpeartional(data.ship_tracking_num)

                    }
                    await this.imShipmentAnalyticsRepository.spmainAggregation();
                    return resolve({ status: { code: 'SUCCESS', message: "Created Suceessfully" } })
                }
                else{
                    return resolve({ status: { code: 'SUCCESS', message: "No Delivered Records Found" } })
                }
            } catch (e) {
                reject(e)
            }
        })
    }

    async aggregationCron(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                await this.imShipmentAnalyticsRepository.spAggOtifRootCause();
                await this.imShipmentAnalyticsRepository.spAggGrossNetOtPerformance();
                await this.imShipmentAnalyticsRepository.spAggGskVsScorecard();
                await this.imShipmentAnalyticsRepository.spAggYtdShipmentWeight();
                await this.imShipmentAnalyticsRepository.spAggLaneOverview();
                await this.imShipmentAnalyticsRepository.spAggAirLinePerformance();
                return resolve({ status: { code: 'SUCCESS', message: "Created Suceessfully" } })
            } catch (e) {
                reject(e)
            }
        })
    }
}