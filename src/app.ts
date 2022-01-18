import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import routes from './route';
import {serverPort} from "./config";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('common'));
app.use('/', routes);

app.listen(serverPort, () => {
  console.log(`Running on port: ${serverPort}`);
});
