// import {init} from './js/chistes-pages';
// import {init} from './js/usuarios-page';
import * as crud from './js/crud-provider';
// import {obtenerUsuarios} from './js/http-provider';
// obtenerUsuarios().then(console.log);

// crud.getUsuario(1).then(console.log);

// crud.crearUsuarios({
//     name: 'morpheus',
//     job: 'leader'
// }).then(console.log);

// crud.actualizarUsuario({
//     name: 'koryto',
//     job: 'developer'
// },1).then(console.log);

crud.eliminarUsuarios(1).then(console.log);