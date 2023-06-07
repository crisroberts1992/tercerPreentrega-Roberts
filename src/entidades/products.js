import { newId } from "../utils/criptografia.js";
// persistencia en archivos descomentar id

export default class Products {
  #id;
  #title;
  #description;
  #price;
  #thumbnail;
  #code;
  #stock;
  #status;
  #category;

  constructor({ id=newId(),title, description, price=this.validatePrice(price), thumbnail=this.validateThumbnail(thumbnail), code=this.validateCode(code), stock=this.validateStock(stock), category=this.validateCategory(category) }) {
     this.#id = id ;
    this.#title = title;
    this.#description = description;
    this.#price = price;
    this.#thumbnail = [thumbnail];
    this.#code = code;
    this.#stock = stock ;
    this.#status = true;
    this.#category = category;
  }

  validatePrice(price) {
    if (typeof price !== "number" || price <= 0) {
      throw new Error("Price debe ser un numero mayor a 0");
    }
    return price;
  }

  validateThumbnail(thumbnail) {
    if (typeof thumbnail !== "string") {
      throw new Error("Thumbnail debe ser formato .jpg o .png");
    }
    return thumbnail;
  }

  validateCode(code) {
    if (typeof code !== "string" || code.length > 6) {
      throw new Error(
        "Code debe tener menos de 6 caracteres"
      );
    }
    return code;
  }

  validateStock(stock) {
    if (typeof stock !== "number" || stock <= 0) {
      throw new Error("Stock debe ser mayor a 0");
    }
    return stock;
  }

  validateCategory(category) {
    const allowedCategories = [
      "deportivo",
      "urbano",
      "urbana",
      "entrenamiento",
      "accesorios",  
    ];
    if (!allowedCategories.includes(category)) {
      throw new Error(
        "Categoria invalida"
      );
    }
    return category;
  }

  // Geters
   get id() {
     return this.#id;
   }

  get title() {
    return this.#title;
  }
  get description() {
    return this.#description;
  }
  get price() {
    return this.#price;
  }
  get thumbnail() {
    return this.#thumbnail;
  }
  get code() {
    return this.#code;
  }
  get stock() {
    return this.#stock;
  }
  get status() {
    return this.status;
  }
  get category() {
    return this.#category;
  }

  //metodos para acceder a copia y proteger original
  datos() {
    return {
      id: this.#id,
      title: this.#title,
      description: this.#description,
      price: this.#price,
      thumbnail: this.#thumbnail,
      code: this.#code,
      stock: this.#stock,
      status: this.#status,
      category: this.#category,
    };
  }
}