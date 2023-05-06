import { BaseController } from "./BaseController";

export class EntryController implements BaseController {
    constructor(){}

    async index<T>(data: T, params?: T): Promise<T> {
        console.log('teste 2')
        return data
    }
}