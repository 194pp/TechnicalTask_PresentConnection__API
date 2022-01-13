import dotenv from 'dotenv';
dotenv.config();

const db = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  db: process.env.DB_DB,
  cluster: process.env.DB_CLUSTER,
  params: process.env.DB_PARAMS,
};

export const mongoDbString = `mongodb+srv://${db.user}:${db.password}${db.cluster}${db.db}${db.params}`;
export const serverPort = process.env.SERVER_PORT || 3334;
