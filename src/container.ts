import { Container } from 'inversify';
import { IProductService, ProductService } from './infrastructures/services/product.service';
import TYPES from './types';
import { ProductController } from './controllers/product.controller';

let container = new Container();
container.bind<IProductService>(TYPES.ProductService).to(ProductService);
container.bind<ProductController>(TYPES.ProductController).to(ProductController);
export { container };
