import { injectable } from 'tsyringe';

import { OFXParser } from 'node-ofx-parser';
import { OfXDataRepository } from "../Domain/OfxDataRepository";

import fs from 'fs';
@injectable()
export class OfxDataParserRepository implements OfXDataRepository {
    private path: string
    
    async dataParserAndConvert(): Promise<Object> {
        this.path = 'mocks/Ofx/Extrato-Conta-Corrente-310320232143.ofx'
    
        const file = fs.readFileSync(this.path, 'utf8')
        
        return await new OFXParser().parse(file)
    }
}