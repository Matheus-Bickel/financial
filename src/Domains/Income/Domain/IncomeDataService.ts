import { incomeData } from "./IncomeData";

export interface IncomeDataService {
    get(): Promise<incomeData[]>
    getById(id: number): Promise<incomeData[]>
    create(data: incomeData[]): Promise<incomeData[]>
    update(data: incomeData[]): Promise<incomeData[]>
    delete(id: number): Promise<void>
}