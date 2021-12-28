import { ImMessages } from "../entity/init-models";
import { BaseRepository } from "./BaseRepositort";

export class ImMessagesRepository extends BaseRepository {
    getModel(): any {
        return ImMessages;
    }
}