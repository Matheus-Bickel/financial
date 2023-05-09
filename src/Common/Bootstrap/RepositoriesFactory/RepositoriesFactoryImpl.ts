import { RepositoriesEnum } from "./RepositoriesEnum";
import { RepositoriesFactoryInterface } from "./RepositoriesFactoryInterface";

export class RepositoriesFactoryImpl implements RepositoriesFactoryInterface {
    handler(repository: RepositoriesEnum): RepositoriesEnum {
        return repository
    }

    static from() {
        return new RepositoriesFactoryImpl()
    }
}