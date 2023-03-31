export interface OfxDataTransactionParams {
    type: string;
    date: string;
    amount: string;
    memo: string;
    payeeName?: string;
}

export abstract class OfxDataTransaction {
    constructor(protected params: OfxDataTransactionParams) {}

    getType(): string {
        return this.params.type
    }

    getDate(): string {
        return this.params.date
    }

    getAmount(): string {
        return this.params.amount
    }

    getMemo(): string {
        return this.params.memo
    }

    getPayeeName(): string | undefined {
        return this.params.payeeName ?? null
    }
}