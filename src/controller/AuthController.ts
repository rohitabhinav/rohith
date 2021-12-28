import { Controller } from "./Controller";
import { Router, Request, Response } from "express";
import { DI } from '../di/DIContainer';
import { Logger } from "../logger/Logger";
import { NextFunction } from "connect";
import { AuthService } from "../service/AuthService"
import { UsersRepository } from "../data/repository/UsersRepository";
import { AppUsers } from "../data/entity/AppUsers";

export class AuthController implements Controller {
    private logger: Logger = DI.get(Logger);
    private authService: AuthService;
    private userRepository: UsersRepository;

    constructor() {
        this.logger = DI.get(Logger);
        this.authService = DI.get(AuthService);
        this.userRepository = DI.get(UsersRepository);
    }

    getRouter(): Router {
        let router = Router();
        router.get('/users', async (req: Request, res: Response, next: NextFunction) => {
            try {

                let user: any = await this.authService. login(req.param('email'), req.param('appkey'));
                this.logger.log('user',user)
                if (user != undefined && user != null)
                    res.json({ status: "SUCCESS", data: user });
                else
                    res.json({ status: "INVALID USERNAME/PASSWORD" });

            } catch (error) {
                next(error);
            }
        });

        router.get('/usersList', async (req: Request, res: Response, next: NextFunction) => {
            try {
                const userOrg = req.param('userOrg');
                let usersList;
                if (userOrg !== undefined && userOrg !== null && userOrg !== "null") {
                    usersList = await this.userRepository.getUsersList({ USER_ORG: userOrg });
                } else {
                    usersList = await this.userRepository.getUsersList({});
                }

                res.json({ status: "SUCCESS", result: usersList });
            } catch (error) {
                next(error);
            }
        });

        router.post('/create', async (req: Request, res: Response, next: NextFunction) => {
            try {
                let usersList = req.body.users;
                for (let user of usersList) {
                    const userId = user.userId;
                    const userType = user.userType.toUpperCase();
                    const emailId = user.emailId;
                    const userRole = user.userRole;
                    const plainPwd = "Trans$2021";
                    const userOrg = user.userOrg;
                    let userByEmail = await this.userRepository.get({ EMAIL_ID: emailId });
                    let userByUserId = await this.userRepository.get({ USER_ID: userId });
                    if (userByEmail.length > 0) {
                        res.json({
                            status: "FAILURE",
                            message: "User already exists with EmailId:" + emailId
                        })
                    }
                    if (userByUserId.length > 0) {
                        res.json({
                            status: "FAILURE",
                            message: "User already exists with UserId:" + userId
                        })
                    }
                    let createdId = await this.userRepository.create({
                        EMAIL_ID: emailId,
                        PASSWORD: plainPwd,
                        USER_TYPE: userType,
                        USER_ID: userId,
                        USER_ROLE: userRole,
                        USER_ORG: userOrg
                    })
                }

                res.json({
                    status: "Success",
                    message: "User successfully created"
                })
            } catch (error) {
                next(error);
            }
        });


        router.put('/update', async (req: Request, res: Response, next: NextFunction) => {
            try {
                let user = req.body;
                const emailId = user.emailId;
                const newPwd = user.newPwd;
                const confirmPwd = user.confirmPwd;
                if (newPwd !== confirmPwd) {
                    res.json({
                        status: "FAILURE",
                        message: "New Password and Confirm Password should Match"
                    })
                }

                let userObj: AppUsers[] = await this.userRepository.get({ EMAIL_ID: emailId });
                if (userObj.length == 0) {
                    res.json({
                        status: "FAILURE",
                        message: "No User found with the mentioned Emailid"
                    })
                }

                let updatedid = await this.userRepository.update({ EMAIL_ID: emailId }, { PASSWORD: newPwd });

                res.json({
                    status: "Success",
                    message: "Password Changed successfully"
                })
            } catch (error) {
                next(error);
            }
        });

        router.delete('/delete', async (req: Request, res: Response, next: NextFunction) => {
            try {
                const emailId = req.param('emailId');

                let userObj: AppUsers[] = await this.userRepository.get({ EMAIL_ID: emailId });
                if (userObj.length == 0) {
                    res.json({
                        status: "FAILURE",
                        message: "No User found with the mentioned Emailid"
                    })
                }

                let deletedId = await this.userRepository.delete({ EMAIL_ID: emailId });

                res.json({
                    status: "Success",
                    message: "User deleted successfully"
                })
            } catch (error) {
                next(error);
            }
        });

        return router;
    }
}

