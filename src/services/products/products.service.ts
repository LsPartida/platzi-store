import { Injectable } from '@nestjs/common';
import Product from '../../entities/product.entity';
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'pelota',
      description: 'Pelota de hule color morado',
      price: 12.5,
      image: null,
      stock: null,
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }
  create(payload: Product) {
    this.counterId++;
    const newProduct = {
      ...payload,
      id: this.counterId,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  updateOne(id: number, payload: any) {
    this.products[id] = { ...this.products[id], ...payload };
    return this.products[id];
  }
  deleteOne(id: number) {
    let searchedProduct = this.findOne(id);
    if (searchedProduct !== null) {
      this.products.splice(searchedProduct.id, 1);
      return { data: { message: `Registro ${id} eliminado` } };
    } else {
      return { data: { message: `Registro ${id} no eliminado` } };
    }
  }
}
