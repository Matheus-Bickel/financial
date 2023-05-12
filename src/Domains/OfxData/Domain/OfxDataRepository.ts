import { OfxData } from "./OfxDataTransactions";

export interface OfXDataRepository {
    dataParserAndConvert(data: OfxData[]): Promise<Object>
}  