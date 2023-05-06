export interface BaseController {
    index <T>(data: T, params?: T): Promise<T>
}