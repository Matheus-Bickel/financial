import { OfxDataTransaction } from './OfxDataTransaction'

export interface OfXDataRepository {
    dataParserAndConvert(data: OfxDataTransaction): Promise<Object>
}  