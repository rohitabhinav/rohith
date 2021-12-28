import { Controller } from "./Controller";
import { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { Logger } from "../logger/Logger";
import { DI } from "../di/DIContainer";
import { FetchResponse } from "../response/APIResponses";
import { ResponseCode, ResponseStatus } from "../response/BaseResponse";
import { OperationalDataService } from "../service/OperationalDataService";
import { AuthService } from "../service/AuthService";
import { AuthController } from "./AuthController";
import { VerifyJwtTokenService } from "../service/VerifyJwtTokenService";

export class OperationalDataController implements Controller {
    private logger: Logger = DI.get(Logger)
    private operationalDataService: OperationalDataService = DI.get(OperationalDataService)
    private authService: AuthService = DI.get(AuthService)
    private verifyJwtTokenService: VerifyJwtTokenService = DI.get(VerifyJwtTokenService)

    getRouter(): Router {
        const router = Router();

        router.get('/getTransactions/:arg1', async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let hawb = req.params.arg1
                dataResult = await this.operationalDataService.getOperationData(hawb,res)
                res.json(dataResult);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.post('/enrichTransaction', async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let createResult: any;
                this.logger.log("req.body",req.body)
   
                createResult = await this.operationalDataService.createOperationData(req.body)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Created Successfully"), createResult)

                res.json(response);

            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/getOtifRootCauses', async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;

                dataResult = await this.operationalDataService.getOtifRootCausesData()
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