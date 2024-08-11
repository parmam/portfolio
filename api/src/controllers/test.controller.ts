
import { Request, Response } from "express";

class TestController {
  constructor() {}

  public test(req: Request, res: Response): void {
    res.status(200).send("Test endpoint reached successfully");
  }
}

export default TestController;
