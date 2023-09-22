import { inject, injectable } from "inversify";
export interface IProductService{

}
@injectable()
    export class ProductService implements IProductService {
        constructor() {}
    }    
