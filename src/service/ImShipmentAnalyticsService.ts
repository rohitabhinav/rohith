import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { DimPortOfOriginRespository } from "../data/repository/DimPortOfOriginRespository"
import { IMShipmentAnalyticsRepository } from "../data/repository/IMShipmentAnalyticsRepository"
import { YTDShipmentWeightsRespository } from "../data/repository/YTDShipmentWeightsRespository"




export class ImShipmentAnalyticsService {
    private logger: Logger;
    private dimPortOfOriginRespository: DimPortOfOriginRespository;
    private iMShipmentAnalyticsRepository:IMShipmentAnalyticsRepository
    private yTDShipmentWeightsRespository:YTDShipmentWeightsRespository
    constructor() {
        this.logger = DI.get(Logger);
        this.dimPortOfOriginRespository = DI.get(DimPortOfOriginRespository);
        this.iMShipmentAnalyticsRepository = DI.get(IMShipmentAnalyticsRepository);
        this.yTDShipmentWeightsRespository = DI.get(YTDShipmentWeightsRespository);
        
    }

    async getOriginCountries(): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {

                let originCountries :any = await this.dimPortOfOriginRespository.get(whereObj);
                return resolve(originCountries)
            } catch (e) {
                reject(e)
            }
        })
    }

    async getAstroOriginCountries(): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {

                let originCountries :any = await this.yTDShipmentWeightsRespository.getAstroOriginCountries(whereObj);
                return resolve(originCountries)
            } catch (e) {
                reject(e)
            }
        })
    }
    


    async spDimension(code:any){
        return new Promise(async (resolve, reject) => {
            try {

                let originCountries :any = await this.iMShipmentAnalyticsRepository.spMainDimension(code)
                return resolve(originCountries)
            } catch (e) {
                reject(e)
            }
        })


    }
}