import { container } from "tsyringe";
import { Bootstrap } from "../../../Common/Bootstrap/Bootstrap";
import { OfxDataRepositoryEnum } from "../Domain/OfxDataRepositoryEnum";
import { OfxDataParserRepository } from "./OfxDataParserRepository";

export class OfxDataBootsrap implements Bootstrap {
    async handler(): Promise<void> {
        container.register(OfxDataRepositoryEnum.OFX_DATA_REPOSITORY, OfxDataParserRepository)
    }
}