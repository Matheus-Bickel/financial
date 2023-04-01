import { OfxDataBootsrap } from "../../Modules/OfxData/Infra/OfxDataBootrstrap";

export async function bootstrapStart(): Promise<void> {
    await new OfxDataBootsrap().handler()
}