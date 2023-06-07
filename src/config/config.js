import * as dotenv from "dotenv";

dotenv.config({
  path: "src/config/.env",
});

//server

const PORT = process.env.PORT;

//persitencia
const PERSISTENCIA = process.env.PERSISTENCIA;

const MONGODB_CNX_STR = process.env.MONGODB_CNX_STR;

//auth
const JWT_PRIVATE_KEY = "JWT_SECRET";
const COOKIE_SECRET = "C00K13_S3CR3T";
const SESSION_SECRET = "SESSION_SECRET";

//views
const PATH_NEW_PRODUCT = process.env.PATH_NEW_PRODUCT;
const PATH_PRODUCT = process.env.PATH_PRODUCT;
const PATH_CARTS = process.env.PATH_CARTS;
const PATH_LOGIN = process.env.PATH_LOGIN;
const PATH_REGISTER = process.env.PATH_REGISTER;
const PATH_PROFILE = process.env.PATH_PROFILE;
const PATH_USERS = process.env.PATH_USERS;
const PATH_DINAMYC = process.env.PATH_DINAMYC;

export {
  PORT,
  PERSISTENCIA,
  MONGODB_CNX_STR,
  COOKIE_SECRET,
  JWT_PRIVATE_KEY,
  SESSION_SECRET,
  PATH_CARTS,
  PATH_LOGIN,
  PATH_NEW_PRODUCT,
  PATH_PRODUCT,
  PATH_REGISTER,
  PATH_PROFILE,
  PATH_USERS,
  PATH_DINAMYC
};