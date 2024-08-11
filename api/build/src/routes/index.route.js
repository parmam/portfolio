"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = __importDefault(require("./user.route"));
const test_route_1 = __importDefault(require("./test.route"));
const products_route_1 = __importDefault(require("./products.route"));
class Routes {
    constructor(app) {
        this.initializeRoutes(app);
    }
    initializeRoutes(app) {
        app.use("/api/users", user_route_1.default);
        app.use("/api/test", test_route_1.default);
        app.use("/api/products", products_route_1.default);
    }
}
exports.default = Routes;
