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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_route_1 = __importDefault(require("./src/routes/index.route"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const client_1 = require("@prisma/client");
// Configures dotenv to work in your application
dotenv_1.default.config();
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 3000;
        this.prisma = new client_1.PrismaClient();
        this.config();
        this.routes();
        this.server = http_1.default.createServer(this.app);
    }
    config() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('dev')); // Logger
        this.app.use((0, helmet_1.default)()); // Security
        this.app.use((0, cors_1.default)({
            origin: '*',
            credentials: true,
        })); // Enable CORS
        this.app.use((0, compression_1.default)()); // Compress responses
        // Configure default headers
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            next();
        });
    }
    routes() {
        new index_route_1.default(this.app);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.prisma.$connect();
                this.server.listen(this.port, () => {
                    console.log("Server running at PORT: ", this.port);
                }).on("error", (error) => {
                    if (error.code === 'EADDRINUSE') {
                        console.error(`Port ${this.port} is already in use. Please use a different port.`);
                    }
                    else {
                        console.error(`Server error: ${error.message}`);
                    }
                    process.exit(1);
                });
            }
            catch (error) {
                console.error("Failed to connect to the database:", error);
                process.exit(1);
            }
        });
    }
}
const server = new Server();
server.start();
