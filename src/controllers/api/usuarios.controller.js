import { User } from '../../entidades/user.js'
import { usuariosManager } from '../../dao/user.manager.js'
import { criptografiador } from '../../utils/criptografia.js'

export async function postUsuariosController(req, res, next) {
    const datosUsuario = req.body
    console.log(datosUsuario)
    try {
        datosUsuario.password = criptografiador.hashear(datosUsuario.password)
        const usuario = new User(datosUsuario)
        const usuarioGuardado = await usuariosManager.guardar(usuario.datos())

        const token = criptografiador.generarToken(usuarioGuardado)
        res.cookie('authToken', token, { httpOnly: true, signed: true, maxAge: 1000 * 60 * 60 * 24 })

       

        res.status(201).json(usuarioGuardado)
    } catch (error) {
        next(error)
    }
}




