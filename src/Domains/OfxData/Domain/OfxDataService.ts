import { OfxDataTransactions } from "./OfxDataTransactions";

export interface OfxDataService {
    parseAndFormat(data: OfxDataTransactions): Promise<Object>
}