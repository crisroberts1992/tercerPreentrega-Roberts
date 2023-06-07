import { Router } from "express";
import { pmg } from "../dao/product.manager.mg.js";
import {
  PATH_DINAMYC,
  PATH_NEW_PRODUCT,
  PATH_PRODUCT,
  PATH_CARTS,
  PATH_PROFILE,
  PATH_REGISTER,
  PATH_LOGIN,
  PATH_USERS
} from "../config/config.js";
import { cmg } from "../dao/cart.manager.mg.js";
import { registroView } from '../controllers/web/registro.controller.js'
import { soloAutenticados, extraerCredenciales } from '../mid/autenticacionWeb.js'
import { loginView } from '../controllers/web/login.controller.js'
import { usuariosView } from '../controllers/web/usuarios.controller.js'


export const viewsRouter = Router();

viewsRouter.get('/', (req, res, next) => {
  res.redirect('/home');
});

viewsRouter.get('/home',extraerCredenciales, soloAutenticados, async (req, res, next) => {
  try {
    const productList = await pmg.getProducts();

    res.render(PATH_DINAMYC, {
      faviconTitle: "Todos los Productos",
      Head: "Lista de productos",
      list: [...productList],
      listOk: productList.length > 0,
    });
  } catch (error) {
    return next(error.message);
  }
});

viewsRouter.get('/newproducts',extraerCredenciales, soloAutenticados, async (req, res, next) => {
  try {
    res.render(PATH_NEW_PRODUCT, {
      faviconTitle: "Agregar productos",
      Head: "Nuevo producto",
    });
  } catch (error) {
    return next(error.message);
  }
});


//vistas de productos paginado

viewsRouter.get('/products', extraerCredenciales, soloAutenticados, async (req, res) => {
  const urlsrt = `http://localhost:8080${req.originalUrl}`;
  const products = await pmg.getPagProducts(req.query, urlsrt);
  res.render(PATH_PRODUCT, {
    faviconTitle: "Productos",
    Head: "EL CLUB DE LA CAMISETA",
    list: products,
    listExist: products.payload.length > 0,
  });
});

//vista de carritos
viewsRouter.get('/carts/:cid',extraerCredenciales, soloAutenticados, async (req, res) => {
  const products = await cmg.getProductsInCartById(req.params.cid);
  res.render(PATH_CARTS, {
    faviconTitle: "Cart",
    Head: "Carrito",
    list: products,
    listExist: products.length > 0,
    GoToProducts: "http://localhost:8080/products?limit=5&page=1",
  });
});
//vistas de registro de usuarios
viewsRouter.get(PATH_LOGIN, loginView);
viewsRouter.get(PATH_REGISTER, registroView);
viewsRouter.get(PATH_PROFILE, extraerCredenciales, soloAutenticados, async (req, res, next) => {
  try {
    res.render(PATH_PROFILE, {
      faviconTitle: "Perfil",
      Head: "Profile",
    });
  } catch (error) {
    return next(error.message);
  }
});
viewsRouter.get(PATH_USERS,extraerCredenciales, soloAutenticados, usuariosView)
viewsRouter.use((error, req, res, next) => {
  if (error.message === 'AUTHORIZATION ERROR') {
      return res.send('No tenes permiso para acceder a este recurso. Intenta <a href="/login">loguearte</a> con un usuario con los permisos adecuados.')
  }
  next(error)
})