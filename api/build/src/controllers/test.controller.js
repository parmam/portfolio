"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestController {
    constructor() { }
    test(req, res) {
        res.status(200).send("Test endpoint reached successfully");
    }
}
exports.default = TestController;
