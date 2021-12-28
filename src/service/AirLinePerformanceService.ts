import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { AirLinePerformanceRepository } from "../data/repository/AirLinePerformanceRepository"
import { QueryBuilder } from "../util/QueryBuilder";
import { any } from "bluebird";


export class AirLinePerformanceService {
    private logger: Logger;
    private airLinePerformanceRepository: AirLinePerformanceRepository;
    private queryBuilder: QueryBuilder;
    constructor() {
        this.logger = DI.get(Logger);
        this.airLinePerformanceRepository = DI.get(AirLinePerformanceRepository);
        this.queryBuilder = DI.get(QueryBuilder);
    }

    async getAirLinePerformanceData(originCountry?: any, monthNumber?: any, year?: any,sort?: any, colFilters?: any, colSearch?: any,): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let sortArrayOfArrays: any = [];
                let colFilterObj: any;
                let airLineDataCount: any;
                let obj: any = {};
                //Building a sort Object
                sortArrayOfArrays = this.queryBuilder.buildSortObj(sort);
                colFilterObj = this.queryBuilder.buildColFilterObj(colFilters, colSearch);
                whereObj = colFilterObj.whereObj;
                if (originCountry !== '') {
                    whereObj['origin_country'] = originCountry
                }
                if (monthNumber !== '') {
                    whereObj['month'] = monthNumber
                }
                if (year !== '') {
                    whereObj['year_number'] = year
                }
                let airLinePerformanceData: any = await this.airLinePerformanceRepository.get(whereObj, sortArrayOfArrays);
                let airLineData: any = await this.airLinePerformanceRepository.getAll();
                if (airLinePerformanceData.length > 0) {
                    airLineDataCount = airLinePerformanceData.length;
                    let totalOnTimeShipmentCount = airLinePerformanceData.map((TotalOntimeShipmentCount: { ontime_shipcount: any; }) => TotalOntimeShipmentCount.ontime_shipcount).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalOntimeShipmentCount'] = totalOnTimeShipmentCount
                    let avgOntimeShipPercentage = airLinePerformanceData.map((avgOntimeShipPercentage: { ontime_shippercentage: any; }) => avgOntimeShipPercentage.ontime_shippercentage).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgOntimeShipPercentage'] = (avgOntimeShipPercentage / airLinePerformanceData.length).toFixed(2)
                    let totalRebookedgskShipCount = airLinePerformanceData.map((totalRebookedgskShipCount: { rebookedgsk_shipcount: any; }) => totalRebookedgskShipCount.rebookedgsk_shipcount).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalRebookedgskShipCount'] = totalRebookedgskShipCount
                    let avgRebookedgskShipPercentage = airLinePerformanceData.map((avgRebookedgskShipPercentage: { rebookedgsk_shippercentage: any; }) => avgRebookedgskShipPercentage.rebookedgsk_shippercentage).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgRebookedgskShipPercentage'] = (avgRebookedgskShipPercentage / airLinePerformanceData.length).toFixed(2)
                    let totalRebookedShipCount = airLinePerformanceData.map((totalRebookedShipCount: { rebooked_shipcount: any; }) => totalRebookedShipCount.rebooked_shipcount).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalRebookedShipCount'] = totalRebookedShipCount
                    let avgRebookedShipPercentage = airLinePerformanceData.map((avgRebookedShipPercentage: { rebooked_shippercentage: any; }) => avgRebookedShipPercentage.rebooked_shippercentage).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgRebookedShipPercentage'] = (avgRebookedShipPercentage / airLinePerformanceData.length).toFixed(2)
                    let totalInfullShipCount = airLinePerformanceData.map((totalInfullShipCount: { inful_shipcount: any; }) => totalInfullShipCount.inful_shipcount).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalInfullShipCount'] = totalInfullShipCount
                    let avgInfullShipPercentage = airLinePerformanceData.map((avgInfullShipPercentage: { ifnul_shippercentage: any; }) => avgInfullShipPercentage.ifnul_shippercentage).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgInfullShipPercentage'] = (avgInfullShipPercentage / airLinePerformanceData.length).toFixed(2)
                    let totaldamageShipCount = airLinePerformanceData.map((totaldamageShipCount: { damage_shipcount: any; }) => totaldamageShipCount.damage_shipcount).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totaldamageShipCount'] = totaldamageShipCount
                    let avgDamageShipPercentage = airLinePerformanceData.map((avgDamageShipPercentage: { damage_shippercentage: any; }) => avgDamageShipPercentage.damage_shippercentage).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgDamageShipPercentage'] = (avgDamageShipPercentage / airLinePerformanceData.length).toFixed(2)
                    let totalShipmentCount = airLinePerformanceData.map((totalShipmentCount: { totalshipments: any; }) => totalShipmentCount.totalshipments).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalShipmentCount'] = totalShipmentCount
                    let avgShipmentPercentage = airLinePerformanceData.map((avgShipmentPercentage: { totalpercentage: any; }) => avgShipmentPercentage.totalpercentage).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgShipmentPercentage'] = (avgShipmentPercentage / airLinePerformanceData.length).toFixed(2)
                }

                return resolve({ "result": airLinePerformanceData, "totals": obj, "TotalCount": airLineDataCount })
            } catch (e) {
                reject(e)
            }
        })
    }
}