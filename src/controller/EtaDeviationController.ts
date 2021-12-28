import { Controller } from "./Controller";
import { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { Logger } from "../logger/Logger";
import { DI } from "../di/DIContainer";
import { FetchResponse } from "../response/APIResponses";
import { ResponseCode, ResponseStatus } from "../response/BaseResponse";
import { EtaDeviationService } from "../service/EtaDeviationService";
import { VerifyJwtTokenService } from "../service/VerifyJwtTokenService";



export class EtaDeviationController implements Controller {
    private logger: Logger = DI.get(Logger)
    private etaDeviationService: EtaDeviationService = DI.get(EtaDeviationService)
    private verifyJwtTokenService: VerifyJwtTokenService = DI.get(VerifyJwtTokenService)

    getRouter(): Router {
        const router = Router();


        router.get('/summary', async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let origin = req.param('origin');
                let accounts = req.param('accounts');
                let startDate = req.param('startDate');
                let endDate = req.param('endDate')
                if(origin === undefined || origin === ''){
                    origin = ''
                }   
                else{
                    origin = req.param('origin');
                }
                if(accounts === undefined  || accounts === ''){
                    accounts = ''
                }   
                else{
                    accounts = req.param('accounts');
                }
                if(startDate === undefined || startDate === ''){
                    startDate = ''
                }
                else{
                    startDate = req.param('startDate');
                }
                if(endDate === undefined|| endDate === ''){
                    endDate = ''
                }
                else{
                    endDate = req.param('endDate');
                }
                dataResult = await this.etaDeviationService.getEtaDeviationSummary(origin,accounts,startDate,endDate)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/details', async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let destination = req.param('destination');
                let origin  = req.param('origin')
                dataResult = await this.etaDeviationService.getEtaDeviationDetails(destination,origin)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });
        router.get('/originCodes',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                
                dataResult = await this.etaDeviationService.getOriginCodes()
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/etaOriginCodes',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                
                dataResult = await this.etaDeviationService.getEtaOriginCodes()
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/destinationCodes',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                
                dataResult = await this.etaDeviationService.getDestinationCodes()
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/EtaAllAccounts',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                dataResult = await this.etaDeviationService.getEtaAllAccounts()
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                console.log("RESPONSE", JSON.stringify(response))
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });
        return router;
    }
}