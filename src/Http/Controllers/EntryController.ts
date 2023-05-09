import { DomainsEnum } from "../../Domains/DomainsEnum";
import { BaseController } from "./BaseController";

export class EntryController implements BaseController {
    constructor(){}

    async index<T>(data: T, group: DomainsEnum, params?: T): Promise<any> {
        switch(group) {
            case DomainsEnum.OFX:
                
        }
    }
}