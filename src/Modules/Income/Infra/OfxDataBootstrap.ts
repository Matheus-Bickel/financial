import { container } from "tsyringe";
import { Bootstrap } from "../../../Common/Bootstrap/Bootstrap";
import { OfxDataParserRepository } from "../../OfxData/Infra/OfxDataParserRepository";
import { IncomeDataRepositoryEnum } from "../Domain/IncomeDataRepositoryEnum";

export class OfxDataBootsrap implements Bootstrap {
    async handler(): Promise<void> {
        container.register(IncomeDataRepositoryEnum.OFX_DATA_REPOSITORY, OfxDataParserRepository)
    }
}