import { DomainsEnum } from "../../Domains/DomainsEnum";

export interface BaseController {
    index <T>(data: T, group: DomainsEnum, params?: T): Promise<T>
}