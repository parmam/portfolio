import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import Routes from './src/routes/index.route';
import http from 'http';
import bodyParser from "body-parser";
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import { PrismaClient } from '@prisma/client';

// Configures dotenv to work in your application
dotenv.config();

class Server {
  private app: Application;
  private port: number | string;
  private server: http.Server;
  private prisma: PrismaClient;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.prisma = new PrismaClient();
    this.config();
    this.routes();
    this.server = http.createServer(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(morgan('dev')); // Logger
    this.app.use(helmet()); // Security
    this.app.use(cors({ 
      origin: '*',
      credentials: true,
    })); // Enable CORS
    this.app.use(compression()); // Compress responses

    // Configure default headers
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      next();
    });
  }

  private routes(): void {
    new Routes(this.app);
  }

  public async start(): Promise<void> {
    try {
      await this.prisma.$connect();
      this.server.listen(this.port, () => {
        console.log("Server running at PORT: ", this.port);
      }).on("error", (error: NodeJS.ErrnoException) => {
        if (error.code === 'EADDRINUSE') {
          console.error(`Port ${this.port} is already in use. Please use a different port.`);
        } else {
          console.error(`Server error: ${error.message}`);
        }
        process.exit(1);
      });
    } catch (error) {
      console.error("Failed to connect to the database:", error);
      process.exit(1);
    }
  }
}

const server = new Server();
server.start();