import { Application } from "express";
import  userRoutes  from './user.route';
import testRoutes from './test.route';
import productsRoutes from './products.route';


export default class Routes {
  constructor(app: Application) {
    this.initializeRoutes(app);
  }

  private initializeRoutes(app: Application) {
    app.use("/api/users", userRoutes);
    app.use("/api/test", testRoutes);
    app.use("/api/products", productsRoutes);
  }
}