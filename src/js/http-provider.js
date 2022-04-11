

const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

// cloudinary
const cloudPreset = 'm32hps7y';
const urlCloudinary =' https://api.cloudinary.com/v1_1/dxuwngsvu/upload';

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

const subirImagen = async(archivo)=> {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file',archivo);

    try {
        const resp = await fetch(urlCloudinary,{
            method: 'POST',
            body:formData
        });

        if(resp.ok){
            const cloudResp=await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}

export{
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}