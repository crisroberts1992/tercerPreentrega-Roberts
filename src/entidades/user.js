import { newId } from "../utils/criptografia.js"

export class User {
    #id
    #cart
    #first_name
    #last_name
    #email
    #age
    #password
    #rol
  
    constructor({ id=this.validateCart(newId()),cart=this.validateCart(cart),first_name=this.validateFirstName(first_name),last_name=this.validateLastName(last_name),email=this.validateEmail(email),age=this.validateAge(age),password=this.validatePassword(password),rol='user' }) {
      this.#id = id
      this.#cart = cart
      this.#first_name = first_name
      this.#last_name = last_name
      this.#email = email
      this.#age = age
      this.#password = password
      this.rol = rol
    }
    // Validaciones

  // Validación de id
  validateId(id) {
    if (!id) {
      throw new Error("ID requerido");
    }
    return id;
  }

  // Validación de email
  validateEmail(email) {
    if (!email) {
      throw new Error("Email requerido");
    }
    return email;
  }

  // Validación de first_name
  validateFirstName(first_name) {
    if (!first_name) {
      throw new Error("First name requerido");
    }
    return first_name;
  }

  // Validación de last_name
  validateLastName(last_name) {
    if (!last_name) {
      throw new Error("Last name requerido");
    }
    return last_name;
  }

  // Validación de age
  validateAge(age) {
    if (!age) {
      throw new Error("Age requerido");
    }
    if (typeof age !== "number") {
      throw new Error("Age debe ser un numero");
    }
    if (age < 14) {
      throw new Error("Age debe ser mayor a 14");
    }
    return age;
  }

  // Validación de password
  validatePassword(password) {
    if (!password) {
      throw new Error("Password requerido");
    }
    return password;
  }

  // Validación de cart
  validateCart(cart) {
    if (!cart) {
      throw new Error("cart requerido");
    }
    return cart;
  }
    get id() { return this.#id }
    get cart() { return this.#cart }  
    get first_name() { return this.#first_name }
    get last_name() { return this.#last_name }
    get email() { return this.#email }
    get age() { return this.#age }
    get password() { return this.#password }
    get rol() { return this.#rol }
  
    set rol(value) {
      if (value !== 'admin' && value !== 'user') throw new Error('rol invalido')
      this.#rol = value
    }
    datos() {
      return {
        id: this.#id,
        cart: this.#cart,
        first_name: this.#first_name,
        last_name: this.#last_name,
        email: this.#email,
        age: this.#age,
        password: this.#password,
        rol: this.#rol,
      }
    }
  }