
const urlCrud = 'https://reqres.in/api/users';



const getUsuario = async(id)=> {
    const resp = await fetch(`${urlCrud}/${id}`);
    const {data} = await resp.json();


    return data;
}

const crearUsuarios = async(usuario)=> {

    const resp = await fetch(urlCrud,{
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'content-type': 'application/json'
        }
    });

    return await resp.json();
}

const actualizarUsuario = async(usuario,id)=> {

    const resp = await fetch(`${urlCrud}/${id}`,{
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'content-type': 'application/json'
        }
    });

    return await resp.json();
}


const eliminarUsuarios = async (id)=> {
    const resp = await fetch(`${urlCrud}/${id}`,{
        method: 'DELETE',
    });

    return (resp.ok) ? 'borrado' : 'no se pudo eliminar';
}

export{
    getUsuario,
    crearUsuarios,
    actualizarUsuario,
    eliminarUsuarios
}