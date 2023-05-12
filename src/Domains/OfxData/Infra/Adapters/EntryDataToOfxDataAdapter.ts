import { OfxData, OfxDataTransactions } from "../../Domain/OfxDataTransactions";

export class EntryDataToOfxDataAdapter extends OfxDataTransactions {
    constructor(protected data: OfxData[]){
        super(data)
    }

    async adaptToOfxData(): Promise<OfxData[]> {
        return this.data
    }
}