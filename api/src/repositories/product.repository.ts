import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

export class ProductRepository {
  async createProduct(data: Product) {
    return await prisma.product.create({
      data,
    });
  }
  async updateProduct(id: number, data: Product) {
    return await prisma.product.update({
      where: { id },
      data,
    });
  }
  async deleteProduct(id: number) {
    return await prisma.product.delete({
      where: { id },
    });
  }
  async getProduct(id: number) {
    return await prisma.product.findUnique({
      where: { id },
    });
  }
  async getProducts() {
    return await prisma.product.findMany();
  }
  
}

