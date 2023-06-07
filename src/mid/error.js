  export function manejoDeErroresRest(error, req, res, next) {
    next(error)
  }
  export const errorFn = (error, req, res, next) => {
    switch (error.message) {
      case "Product already exist" || "Not Found":
        res.status(404);
        break;
      case "Some imput is empty":
        res.status(400);
        break;
      case "Not Enough Stock":
        res.status(409);
        break;
      default:
        res.status(500);
    }
  
    res.json({ message: error.message });
  };
  
  
  export function manejoDeErroresWeb(error, req, res, next) {
    if (error.message === 'AUTHENTICATION ERROR') {
      return res.redirect('/login')
    }
  
    if (error.message === 'AUTHORIZATION ERROR') {
      return res.redirect('/login')
    }
  
    if (error.message === 'NOT FOUND') {
      return res.status(404).send('<H1>No encontrado</H1>')
    }
  
    next(error)
  }