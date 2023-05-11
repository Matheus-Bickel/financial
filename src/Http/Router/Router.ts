import { DomainsEnum } from "../../Domains/DomainsEnum";
import { EntryController } from "../Controllers/EntryController";
import { HttpClient } from "../HttpClient/HttpClient";

export class Router {
    group: DomainsEnum
    
    constructor(protected httpClient: HttpClient) {}

    async init(): Promise<any> {
        this.httpClient.on('get','/ofx', async (params: string, body: unknown) => {
            this.group = DomainsEnum.OFX
            
            const data = {
                params: params,
                body: body
            }
            
            return await new EntryController().index(data.params, this.group, data.body)
        })
    }
}