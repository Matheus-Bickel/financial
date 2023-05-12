import { RepositoriesFactoryImpl } from "../../Common/Bootstrap/RepositoriesFactory/RepositoriesFactoryImpl";
import { TesteType } from '../../Common/Types/EntryTypes';
import { DomainsEnum } from "../../Domains/DomainsEnum";
import { OfxDataServiceImpl } from "../../Domains/OfxData/Application/OfxDataServiceImpl";
import { BaseController } from "./BaseController";

export class EntryController implements BaseController {
    constructor(){}

    async index<T>(data: T, group: DomainsEnum, params?: T): Promise<any> {
        const repository = RepositoriesFactoryImpl.from().handler(group)

        type teste = TesteType<data>
        
        switch(group) {
            case DomainsEnum.OFX:
                return new OfxDataServiceImpl(repository)
        }
    }
}