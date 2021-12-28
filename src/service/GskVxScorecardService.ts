import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { GskVxScorecardRepository } from "../data/repository/GskVxScorecardRepository"
import { QueryBuilder } from "../util/QueryBuilder";


export class GskVxScorecardService {
    private logger: Logger;
    private gskVxScorecardRepository: GskVxScorecardRepository;
    private queryBuilder: QueryBuilder;
    constructor() {
        this.logger = DI.get(Logger);
        this.gskVxScorecardRepository = DI.get(GskVxScorecardRepository);
        this.queryBuilder = DI.get(QueryBuilder);
    }

    async getScorecardsData(originCountry?: any, monthNumber?: any, year?: any,sort?: any, colFilters?: any, colSearch?: any,): Promise<any> {
        let whereObj: any = {};
        let totalRecordswhereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let sortArrayOfArrays: any = [];
                let colFilterObj: any;
                let obj: any = {};
                let finalObj: any = {};
                let totalGskRecords: any;
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
                let scorecardData: any = await this.gskVxScorecardRepository.get(whereObj, sortArrayOfArrays);
                let totalRecords: any = await this.gskVxScorecardRepository.getAll()
                if (scorecardData.length > 0) {
                    totalGskRecords = scorecardData.length;
                    let totalShipments = scorecardData.map((totalShipment: { shipments: any; }) => totalShipment.shipments).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalShipments'] = totalShipments
                    let totalRebookingDhl = scorecardData.map((totalRebookingDhl: { rebookingdhl: any; }) => totalRebookingDhl.rebookingdhl).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalRebookingDhl'] = totalRebookingDhl
                    let totalRebookingGsk = scorecardData.map((totalRebookingGsk: { rebookinggsk: any; }) => totalRebookingGsk.rebookinggsk).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalRebookingGsk'] = totalRebookingGsk
                    let totalReporting = scorecardData.map((totalReporting: { reporting: any; }) => totalReporting.reporting).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalReporting'] = (totalReporting / scorecardData.length).toFixed(2)
                    let avgLanguage = scorecardData.map((avgLanguage: { language: any; }) => avgLanguage.language).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgLanguage'] = (avgLanguage / scorecardData.length).toFixed(2)
                    let avgComplaints = scorecardData.map((avgComplaints: { complaints: any; }) => avgComplaints.complaints).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgComplaints'] = (avgComplaints / scorecardData.length).toFixed(2)
                    let avgAccuracyDocument = scorecardData.map((avgAccuracyDocument: { accuracy_document: any; }) => avgAccuracyDocument.accuracy_document).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgAccuracyDocument'] = (avgAccuracyDocument / scorecardData.length).toFixed(2)
                    let avgGrassOntime = scorecardData.map((avgGrassOntime: { grass_ontime: any; }) => avgGrassOntime.grass_ontime).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgGrassOntime'] = (avgGrassOntime / scorecardData.length).toFixed(2)
                    let avgNetOntime = scorecardData.map((avgNetOntime: { netontime: any; }) => avgNetOntime.netontime).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgNetOntime'] = (avgNetOntime / scorecardData.length).toFixed(2)
                    let avgInFull = scorecardData.map((avgInFull: { infull: any; }) => avgInFull.infull).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgInFull'] = (avgInFull / scorecardData.length).toFixed(2)
                    let avgDamage = scorecardData.map((avgDamage: { damage: any; }) => avgDamage.damage).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgDamage'] = (avgDamage / scorecardData.length).toFixed(2)
                    let avgColdChain = scorecardData.map((avgColdChain: { coldchain: any; }) => avgColdChain.coldchain).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgColdChain'] = (avgColdChain / scorecardData.length).toFixed(2)
                    let avgNoFreeze = scorecardData.map((avgNoFreeze: { nofreeze: any; }) => avgNoFreeze.nofreeze).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgNoFreeze'] = (avgNoFreeze / scorecardData.length).toFixed(2)
                    let avgPickUp = scorecardData.map((avgPickUp: { pickup: any; }) => avgPickUp.pickup).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgPickUp'] = (avgPickUp / scorecardData.length).toFixed(2)
                    let avgDeviationManagement = scorecardData.map((avgDeviationManagement: { deviation_management: any; }) => avgDeviationManagement.deviation_management).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['avgDeviationManagement'] = (avgDeviationManagement / scorecardData.length).toFixed(2)
                }
                return resolve({ "result": scorecardData, "totals": obj, "TotalCount": totalGskRecords })
            } catch (e) {
                reject(e)
            }
        })
    }
}