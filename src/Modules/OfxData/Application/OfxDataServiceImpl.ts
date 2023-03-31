import { OfxDataService } from "../Domain/OfxDataService";
import { OfxDataTransaction } from "../Domain/OfxDataTransaction";

export class OfxDataServiceImpl implements OfxDataService {
    parseAndFormat(data: OfxDataTransaction): Promise<Object> {
        throw new Error("Method not implemented.");
    }

}