import { DomainsEnum } from "../../../Domains/DomainsEnum";
import { OfxDataParserRepository } from "../../../Domains/OfxData/Infra/OfxDataParserRepository";
import { RepositoriesFactoryInterface } from "./RepositoriesFactoryInterface";

export class RepositoriesFactoryImpl implements RepositoriesFactoryInterface {
    handler(repository: DomainsEnum): any {
        switch(repository) {
            case repository = DomainsEnum.OFX:
                return new OfxDataParserRepository()
        }
    }

    static from() {
        return new RepositoriesFactoryImpl()
    }
}