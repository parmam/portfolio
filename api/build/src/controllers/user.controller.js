"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_repository_1 = require("../repositories/user.repository");
const userRepository = new user_repository_1.UserRepository();
class UserController {
    constructor() {
        this.createUser = this.createUser.bind(this);
        this.getUserById = this.getUserById.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            try {
                const user = yield userRepository.createUser(req.body);
                res.status(201).json(user);
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to create user' });
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userRepository.getUserById(Number(req.params.id));
                if (user) {
                    res.status(200).json(user);
                }
                else {
                    res.status(404).json({ error: 'User not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to get user' });
            }
        });
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('entra');
            try {
                const users = yield userRepository.getAllUsers();
                res.status(200).json(users);
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to get users' });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userRepository.updateUser(Number(req.params.id), req.body);
                res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to update user' });
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield userRepository.deleteUser(Number(req.params.id));
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to delete user' });
            }
        });
    }
    getUserByEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userRepository.getUserByEmail(req.params.email);
                if (user) {
                    res.status(200).json(user);
                }
                else {
                    res.status(404).json({ error: 'User not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to get user' });
            }
        });
    }
    getUserByPhone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userRepository.getUserByPhone(req.params.phone);
                if (user) {
                    res.status(200).json(user);
                }
                else {
                    res.status(404).json({ error: 'User not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to get user' });
            }
        });
    }
}
exports.UserController = UserController;
