

const jokeUrl = 'https://api.chucknorris.io/jokes/random';

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


// fetch(jokeUrl)
//     .then(response => response.json())
//     .then(({id,value}) => {
//         console.log(id,value);
//     });

export{
    obtenerChiste
}