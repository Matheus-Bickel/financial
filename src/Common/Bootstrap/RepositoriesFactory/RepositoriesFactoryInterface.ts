import { RepositoriesEnum } from "./RepositoriesEnum";

export interface RepositoriesFactoryInterface {
    handler(repository: RepositoriesEnum): RepositoriesEnum
}