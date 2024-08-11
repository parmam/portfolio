import { Router } from "express";
import TestController from "../controllers/test.controller";

class TestRoutes {
  router = Router();
  controller = new TestController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.use((req, res, next) => {
      next();
    });
    this.router.get("/", this.controller.test);
  }
}

export default new TestRoutes().router;