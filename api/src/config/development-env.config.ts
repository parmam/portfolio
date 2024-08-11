import dotenv from 'dotenv';

dotenv.config();

export default {
    db: {
        host: process.env.POSTGRES_HOST || 'localhost',
        user: process.env.POSTGRES_USER || 'postgres',
        database: process.env.POSTGRES_DB || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'postgres',
        port: 5432,
    },

  port: process.env.PORT,
};
