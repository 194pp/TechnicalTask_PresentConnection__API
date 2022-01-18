import dotenv from 'dotenv';
dotenv.config();

export const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT ? +process.env.DB_PORT : undefined,
};

export const serverPort = process.env.SERVER_PORT || 3334;
export const bcryptSalt = process.env.BCRYPT_SALT;
