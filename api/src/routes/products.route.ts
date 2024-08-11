import { Router } from "express";
import ProductsController from "../controllers/products.controller";

class ProductsRoutes {
  router = Router();
  controller = new ProductsController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.use((req, res, next) => {
      next();
    });
    this.router.get("/", this.controller.getAllProducts);
  }
}

export default new ProductsRoutes().router;