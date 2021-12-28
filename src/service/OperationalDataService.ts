import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { OperationalDataRepository } from "../data/repository/OperationalDataRepository"
import { IMShipmentAnalyticsRepository } from "../data/repository/IMShipmentAnalyticsRepository"
import { QueryBuilder } from "../util/QueryBuilder";
import { FetchResponse } from "../response/APIResponses";
import { ResponseCode, ResponseStatus } from "../response/BaseResponse";

export class OperationalDataService {
    private logger: Logger;
    private operationalDataRepository: OperationalDataRepository;
    private iMShipmentAnalyticsRepository:IMShipmentAnalyticsRepository
    private queryBuilder: QueryBuilder;
    constructor() {
        this.logger = DI.get(Logger);
        this.operationalDataRepository = DI.get(OperationalDataRepository);
        this.iMShipmentAnalyticsRepository = DI.get(IMShipmentAnalyticsRepository)
        this.queryBuilder = DI.get(QueryBuilder);
    }

    async getOperationData(req?: any, res?: any): Promise<any> {
        let whereObj: any = {};
        let statusObj: any = {};
        let whereObj1: any = {};
        let response: any = {};
        return new Promise(async (resolve, reject) => {
            try {
               
                whereObj['hawb'] = req;
                let operationalData: any = await this.operationalDataRepository.get(whereObj);
                if(operationalData.length > 0 ){
                    statusObj['ship_tracking_num'] = req
                    statusObj['shipment_status'] = 'Delivered'
                    let statusData: any = await this.iMShipmentAnalyticsRepository.getStatus(statusObj);
                    if(statusData.length > 0){
                        response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "NoSubmit"), operationalData)
                        return resolve(response)
                    }else{
                        response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Submit"), operationalData)
                        return resolve(response)
                    }
                    
 
                }else{
                    statusObj['ship_tracking_num'] = req
                    statusObj['shipment_status'] = 'Delivered'
                    let operationalData1: any;
                    let statusData: any = await this.iMShipmentAnalyticsRepository.getStatus(statusObj);
                    if(statusData.length > 0){
                        response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "NoSubmit"),operationalData1)
                        return resolve(response)
                    }
                    whereObj1['ship_tracking_num'] = req

                    let operationalData: any = await this.iMShipmentAnalyticsRepository.getHawb(whereObj1);
                    if(operationalData.length  > 0 ){
                        operationalData ={ "status": {
                            "code": "SUCCESS",
                            "message": "HAWB is there"
                        }}
                        return resolve(operationalData)
                    }else{
                        
                        operationalData ={ "status": {
                            "code": "FAILED",
                            "message": "HAWB is not there"
                        }}
                        return resolve(operationalData)
                    }
                }
                
            } catch (e) {
                reject(e)
            }
        })
    }

    async createOperationData(request: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                let createOperationalData: any = {}
                for(let req of request){
                     
                    let whereObj: any = {};
                    let obj: any = {};
                    
                    whereObj['hawb'] = req.hawb;
                    obj = {
                        'ship_id' : req.shipId,
                        'hawb' : req.hawb,	
                        'parent_id' : req.parentId,
                        'shipper_name' : req.shipperName,	
                        'gross_ontime' : req.grossOntime,	
                        'infull' : req.infull,
                        'rebookedby' : req.rebookedby,
                        'rebooked' : req.rebooked,
                        'cancelledby' : req.cancelledby,
                        'cancelled' : req.cancelled,
                        'damage' : req.damage,	
                        'temp_deviation' : req.tempDeviation,
                        'frozen' : req.	frozen,
                        'remark' : req.	remark,
                        'action' : req.	action,
                        'actiondate' : req.	actiondate,
                        'actionby' : req.actionby,
                        'standardized_action' : req.standardizedAction,
                        'otifrootcauses' : req.standardizedOtifrootcauses,	
                        'netontime'	: req.netontime,
                        'class' : req.class,
                        'lane' : req.lane,
                        'rebooking'	: req.rebooking,
                        'shipment_count' : req.shipmentCount,	
                        'damage_intact' : req.damageIntact,	
                        'coldchain'	: req.coldchain,
                        'nofreeze' : req.nofreeze,
                        'active_status'	: req.activeStatus,
                        'reporting' : req.reporting,	
                        'language' : req.language,	
                        'service_reportings' : req.serviceReportings,	
                        'followup_complaints' : req.followupComplaints,
                        'cost_saving' : req.costSaving,
                        'accuracy_document' : req.accuracyDocument,	
                        'pickup' : req.pickup,
                        'deviation_management' : req.deviationManagement,
                        'carbon_netural' : req.carbonNetural,
                        'carbon_positive' : req.carbonPositive,
                        'carbon_calculation' : req.carbonCalculation,
                        'reason_forbreach' : req.reasonForbreach,
                        'cost_avoidance' : req.costAvoidance,
                        'amount_avoidance' : req.amountAvoidance,
                        'reason_avoidance' : req.reasonAvoidance,
                        'cost_currencytype' : req.costCurrencytype
                    }
                    if(req.flag == "create" ){  
                        createOperationalData = await this.operationalDataRepository.create(obj);
                    }else{
                        createOperationalData = await this.operationalDataRepository.update(whereObj,obj);
                    }
                    
                }
                return resolve(createOperationalData)  

            } catch (e) {
                reject(e)
            }
        })
    }


    async getOtifRootCausesData(): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {

                let originCountries :any = await this.operationalDataRepository.getRootCauses(whereObj);
                return resolve(originCountries)
            } catch (e) {
                reject(e)
            }
        })
    }
}


