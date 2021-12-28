import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { YTDShipmentWeightsRespository } from "../data/repository/YTDShipmentWeightsRespository"



export class YTDShipmentsAndWeightService {
    private logger: Logger;
    private yTDShipmentWeightsRespository: YTDShipmentWeightsRespository
    constructor() {
        this.logger = DI.get(Logger);
        this.yTDShipmentWeightsRespository = DI.get(YTDShipmentWeightsRespository)
    }

    async getYTDShipmentsAndWeight(originCountry?: any, month?: any, year?: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                if (originCountry !== '') {
                    whereObj['origin_country'] = originCountry
                }
                if (month !== '') {
                    whereObj['month'] = month
                }
                if (year !== '') {
                    whereObj['year_number'] = year
                }
                let ytdShipmentsAndWeights: any = await this.yTDShipmentWeightsRespository.get(whereObj);
                let months: any = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
                let data: any = ytdShipmentsAndWeights.sort((a: any, b: any) => { return months.indexOf(a.month) - months.indexOf(b.month) })
                return resolve(data)
            } catch (e) {
                reject(e)
            }
        })
    }


    async getShipmentsByMonthAndYr(month?: any, year?: any,originCountry?:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                if (month !== '') {
                    whereObj['month'] = month
                }
                if (year !== '') {
                    whereObj['year_number'] = year
                }
                if (originCountry !== '') {
                    whereObj['origin_country'] = originCountry
                }
                let ytdShipmentsAndWeights: any = await this.yTDShipmentWeightsRespository.getShipmentsByMonthAndYear(whereObj);
                return resolve(ytdShipmentsAndWeights)
            } catch (e) {
                reject(e)
            }
        })
    }

    async getAstroYTDShipmentsAndWeight(originCountry?: any, month?: any, year?: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                if (originCountry !== '') {
                    whereObj['origin_country'] = originCountry
                }
                if (month !== '') {
                    whereObj['month'] = month
                }
                if (year !== '') {
                    whereObj['year_number'] = year
                }
                let ytdShipmentsAndWeights: any = await this.yTDShipmentWeightsRespository.getAstroYtdShipments(whereObj);
                let months: any = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
                let data: any = ytdShipmentsAndWeights.sort((a: any, b: any) => { return months.indexOf(a.month) - months.indexOf(b.month) })
                return resolve(data)
            } catch (e) {
                reject(e)
            }
        })
    }

    async getAstroShipmentsByMonthAndYr(month?: any, year?: any,originCountry?:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                if (month !== '') {
                    whereObj['month'] = month
                }
                if (year !== '') {
                    whereObj['year_number'] = year
                }
                if (originCountry !== '') {
                    whereObj['origin_country'] = originCountry
                }
                let ytdShipmentsAndWeights: any = await this.yTDShipmentWeightsRespository.getAstroShipmentsByMonthAndYear(whereObj);
                return resolve(ytdShipmentsAndWeights)
            } catch (e) {
                reject(e)
            }
        })
    }

}