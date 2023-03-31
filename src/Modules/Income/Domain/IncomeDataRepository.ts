import { Request } from 'express';
import { incomeData } from "./IncomeData";

export interface IncomeDataRepository {
    index(req: Request): Promise<incomeData[]>
    save(req: Request): Promise<incomeData[]>
    update(req: Request): Promise<incomeData[]>
    destroy(req: Request): Promise<void>
}