import { BaseService } from "./BaseService";
import { DI } from '../di/DIContainer';
import { UsersRepository } from "../data/repository/UsersRepository"
import * as jwt from 'jsonwebtoken';
import { AppUsers } from "../data/entity/AppUsers";
let tokenList: any = {};
export class AuthService implements BaseService {
    private usersRepository: UsersRepository;
    constructor() {
        this.usersRepository = DI.get(UsersRepository);

    }

    async login(email: any, pass: any) {
        let result = new Promise(async (resolve, reject) => {
            let user:AppUsers[] = await this.usersRepository.get({ "EMAIL_ID": email, "PASSWORD": pass });
            if (user.length > 0) {
                let userResponse = {
                    email: user[0]["EMAIL_ID"],
                    userType: user[0]["USER_TYPE"],
                    userId: user[0]["USER_ID"],
                    userOrg: user[0]["USER_ORG"],
                    userRole: user[0]["USER_ROLE"]
                }
                let key: any = process.env.KEY;

                let token: any = jwt.sign({ userResponse }, key, {
                    expiresIn: 86400
                });

                resolve({ user: userResponse, accessToken: token });
            } else {
                resolve(undefined);
            }
        });
        return result
    }

}