import {Request, Response} from 'express';

const controller = {
  getPosts: async (req: Request, res: Response) => {
    res.send([
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
    ]);
  },
  getSinglePost: async (req: Request, res: Response) => {
    res.send([
      {
        "enteredID": req.params.id,
      },
    ]);
  },
}

export default controller;
