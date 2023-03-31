import { OfxDataTransaction } from "./OfxDataTransaction";

export interface OfxDataService {
    parseAndFormat(data: OfxDataTransaction): Promise<Object>
}