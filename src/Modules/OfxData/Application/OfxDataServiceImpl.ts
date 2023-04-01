import { inject, injectable } from "tsyringe";
import { OfxDataRepositoryEnum } from "../Domain/OfxDataRepositoryEnum";
import { OfxDataService } from "../Domain/OfxDataService";
import { OfxDataTransaction } from "../Domain/OfxDataTransaction";
import { OfxDataParserRepository } from "../Infra/OfxDataParserRepository";
@injectable()
export class OfxDataServiceImpl implements OfxDataService {
    constructor(@inject(OfxDataRepositoryEnum.OFX_DATA_REPOSITORY) private repository: OfxDataParserRepository){}
    
    async parseAndFormat(data: OfxDataTransaction): Promise<Object> {
        return await this.repository.dataParserAndConvert()
    }
}