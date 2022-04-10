
import {obtenerChiste} from './http-provider';

const body = document.body;
const divChistes = document.createElement("div");
let btnOtrochiste, olList;

const crearChiste = () => {
  const html = `    
    <h1 class="mt-5">chistes</h1>
    <hr>
    <button class="btn btn-primary" id="primario">Otro chiste</button>

    <ol class="mt-2 list-group" id ="lista">
    </ol>`;

  divChistes.innerHTML = html;

  body.append(divChistes);
};

const crearEventos = () => {
    olList = document.querySelector("ol");
    btnOtrochiste = document.querySelector("#primario");

    btnOtrochiste.addEventListener("click", async() => {

        btnOtrochiste.disabled = true;
        dibujarChiste(await obtenerChiste());
        btnOtrochiste.disabled = false;
    });
}

const dibujarChiste = (chiste) => {
    const olItem=document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id}</b>: ${chiste.value}`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);
}

export const init = () => {
    crearChiste();
    crearEventos();
};
