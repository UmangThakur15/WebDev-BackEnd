import express from 'express';
import session from "express-session";
import cors from 'cors';
import AuthController from './users/auth-controller.js';
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

AuthController(app);

app.listen(port);