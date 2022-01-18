import {Request, Response} from 'express';
import {connection} from "../db/db";

const controller = {
  getPosts: async (req: Request, res: Response) => {
    const sql = "SELECT * FROM posts";
    connection.query(sql, function (err, results) {
      res.send(results);
    });
  },
  getSinglePost: async (req: Request, res: Response) => {
    const valid = /^\d+$/.test(req.params.id);
    if (valid) {
      const sql = `SELECT * FROM posts WHERE id = ${req.params.id}`
      connection.query(sql, function (err, results) {
        res.send(results);
      });
    } else {
      res.send({err: 'Bad request'});
    }
  },
  postNewPost: async (req: Request, res: Response) => {
    const {userId, title, body} = req.body;
    const sql = `INSERT INTO posts (userId, title, body) VALUES (?, ?, ?)`;
    connection.execute(sql, [userId, title, body], function (err, results, fields) {
      let id;
      if ("insertId" in results) id = results.insertId;
      res.send(
        {
          id: id,
          userId: userId,
          title: title,
          body: body,
        }
      );
    });
  }
}

export default controller;
