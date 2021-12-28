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
import { ImShipmentAnalyticsService } from "../service/ImShipmentAnalyticsService";
import { ShipmentService } from "../service/ShipmentService";
import { RebookingAndCancellationService } from "../service/RebookingAndCancellationService";
import { VerifyJwtTokenService } from "../service/VerifyJwtTokenService";



export class AnalyticsController implements Controller {
    private logger: Logger = DI.get(Logger)
    private GskVxScorecardService: GskVxScorecardService = DI.get(GskVxScorecardService)
    private verifyJwtTokenService: VerifyJwtTokenService = DI.get(VerifyJwtTokenService)
    private OTPerformanceService: OTPerformanceService = DI.get(OTPerformanceService)
    private OtifRootCausesService: OtifRootCausesService = DI.get(OtifRootCausesService)
    private LaneoverviewService: LaneoverviewService = DI.get(LaneoverviewService)
    private airLinePerformanceService: AirLinePerformanceService = DI.get(AirLinePerformanceService)
    private yTDShipmentsAndWeightService: YTDShipmentsAndWeightService = DI.get(YTDShipmentsAndWeightService)
    private imShipmentAnalyticsService:ImShipmentAnalyticsService = DI.get(ImShipmentAnalyticsService)
    private ShipmentService: ShipmentService = DI.get(ShipmentService)
    private rebookingAndCancellationService: RebookingAndCancellationService = DI.get(RebookingAndCancellationService)

    private imShipmentAnalyticsCostService: ImShipmentAnalyticsCostService = DI.get(ImShipmentAnalyticsCostService)

    private authService: AuthService = DI.get(AuthService)
    getRouter(): Router {
        const router = Router();

        router.get('/kpiData',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let sortObject = req.param('sort');
                let colSearch = req.param('colSearch');
                (colSearch != undefined && colSearch != null) ? colSearch = JSON.parse(req.param('colSearch')) : '';
                let originCountry = req.param('origin_country');
                let month = req.param('month');
                let year = req.param('year')
                if (originCountry === undefined) {
                    originCountry = ''
                }
                else {
                    originCountry = req.param('origin_country');
                }
                if (month === undefined) {
                    month = ''
                } else {
                    month = req.param('month');
                }
                if (year === undefined) {
                    year = ''
                } else {
                    year = req.param('year');
                }                   
                dataResult = await this.GskVxScorecardService.getScorecardsData(originCountry, month, year,sortObject, colSearch)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/otperformance',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let month = req.param('month');
                let originCountry = req.param('origin_country');
                let year = req.param('year_number');
                if (originCountry === undefined) {
                    originCountry = ''
                }
                else {
                    originCountry = req.param('origin_country');
                }
                if (month === undefined) {
                    month = ''
                } else {
                    month = req.param('month');
                }
                if (year === undefined) {
                    year = ''
                }
                else {
                    year = req.param('year_number');
                }             
                dataResult = await this.OTPerformanceService.getOtPerformance(originCountry, month, year)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/otifrootcauses',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let originCountry = req.param('origin_country');
                let year = req.param('year_number');
                let month = req.param('month');
                if (originCountry === undefined) {
                    originCountry = ''
                }
                else {
                    originCountry = req.param('origin_country');
                }
                if (month === undefined) {
                    month = ''
                } else {
                    month = req.param('month');
                }
                if (year === undefined) {
                    year = ''
                }
                else {
                    year = req.param('year_number');
                }                 
                dataResult = await this.OtifRootCausesService.getOtifRootCauses(originCountry, month, year)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/laneoverview',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let sortObject = req.param('sort');
                let colSearch = req.param('colSearch');
                (colSearch != undefined && colSearch != null) ? colSearch = JSON.parse(req.param('colSearch')) : '';
                let month = req.param('month');

                if (month === undefined) {
                    month = ''
                } else {
                    month = req.param('month');
                }              
                dataResult = await this.LaneoverviewService.getLaneoverview(month,sortObject, colSearch)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/shipmentsandweights',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let originCountry = req.param('origin_country');
                let month = req.param('month');
                let year = req.param('year_number')
                if (originCountry === undefined) {
                    originCountry = ''
                } else {
                    originCountry = req.param('origin_country');
                }
                if (month === undefined) {
                    month = ''
                } else {
                    month = req.param('month');
                }
                if (year === undefined) {
                    year = ''
                } else {
                    year = req.param('year_number');
                }                 
                dataResult = await this.yTDShipmentsAndWeightService.getYTDShipmentsAndWeight(originCountry, month, year)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/shipmentsandweightsByMonth',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let month = req.param('month');
                let year = req.param('year_number');
                let originCountry = req.param('origin_country')
                if (month === undefined || month === '') {
                    month = ''
                } else {
                    month = req.param('month');
                }
                if (year === undefined || year === '') {
                    year = ''
                } else {
                    year = req.param('year_number');
                }
                if (originCountry === undefined || originCountry === '') {
                    originCountry = ''
                } else {
                    originCountry = req.param('origin_country');
                }                
                dataResult = await this.yTDShipmentsAndWeightService.getShipmentsByMonthAndYr(month, year,originCountry)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/newshipmentsandweights',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let originCountry = req.param('origin_country');
                let month = req.param('month');
                let year = req.param('year_number')
                if (originCountry === undefined) {
                    originCountry = ''
                } else {
                    originCountry = req.param('origin_country');
                }
                if (month === undefined) {
                    month = ''
                } else {
                    month = req.param('month');
                }
                if (year === undefined) {
                    year = ''
                } else {
                    year = req.param('year_number');
                }                  
                dataResult = await this.yTDShipmentsAndWeightService.getAstroYTDShipmentsAndWeight(originCountry, month, year)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/newshipmentsandweightsByMonth',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let month = req.param('month');
                let year = req.param('year_number');
                let originCountry = req.param('origin_country')
                if (month === undefined || month === '') {
                    month = ''
                } else {
                    month = req.param('month');
                }
                if (year === undefined || year === '') {
                    year = ''
                } else {
                    year = req.param('year_number');
                }
                if (originCountry === undefined || originCountry === '') {
                    originCountry = ''
                } else {
                    originCountry = req.param('origin_country');
                }                
                dataResult = await this.yTDShipmentsAndWeightService.getAstroShipmentsByMonthAndYr(month, year,originCountry)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });
        router.get('/airlineperformance',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let sortObject = req.param('sort');
                let colSearch = req.param('colSearch');
                (colSearch != undefined && colSearch != null) ? colSearch = JSON.parse(req.param('colSearch')) : '';
                let originCountry = req.param('origin_country');
                let month = req.param('month');
                let year = req.param('year')
                if (originCountry === undefined) {
                    originCountry = ''
                }
                else {
                    originCountry = req.param('origin_country');
                }
                if (month === undefined) {
                    month = ''
                } else {
                    month = req.param('month');
                }
                if (year === undefined) {
                    year = ''
                } else {
                    year = req.param('year');
                }              
                dataResult = await this.airLinePerformanceService.getAirLinePerformanceData(originCountry, month, year,sortObject, colSearch)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/getOriginCountries', async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;

                dataResult = await this.imShipmentAnalyticsService.getOriginCountries()
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/getAstroOriginCountries', async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;

                dataResult = await this.imShipmentAnalyticsService.getAstroOriginCountries()
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.post('/excelUpload/:route',this.verifyJwtTokenService.verifyToken, async (req, res) => {
            try {

                let response: any;
                if (req.params.route === 'create') {
                    response = await this.ShipmentService.excelUpload(req.params.route, req.body, res)
                    res.json({ status: { code: 'SUCCESS', message: "Created Successfully" }, data: response });
                }
                else {
                    response = await this.ShipmentService.excelUpload(req.params.route, req, res)
                    res.json({ status: { code: 'SUCCESS' }, data: response });
                }


            } catch (error) {
                let response: any = { status: { code: 'FAILURE', message: "Error While Uploading The File" } }
                res.json(response);

            }
        });

        router.get('/rebookingAndCancellation',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let originCountry = req.param('origin_country');
                let month = req.param('month');
                let year = req.param('year')
                if (originCountry === undefined || originCountry === '') {
                    originCountry = ''
                }
                else {
                    originCountry = req.param('origin_country');
                }
                if (month === undefined || month === '') {
                    month = ''
                } else {
                    month = req.param('month');
                }
                if (year === undefined || year === '') {
                    year = ''
                } else {
                    year = req.param('year');
                }                
                dataResult = await this.rebookingAndCancellationService.getRebookingAndCancellationData(originCountry, month, year)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/logout', async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Session Logged Out"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        return router;
    }
}