import { initModels } from './data/entity/init-models';
import { DI } from "./di/DIContainer";
import { Logger } from "./logger/Logger";
import dotenv from 'dotenv';
import { DBConnection } from "./config/DBConnection";
import { ImAnalyticsPersistence_Gsk } from "./service/ImAnalyticsPersistence_Gsk";


dotenv.config();

export class TransReqConsume {
    private logger: Logger;
    private dbConnection: DBConnection;
    private imAnalyticsPersistence_Gsk:ImAnalyticsPersistence_Gsk;
   
    constructor(){
        this.logger = DI.get(Logger);
        this.dbConnection = DI.get(DBConnection);
        this.imAnalyticsPersistence_Gsk = DI.get(ImAnalyticsPersistence_Gsk);
       // this.initializeRepositories();
    } 
    initializeApplication(){
        initModels(this.dbConnection.connection);
        this.consumeMessage1()
    }

    // initializeRepositories() {
    //     initModels(DI.get<DBConnection>(DBConnection).connection);
    // }

 
    public consumeMessage1(){
        this.logger.log("Consume Message Service Started");
        //this.imAnalyticsPersistence.consumeCostAnalyticRequest();
        this.imAnalyticsPersistence_Gsk.consumeAnalyticRequest();
    }
}

const app = DI.get<TransReqConsume>(TransReqConsume);
app.initializeApplication();

