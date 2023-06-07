import { newId } from "../utils/criptografia.js";

export default class Carts {
   #id
  #products;
  constructor({id=this.validateId(newId()),products = this.validateProducts([])}) {
     this.#id = id;
    this.#products = products;
  }
   // Validación de id
   validateId(id) {
    if (!id) {
      throw new Error("ID requerido");
    }
    return id;
  }

  // Validación de products
  validateProducts(products) {
    if (!Array.isArray(products)) {
      throw new Error("Productos no es array");
    }
    return products;
  }

   get id() {
     return this.#id;
   }

  get products() {
    return this.#products;
  }

  //metodos para acceder a copia y proteger original
  datos() {
    return {
       id: this.#id,
      products: this.#products,
    };
  }
}