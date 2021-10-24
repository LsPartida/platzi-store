import {
  Controller,
  Post,
  Get,
  Body,
  Put,
  Delete,
  Param,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import Product from 'src/entities/product.entity';
import { ProductsService } from 'src/services/products/products.service';

@Controller('product')
export class ProductController {
  constructor(private productsService: ProductsService) {}
  @Get()
  getAll() {
    return this.productsService.findAll();
  }
  @Post()
  addOne(@Body('productId') id: number, @Body() payload: Product) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  updateOne(@Param('id') id: number, @Body() payload: any) {
    return { message: `Product ${id} updated`, data: payload };
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.productsService.deleteOne(id);
  }
}
