export interface FinanceDataParams {
    amount: string
    date: string
    type: string // transform into an enum
}

abstract class FinanceData {
    constructor(protected params: FinanceDataParams) {}

    
}