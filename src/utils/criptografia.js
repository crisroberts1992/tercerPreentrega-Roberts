import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SESSION_SECRET } from '../config/config.js'
import { randomUUID } from 'crypto'

export function newId() {
  return randomUUID()
}

class Criptografia {
  hashear(dato) {
    return bcrypt.hashSync(dato, 10)
  }

  comparar(actual, almacenada) {
    return bcrypt.compareSync(actual, almacenada)
  }

  generarToken(dato) {
    return jwt.sign(dato, SESSION_SECRET, { expiresIn: '1h' })
  }

  decodificarToken(token) {
    try {
      return jwt.verify(token, SESSION_SECRET)
    } catch (error) {
      throw new Error('error de autenticacion: sesión expirada')
    }
  }
}

export const criptografiador = new Criptografia()

