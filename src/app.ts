import { ExpressAdapter } from "./Http/Adapter/ExpressAdapter";
import { Router } from "./Http/Router/Router";

const client = new ExpressAdapter()
client.listen(3000)
const router = new Router(client)
router.init()
console.log('ON')
