export interface incomeDataParams {
    id: number
    date: Date,
    description: string
    source: string,
    amount: number
}

export abstract class incomeData {
    constructor(protected params: incomeDataParams) {}

    getId(): number {
        return this.params.id
    }

    getDate(): Date {
        return this.params.date
    }

    getDescription(): string {
        return this.params.description
    }

    getSource(): string {
        return this.params.source
    }

    getAmount(): number {
        return this.params.amount
    }
}