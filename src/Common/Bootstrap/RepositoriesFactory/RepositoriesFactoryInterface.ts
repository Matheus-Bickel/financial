import { DomainsEnum } from "../../../Domains/DomainsEnum";

export interface RepositoriesFactoryInterface {
    handler(repository: DomainsEnum): any
}