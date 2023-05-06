import { HttpClient } from "../HttpClient/HttpClient";

export class Router {
    constructor(protected httpClient: HttpClient) {}

    async init(): Promise<void> {
        this.httpClient.on('get','/ofxData', async (params: string, body: unknown) => {
            
        })
    }
}