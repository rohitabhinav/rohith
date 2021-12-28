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


export class ShipmentCostAnalyticsController implements Controller {
    private logger: Logger = DI.get(Logger)
    private verifyJwtTokenService: VerifyJwtTokenService = DI.get(VerifyJwtTokenService)
    private imShipmentAnalyticsCostService: ImShipmentAnalyticsCostService = DI.get(ImShipmentAnalyticsCostService)

    private authService: AuthService = DI.get(AuthService)
    getRouter(): Router {
        const router = Router();

        router.get('/tradelanedetails',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let originCode : any = req.param('originCode')
                let destinationCode:any = req.param('destinationCode')
                let startDate = req.param('startDate');
                let endDate = req.param('endDate')
                let accounts = req.param('accounts');
                let forwarder = req.param('forwarder')
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
                if(accounts === undefined || accounts === ''){
                    accounts = ''
                }
                else{
                    accounts = req.param('accounts');
                }
                if(forwarder === undefined || forwarder === ''){
                    forwarder = ''
                }
                else{
                    forwarder = req.param('forwarder');
                }
                dataResult = await this.imShipmentAnalyticsCostService.getShipmentCostAnalysis(originCode,destinationCode,startDate,endDate,accounts,forwarder)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/tradelaneSummary',this.verifyJwtTokenService.verifyToken ,async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let origin:any  = req.param('origin')
                let destination:any  = req.param('destination')
                let accounts = req.param('accounts');
                let forwarder = req.param('forwarder')
                let startDate = req.param('startDate');
                let endDate = req.param('endDate')
                if(origin === undefined || origin === ''){
                    origin = ''
                }
                else{
                    origin  = req.param('origin')
                }
                if(destination === undefined || destination === ''){
                    destination = ''
                }
                else{
                    destination  = req.param('destination')
                }
                if(accounts === undefined || accounts === ''){
                    accounts = ''
                }
                else{
                    accounts = req.param('accounts');
                }
                if(forwarder === undefined || forwarder === ''){
                    forwarder = ''
                }
                else{
                    forwarder = req.param('forwarder');
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
                dataResult = await this.imShipmentAnalyticsCostService.getAggShipmentCostAnalysis(origin,destination,startDate,endDate,accounts,forwarder)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/shipmentcostmonth',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                dataResult = await this.imShipmentAnalyticsCostService.getAggShipmentCostAnalysisGraph()
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/allAccounts',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                dataResult = await this.imShipmentAnalyticsCostService.getAllAccounts()
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/allForwarders',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                dataResult = await this.imShipmentAnalyticsCostService.getAllForwarders()
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