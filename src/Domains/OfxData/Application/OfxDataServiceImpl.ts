import { inject, injectable } from "tsyringe";

import { OfxDataRepositoryEnum } from "../Domain/OfxDataRepositoryEnum";
import { OfxDataService } from "../Domain/OfxDataService";
import { OfxData } from "../Domain/OfxDataTransactions";
import { EntryDataToOfxDataAdapter } from "../Infra/Adapters/EntryDataToOfxDataAdapter";
import { OfxDataParserRepository } from "../Infra/OfxDataParserRepository";
@injectable()
export class OfxDataServiceImpl implements OfxDataService {
    constructor(@inject(OfxDataRepositoryEnum.OFX_DATA_REPOSITORY) private repository: OfxDataParserRepository){}
    
    async parseAndFormat(data: OfxData[]): Promise<any> {
        
        return await this.repository.dataParserAndConvert()
    }

    async getAdaptedData(data: OfxData[]): Promise<OfxData[]> {
        return await new EntryDataToOfxDataAdapter(data).adaptToOfxData()
    }
}