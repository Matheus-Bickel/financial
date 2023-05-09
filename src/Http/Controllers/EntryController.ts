import { RepositoriesEnum } from "../../Common/Bootstrap/RepositoriesFactory/RepositoriesEnum";
import { RepositoriesFactoryImpl } from "../../Common/Bootstrap/RepositoriesFactory/RepositoriesFactoryImpl";
import { DomainsEnum } from "../../Domains/DomainsEnum";
import { OfxDataServiceImpl } from "../../Domains/OfxData/Application/OfxDataServiceImpl";
import { BaseController } from "./BaseController";

export class EntryController implements BaseController {
    constructor(){}

    async index<T>(data: T, group: DomainsEnum, params?: T): Promise<any> {
        // const repository = RepositoriesFactoryImpl.from().handler(RepositoriesEnum.REPOSITORY_OFX)
        const repository = new RepositoriesFactoryImpl().handler(RepositoriesEnum.REPOSITORY_OFX)

        switch(group) {
            case DomainsEnum.OFX:
                return new OfxDataServiceImpl(repository)
        }
    }
}