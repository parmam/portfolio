"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.userController = new user_controller_1.UserController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.use((req, res, next) => {
            next();
        });
        this.router.get('/', this.userController.getAllUsers);
        this.router.post('/', this.userController.createUser);
        this.router.get('/email/:email', this.userController.getUserByEmail);
        this.router.get('/phone/:phone', this.userController.getUserByPhone);
        this.router.get('/:id', this.userController.getUserById);
        this.router.put('/:id', this.userController.updateUser);
        this.router.delete('/:id', this.userController.deleteUser);
    }
}
exports.UserRoutes = UserRoutes;
exports.default = new UserRoutes().router;
