import { usuariosManager } from '../../dao/user.manager.js'
import { criptografiador } from '../../utils/criptografia.js'

export function getCurrentSessionController(req, res, next) {
    res.json(req.user);
  }
  
export async function postSesionesController(req, res, next) {
    const credenciales = req.body
    console.log(credenciales)
    try {
        const usuario = await usuariosManager.obtenerSegunEmail(credenciales.email)
        if (!criptografiador.comparar(credenciales.password, usuario.password)) {
            return next(new Error('AUTHENTICATION ERROR'))
        }

        const token = criptografiador.generarToken(usuario)
        res.cookie('authToken', token, { httpOnly: true, signed: true, maxAge: 1000 * 60 * 60 * 24 })

        res.sendStatus(201)

    } catch (error) {
        next(new Error('AUTHENTICATION ERROR'))
    }
}

export async function deleteSesionesController(req, res, next) {
    res.clearCookie('authToken', { httpOnly: true, signed: true, maxAge: 1000 * 60 * 60 * 24 })
    res.sendStatus(204)
}