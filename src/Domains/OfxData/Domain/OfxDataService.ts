import { OfxData } from "./OfxDataTransactions";

export interface OfxDataService {
    parseAndFormat(data: OfxData[]): Promise<Object>
}