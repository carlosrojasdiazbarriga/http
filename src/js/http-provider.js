

const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

// fetch(jokeUrl).then(response => {
//     response.json().then(data => {
//         console.log(data.id);
//         console.log(data.value);
//     });
// })

const obtenerChiste = async() => {

    try{
        const res = await fetch(jokeUrl);
        if(!res.ok) throw 'Error';

        const {icon_url,id,value} = await res.json();
        return {icon_url,id,value};

    }catch(e){
        throw e;
    }


}

const obtenerUsuarios = async() => {
    const res = await fetch(urlUsuarios);
    const {data:usuarios} = await res.json();

    console.log(usuarios);
    return usuarios;
}

export{
    obtenerChiste,
    obtenerUsuarios
}