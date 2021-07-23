//POUR POSTER DES ELEMENTSUR UNE BASE DE DONNEE OU UN API

const init = {
    method: 'POST', //DELETE POUR SUPPRIMER
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        pseudo: "Gneo",
        message: 'comment ca va!'
    }),
    mode: 'cors',
    credentials: "same-origin",
};

document.querySelector('form').addEventListener("submit", () => {
    fetch('http://localhost:3000/posts', init).then(() => console.log('data envoyée'));
});


//Pour supprimer des element rajouter l'id de l'element et la methode DELETE


const init2 = {
    method: 'DELETE', //DELETE POUR SUPPRIMER
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        pseudo: "Gneo",
        message: 'comment ca va!'
    }),
    mode: 'cors',
    credentials: "same-origin",
};

document.querySelector('form').addEventListener("submit", () => {
    fetch('http://localhost:3000/posts/2', init2).then(() => console.log('data envoyée'));
});