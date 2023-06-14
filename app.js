import express from 'express';
import session from "express-session";
import cors from 'cors'
const app = express();


app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: true,
    })
   );
   
app.use(
    cors({
      credentials: true,
      origin : "http://localhost:3000",
    })
   );
   
app.use(express.json());
const port = process.env.PORT || 4000;

app.listen(port);