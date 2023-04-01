import { OFXParser } from 'node-ofx-parser';

import fs from 'fs';
import { OfXDataRepository } from "../Domain/OfxDataRepository";
import { OfxDataTransaction } from "../Domain/OfxDataTransaction";

export class OfxDataParserRepository implements OfXDataRepository {
    dataParserAndConvert(data: OfxDataTransaction): Promise<Object> {
        const parser = new OFXParser()
        // precisa salvar o arquivo em algum lugar pra depois passar o path aqui.
        const file =  fs.readFileSync('path', 'utf8')

        return parser.parse(file)
    }
}