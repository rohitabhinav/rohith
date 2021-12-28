import { Controller } from "./Controller";
import { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { Logger } from "../logger/Logger";
import { DI } from "../di/DIContainer";
import { FetchResponse } from "../response/APIResponses";
import { ResponseCode, ResponseStatus } from "../response/BaseResponse";
import { ImShipmentAnalyticsService } from "../service/ImShipmentAnalyticsService";
import { ImAnalyticsPersistence } from "../service/ImAnalyticsPersistence";
import { VerifyJwtTokenService } from "../service/VerifyJwtTokenService";

export class IMShipmentAnalyticsController implements Controller {
    private logger: Logger = DI.get(Logger)
    private imShipmentAnalyticsService: ImShipmentAnalyticsService = DI.get(ImShipmentAnalyticsService)
    private imAnalyticsPersistence: ImAnalyticsPersistence = DI.get(ImAnalyticsPersistence)
    private verifyJwtTokenService: VerifyJwtTokenService = DI.get(VerifyJwtTokenService)
    
    getRouter(): Router {
        const router = Router();




        router.get('/getcode',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;

                dataResult = await this.imShipmentAnalyticsService.spDimension(req.query.code)

                res.json(dataResult);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });
        return router;
    }
}