import 'reflect-metadata';

import { Request, Response, Router } from 'express';
import { app } from './app';
import { bootstrapStart } from './Common/Bootstrap/BootstrapStart';
import { OfxDataParserRepository } from './Domains/OfxData/Infra/OfxDataParserRepository';

const router = Router()
app.use(router)

async () => {
    await bootstrapStart()
}

router.get('/ofx', async (req: Request, res: Response) => {
    return await new OfxDataParserRepository().dataParserAndConvert()
})