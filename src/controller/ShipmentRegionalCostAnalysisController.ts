import { Controller } from "./Controller";
import { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { Logger } from "../logger/Logger";
import { DI } from "../di/DIContainer";
import { GskVxScorecardService } from "../service/GskVxScorecardService";
import { OTPerformanceService } from "../service/OTPerformanceService";
import { OtifRootCausesService } from "../service/OtifRootCausesService";
import { LaneoverviewService } from "../service/LaneoverviewService";
import { YTDShipmentsAndWeightService } from "../service/YTDShipmentsAndWeightService";
import { AuthService } from "../service/AuthService";
import { AuthController } from "./AuthController";
import { FetchResponse } from "../response/APIResponses";
import { ResponseCode, ResponseStatus } from "../response/BaseResponse";
import { AirLinePerformanceService } from "../service/AirLinePerformanceService";
import { ImShipmentAnalyticsCostService } from "../service/ImShipmentAnalyticsCostService";
import { VerifyJwtTokenService } from "../service/VerifyJwtTokenService";


export class ShipmentRegionalCostAnalysisController implements Controller {
    private logger: Logger = DI.get(Logger)
    private verifyJwtTokenService: VerifyJwtTokenService = DI.get(VerifyJwtTokenService)
    private imShipmentAnalyticsCostService: ImShipmentAnalyticsCostService = DI.get(ImShipmentAnalyticsCostService)

    getRouter(): Router {
        const router = Router();

        router.get('/regionegcostmonth',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let regions:any;
                let originRegion = req.param('originRegion');
                let startDate = req.param('startDate');
                let endDate = req.param('endDate')
                let flag = req.param('flag');
                if(originRegion === undefined || originRegion === ''){
                    originRegion = ''
                }
                else{
                    originRegion = req.param('originRegion');
                }
                if(startDate === undefined || originRegion === ''){
                    startDate = ''
                }
                else{
                    startDate = req.param('startDate');
                }
                if(endDate === undefined || originRegion === ''){
                    endDate = ''
                }
                else{
                    endDate = req.param('endDate');
                }
                if(flag === undefined || flag === ''){
                    flag = ''
                }
                else{
                    flag = req.param('flag');
                }
                dataResult = await this.imShipmentAnalyticsCostService.getRegionalCostAnalysis(originRegion,startDate,endDate,flag)
            
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/regionegcost',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let originRegion = req.param('originRegion');
                let startDate = req.param('startDate');
                let endDate = req.param('endDate')
                let flag = req.param('flag');
                if(originRegion === undefined || originRegion === ''){
                    originRegion = ''
                }
                else{
                    originRegion = req.param('originRegion');
                }
                if(startDate === undefined || startDate === ''){
                    startDate = ''
                }
                else{
                    startDate = req.param('startDate');
                }
                if(endDate === undefined || endDate === ''){
                    endDate = ''
                }
                else{
                    endDate = req.param('endDate');
                }
                if(flag === undefined || flag === ''){
                    flag = ''
                }
                else{
                    flag = req.param('flag');
                }
                dataResult = await this.imShipmentAnalyticsCostService.getRegionalCostAnalysisGrp(originRegion,startDate,endDate,flag)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });
        router.get('/tradelanedetails',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let region : any = req.param('region')
                let origin :any = req.param('origin')
                let startDate = req.param('startDate');
                let endDate = req.param('endDate');
                if(startDate === undefined || startDate === ''){
                    startDate = ''
                }
                else{
                    startDate = req.param('startDate');
                }
                if(endDate === undefined || endDate === ''){
                    endDate = ''
                }
                else{
                    endDate = req.param('endDate');
                }
                dataResult = await this.imShipmentAnalyticsCostService.getRegionalCostAnalysisDetailView(origin,region,startDate,endDate)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/allRegions',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                dataResult = await this.imShipmentAnalyticsCostService.getAllRegions()
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/allRegionsMap',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                dataResult = await this.imShipmentAnalyticsCostService.getAllRegionsMap()
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        return router;
    }
}