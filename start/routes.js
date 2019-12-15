'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

//-----------------------USUARIO-------------------
Route.post('usuario/guardar','UsuarioController.guardarpersona')
Route.get('usuario/ver','UsuarioController.verusuariopersona')
Route.get('usuario/versinempresa','UsuarioController.verusuariopersonasinempresa')
Route.get('usuario/veruno/:id','UsuarioController.verusuariopersonauno')
Route.put('usuario/editar/:id','UsuarioController.editarpersona')
Route.put('usuario/eliminar/:id','UsuarioController.eliminarusuario')
Route.post('usuarioespecial','UsuarioController.miusuarioespecial')
//-----------------------USUARIO-------------------


//-----------------------EMPRESA-------------------
Route.post('empresa/guardar','UsuarioController.guardarempresa')
Route.get('empresa/ver','UsuarioController.verempresa')
Route.get('empresa/veruno/:id','UsuarioController.verempresauno')
Route.put('empresa/editar/:id','UsuarioController.editarempresa')
Route.put('empresa/eliminar/:id','UsuarioController.eliminarempresa')
//-----------------------EMPRESA-------------------



//----------LOGIN--------------------
Route.post('login','LoginController.login')
Route.post('verusua','LoginController.veraftertoken')
//----------LOGIN--------------------

//-----------------------CUESTIONARIO FAKE-------------------
Route.get('tipocuestionario/ver','CuestionarioController.vertipocuestionarios')
Route.post('tipocuestionario/guardar','CuestionarioController.guardartipocuestionario')
Route.get('tipocuestionario/veruno/:id','CuestionarioController.vertipocuestionariouno')
Route.put('tipocuestionario/editar/:id','CuestionarioController.editartipocuestionario')
Route.put('tipocuestionario/eliminar/:id','CuestionarioController.eliminartipocuestionario')
//-----------------------CUESTIONARIO FAKE-------------------

//-----------------------CUESTIONARIO MODEL-------------------
Route.get('cuestionariomodel/ver/visible/:id','CuestionarioController.vercuestionariomodel')
Route.post('cuestionariomodel/guardar','CuestionarioController.guardarcuestionariomodel')
Route.put('cuestionariomodel/editar/:id','CuestionarioController.editarcuestionariomodel')
Route.get('cuestionariomodel/veruno/:id','CuestionarioController.vercuestionariomodeluno')
Route.put('cuestionariomodel/eliminar/:id','CuestionarioController.eliminarcuestionariomodel')
//-----------------------CUESTIONARIO MODEL-------------------

//-----------------------CUESTIONARIO-------------------
Route.post('cuestionario/guardar','CuestionarioController.guardarcuestionario')
Route.post('cuestionario/ver','CuestionarioController.vercuestionario')
Route.get('cuestionario/veradmin','CuestionarioController.vercuestionarioparaadministrador')
Route.get('cuestionario/veruno/:id','CuestionarioController.vercuestionariouno')
Route.put('cuestionario/editar/:id','CuestionarioController.editarcuestionario')
Route.put('cuestionario/terminareditar/:id','CuestionarioController.terminareditarcuestionario')
Route.put('cuestionario/terminarcuestionario/:id','CuestionarioController.terminarcuestionario')
Route.put('cuestionario/resultadofinal/:id','CuestionarioController.resultadocuestionario')
Route.put('cuestionario/eliminar/:id','CuestionarioController.eliminarcuestionario')
//-----------------------CUESTIONARIO-------------------

//-----------------------PREGUNTA-------------------
Route.post('pregunta/guardar','CuestionarioController.guardarpregunta')
Route.get('pregunta/ver/visible/:id','CuestionarioController.verpreguntavisible')
Route.get('pregunta/veruno/:id','CuestionarioController.verpreguntauno')
Route.get('pregunta/ver/norespondida/:id','CuestionarioController.verpreguntanorespondida')
Route.post('pregunta/veresultado/:id','CuestionarioController.vercuestionarioresultado')
Route.put('pregunta/editar/:id','CuestionarioController.editarpregunta')
Route.put('pregunta/responder/:id','CuestionarioController.responderpregunta')
Route.put('pregunta/eliminar/:id','CuestionarioController.eliminarpregunta')
//-----------------------PREGUNTA-------------------

//-----------------------RESPUESTA-------------------
Route.post('respuesta/guardar','CuestionarioController.guardarrespuesta')
Route.get('respuesta/ver','CuestionarioController.verrespuesta')
Route.put('respuesta/editar/:id','CuestionarioController.editarrespuesta')
//-----------------------RESPUESTA-------------------


