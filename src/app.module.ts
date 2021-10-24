import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './controllers/order/order.controller';
import { UserController } from './controllers/user/user.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { CategoryController } from './controllers/category/category.controller';
import { ProductController } from './controllers/product/product.controller';
import { BrandController } from './controllers/brand/brand.controller';
import { ProductsService } from './services/products/products.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    OrderController,
    UserController,
    CustomerController,
    CategoryController,
    ProductController,
    BrandController,
  ],
  providers: [AppService, ProductsService],
})
export class AppModule {}
