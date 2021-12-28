import { Controller } from "./Controller";
import { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { Logger } from "../logger/Logger";
import { DI } from "../di/DIContainer";
import { FetchResponse } from "../response/APIResponses";
import { ResponseCode, ResponseStatus } from "../response/BaseResponse";
import { CronService } from "../service/CronService";

export class CronController implements Controller {
    private logger: Logger = DI.get(Logger)
    private cronService: CronService = DI.get(CronService)

    getRouter(): Router {
        const router = Router();

        router.get('/gskcron', async (req: Request, res: Response, next: NextFunction) => {
            try {

                let dataResult: any;
                dataResult = await this.cronService.gskCron()
                res.json(dataResult);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/aggregationcron', async (req: Request, res: Response, next: NextFunction) => {
            try {

                let dataResult: any;
                dataResult = await this.cronService.aggregationCron()
                res.json(dataResult);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });
        return router;
    }
}