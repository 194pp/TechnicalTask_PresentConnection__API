import mysql from 'mysql2';
import {dbConfig} from "../config";

export const connection = mysql.createPool({...dbConfig, connectionLimit: 10});
