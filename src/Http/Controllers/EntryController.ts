import { BaseController } from "./BaseController";

export class EntryController implements BaseController {
    constructor(){}

    async index<T>(data: T, params?: T): Promise<T> {
        return data
    }
}