import 'reflect-metadata';

import { Request, Response, Router } from 'express';
import { app } from './app';

const router = Router()
app.use(router)

router.get('/', (req: Request, res: Response) => {
    return res.send('teste')
})