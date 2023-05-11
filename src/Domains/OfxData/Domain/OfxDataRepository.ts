import { OfxDataTransactions } from "./OfxDataTransactions";

export interface OfXDataRepository {
    dataParserAndConvert(data: OfxDataTransactions): Promise<Object>
}  