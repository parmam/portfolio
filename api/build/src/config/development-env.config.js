"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    db: {
        host: process.env.POSTGRES_HOST || 'localhost',
        user: process.env.POSTGRES_USER || 'postgres',
        database: process.env.POSTGRES_DB || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'postgres',
        port: 5432,
    },
    port: process.env.PORT,
};
