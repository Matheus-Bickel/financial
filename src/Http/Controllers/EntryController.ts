import { BaseController } from "./BaseController";

export class EntryController implements BaseController {
    constructor(){}

    index<T>(data: T, params?: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
}