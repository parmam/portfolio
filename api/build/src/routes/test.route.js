"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_controller_1 = __importDefault(require("../controllers/test.controller"));
class TestRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new test_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.use((req, res, next) => {
            next();
        });
        this.router.get("/", this.controller.test);
    }
}
exports.default = new TestRoutes().router;
