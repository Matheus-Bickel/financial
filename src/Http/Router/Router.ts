import { EntryController } from "../Controllers/EntryController";
import { HttpClient } from "../HttpClient/HttpClient";

export class Router {
    constructor(protected httpClient: HttpClient) {}

    async init(): Promise<void> {
        this.httpClient.on('get','/ofx', async (params: string, body: unknown) => {
            console.log('teste 1')
            const data = {
                params: params,
                body: body
            }

            return new EntryController().index(data.params, data.body)
        })
    }
}