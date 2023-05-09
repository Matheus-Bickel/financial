export interface OfxData {
    type: string;
    date: string;
    amount: string;
    memo: string;
    payeeName?: string;
}

export abstract class OfxDataTransactions {
    constructor(protected data: OfxData[]) {}

    getData(data: OfxData[]): OfxData[] {
        return this.data
    }
}