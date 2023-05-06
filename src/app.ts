import { ExpressAdapter } from "./Http/Adapter/ExpressAdapter";
import { Router } from "./Http/Router/Router";

const client = new ExpressAdapter()
const router = new Router(client)
router.init()
client.listen(3000)
