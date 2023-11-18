function calcularGanados() {
    const numJuegos = document.getElementById('numJuegos').value;

    if (numJuegos > 0 && numJuegos <= 100) {
        let azules = [];
        let rojas = [];

        for (let i = 0; i < numJuegos; i++) {
            azules.push(prompt(`Número de dedos mostrados por María en el juego ${i + 1}:`));
            rojas.push(prompt(`Número de dedos mostrados por Juan en el juego ${i + 1}:`));
        }

        const ganadosAzules = obtenerGanados(azules, rojas, numJuegos);
        document.getElementById('resultados').innerText = `María ganó con certeza en ${ganadosAzules} juego(s).`;
    } else {
        alert('Por favor, ingresa un número de juegos válido (entre 1 y 100).');
    }
}

function obtenerGanados(azules, rojas, numJuegos) {
    let ganadosAzules = 0;

    let paresAzules = 0;
    let imparesAzules = 0;

    azules.forEach((azul) => {
        if (esPar(azul)) {
            paresAzules++;
        } else {
            imparesAzules++;
        }
    });

    for (let i = 0; i < numJuegos; i++) {
        if (esPar(rojas[i])) {
            ganadosAzules += imparesAzules;
        } else {
            ganadosAzules += paresAzules;
        }
    }

    return ganadosAzules;
}

function esPar(numero) {
    return numero % 2 === 0;
}

// NUEVO INTENTO
// -----------------------
// -----------------------
// -----------------------
// -----------------------

// function calcularGanados() {
//     const numJuegos = parseInt(document.getElementById('numJuegos').value);

//     if (numJuegos > 0 && numJuegos <= 100) {
//         let azules = [];
//         let rojas = [];

//         for (let i = 0; i < numJuegos; i++) {
//             azules.push(parseInt(prompt(`Número de dedos mostrados por María en el juego ${i + 1}:`)));
//             rojas.push(parseInt(prompt(`Número de dedos mostrados por Juan en el juego ${i + 1}:`)));
//         }

//         const ganadosAzules = obtenerGanados(azules, rojas, numJuegos);
//         document.getElementById('resultados').innerText = `María ganó con certeza en ${ganadosAzules} juego(s).`;
//     } else {
//         alert('Por favor, ingresa un número de juegos válido (entre 1 y 100).');
//     }
// }

// function obtenerGanados(azules, rojas, numJuegos) {
//     let ganadosAzules = 0;

//     for (let i = 0; i < numJuegos; i++) {
//         for (let j = i + 1; j < numJuegos; j++) {
//             if ((azules[i] + rojas[j]) % 2 === 1) {
//                 ganadosAzules++;
//             }
//             if ((azules[j] + rojas[i]) % 2 === 1) {
//                 ganadosAzules++;
//             }
//         }
//     }

//     return ganadosAzules;
// }