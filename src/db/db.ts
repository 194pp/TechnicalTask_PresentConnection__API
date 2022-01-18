import mysql from 'mysql2';
import {dbConfig} from "../config";

export const connection = mysql.createPool({...dbConfig, connectionLimit: 10});

export const prepStatement = (sql: string, args?: [string | number]) => {
  let result;
  connection.execute(
    sql,
    [args || null],
    function (err, results, fields) {
      console.log({queryResults: results});
      result = results;
    }
  );
  return result;
}

export const registerUser = (data: {
  username: string, password: string, repeatPassword: string
}) => {
  // validation goes here

  // hashing password goes here



  const sql = 'INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...)';
  const fields = ''
  // prepStatement();
}
