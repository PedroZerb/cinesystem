

import express from 'express';
import cors from "cors";
import router from '../routes/index.js';



const app = express();
const port = 8000;

app.use(router);
app.use(express.json());
app.use(cors());


app.listen(port, () => {
  console.log(`backend server listening on port ${port}`);
});
