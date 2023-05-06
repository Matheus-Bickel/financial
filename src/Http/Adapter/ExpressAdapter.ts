import 'reflect-metadata';

import express, { Request, Response } from "express";
import { bootstrapStart } from '../../Common/Bootstrap/BootstrapStart';
import { HttpClient } from '../HttpClient/HttpClient';

export class ExpressAdapter implements HttpClient {
    app: any
    port: number

    constructor() {
        this.app = express()
        this.app.use(express.json())
        this.port = 3000
    }

    on(method: string, url: string, callback: Function): void {
        this.app[method](url, async function (req: Request, res: Response) {
            const ouput = await callback(req.params, req.body)
            res.json(ouput)
        })
    }
    
    listen(port: number): void {
        this.app.listen(this.port)
    }

    private getListerPort() {
        this.app.listen(this.port, () => {
            return console.log(`Express is listening at  http://localhost:${this.port}, SERVER ON`)
        })
    }

    private async function () {
        await bootstrapStart()
    }
}