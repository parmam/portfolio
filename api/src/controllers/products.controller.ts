
import { Request, Response } from "express";

class TestController {
  constructor() {}

  public getAllProducts(req: Request, res: Response): void {
    res.status(200).send("getting");
  }
}

export default TestController;
