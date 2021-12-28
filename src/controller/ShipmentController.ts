import { Controller } from "./Controller";
import { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { Logger } from "../logger/Logger";
import { DI } from "../di/DIContainer";
import { ShipmentService } from "../service/ShipmentService";
import { AuthService } from "../service/AuthService";
import { AuthController } from "./AuthController";
import { FetchResponse } from "../response/APIResponses";
import { ResponseCode, ResponseStatus } from "../response/BaseResponse";

export class ShipmentController implements Controller {
    private logger: Logger = DI.get(Logger)
    private ShipmentService: ShipmentService = DI.get(ShipmentService)
    private authService: AuthService = DI.get(AuthService)
    getRouter(): Router {
        const router = Router();



        router.post('/excel', async (req, res) => {
            try {

                let response = await this.ShipmentService.readEXcelFile()

                res.json(response)


            } catch (error) {
                let response: any = { status: { code: 'FAILURE', message: "Error While Uploading The File" } }
                res.json(response);

            }
        });


        return router;
    }
}