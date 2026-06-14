const elNombre = document.getElementById('Jimoi710');
const elIntro = document.getElementById('Mi-Intro');
const elMeta = document.getElementById('Mi-Meta');

const listaF = document.getElementById('Mis-Fortalezas');
const listaO = document.getElementById('Mis-Oportunidades');
const listaD = document.getElementById('Mis-Debilidades');
const listaA = document.getElementById('Mis-Amenazas');

const elUniContainer = document.getElementById('uniContainer');
const boton = document.getElementById('btnActualizar');

function cargarPerfil() {

    const datos = {
        nombre: "Jimmy Gómez",
        introduccion: "Soy un individuo de 16 años, estudiante de 5to año amigable, responsable y chistoso, teniendo intereses en el fútbol, teologia, y las materias cientificas.",
        meta: "Ser un Ingeniero en Petroleo exitoso.",
        fortalezas: ["Amistoso","Responsable","Inteligente","Hábil para los números"],
        oportunidades: ["Muchas opciones de universidades","Apoyo muy grande de mis padres"],
        debilidades: ["Tiendo a procastinar","Propenso a distraerme con cualquier cosa"],
        amenazas: ["Dificultad para los cupos","Situación país"],
        universidades: ["UDO","UCV","USM"],
    };

    elNombre.innerText = datos.nombre;
    elIntro.innerText = datos.introduccion;
    elMeta.innerText = datos.meta;

    const llenarLista = (array, element) => {
        element.innerHTML = "";
        array.forEach(texto => {
            const li = document.createElement('li');
            li.textContent = texto;
            element.appendChild(li);
        });
    };

    llenarLista(datos.fortalezas, listaF);
    llenarLista(datos.oportunidades, listaO);
    llenarLista(datos.debilidades, listaD);
    llenarLista(datos.amenazas, listaA);

    elUniContainer.innerHTML = "";
    datos.universidades.forEach(uni => {
        const div = document.createElement('div');
        div.className = universidades;
        elUniContainer.appendChipd(div);
    });

    console.log("DOM actualizado correctamente.");
}

boton.addEventListener('click', cargarPerfil);