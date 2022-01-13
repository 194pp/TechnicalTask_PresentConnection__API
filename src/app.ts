import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import {serverPort} from './config';
import routes from './route';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('common'));
app.use('/', routes);


app.listen(serverPort, async () => {
  console.log(`App is running at port: ${serverPort}`);
});
