import express from 'express';
import UserController from "./users/users-controller.js";
import session from "express-session";
import AuthController from "./users/auth-controller.js";
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
UserController(app);
AuthController(app);

app.listen(port);