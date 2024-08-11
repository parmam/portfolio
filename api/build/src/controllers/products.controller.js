"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestController {
    constructor() { }
    getAllProducts(req, res) {
        res.status(200).send("getting");
    }
}
exports.default = TestController;
