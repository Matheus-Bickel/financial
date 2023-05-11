import { injectable } from 'tsyringe';

import fs from 'fs';
import { OfXDataRepository } from "../Domain/OfxDataRepository";
import { OfxDataTransactions } from '../Domain/OfxDataTransactions';

const ofx = require('ofx');
@injectable()
export class OfxDataParserRepository implements OfXDataRepository {
    private path: string
    
    async dataParserAndConvert(data: OfxDataTransactions): Promise<any> {
        const parsedData = fs.readFile('mocks/Ofx/Extrato-Conta-Corrente-310320232143.ofx', 'utf8', function(err, ofxData) {
            if (err) throw err;

            const data = ofx.parse(ofxData)
            console.log(data, 'DATA')
            
            // Extract the header object
            const sonrsObject = data.OFX.BANKMSGSRSV1.STMTTRNRS;

            // Serialize the header object using JSON.stringify
            const serialized = JSON.stringify(sonrsObject)

            // `serializedHeader` is now a JSON string representation of the OFX header object
            console.log(serialized)
        });
    }
}