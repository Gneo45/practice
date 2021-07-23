//selection de l'element main de la page
const main = document.querySelector('main')

//tableau basique content les exercices et le temps par default
const basicArray = [
        { pic: 0, min: 1 },
        { pic: 1, min: 1 },
        { pic: 2, min: 1 },
        { pic: 3, min: 1 },
        { pic: 4, min: 1 },
        { pic: 5, min: 1 },
        { pic: 6, min: 1 },
        { pic: 7, min: 1 },
        { pic: 8, min: 1 },
        { pic: 9, min: 1 },
    ]
    //tableau mis a jour contenant la configuration des exercices a jouer
let exerciceArray = [];

//Stocker dans le local storage le tableau mis a jour
(() => { //fonction annonyme
    if (localStorage.exercices) { // condition de stockage du nouveau tableau 
        exerciceArray = JSON.parse(localStorage.exercices) // pour stocker on converti en JSON 
    } else {
        exerciceArray = basicArray; // sinon le tableau de configuration prend la config de base 
    }
})(); //fin fonction annonyme

class Exercice { // on construit une class exercice
    constructor() {
        this.index = 0;
        this.minutes = exerciceArray[this.index].min;
        this.secondes = 0;
    }

    updateCountdown() { //fonction de mise a jour du compte a rebours
        this.secondes = this.secondes < 10 ? "0" + this.secondes : this.secondes; // ternaire, si les secondes de cet objet sont inferieur a 10 alors on ajoute a ces secondes un 0 : sinon seconde par default

        setTimeout(() => { //toutes les 1 seconde (1000ms)
                if (this.minutes === 0 && this.secondes == "00") { //si les minutes =0 et les secondes = 0
                    this.index++; // l'index passe au suivant 
                    this.ring(); //on sonne la cloche
                    if (this.index < exerciceArray.length) { //si l'index est inferieur a la longeur du tableau 
                        this.minutes = exerciceArray[this.index].min; // les minutes prennes les minutes de l'index configurer 
                        this.secondes = 0; //les secondes passe a 0
                        this.updateCountdown(); //on relance la fonction qui jour le chrono (recursivité elle s'appel elle meme)
                    } else {
                        return page.finish(); //sinon on retourne la fonction de fin 
                    }

                } else if (this.secondes === "00") { // sinon si les secondes sont egale a 0
                    this.minutes--; // on enleve 1 minute
                    this.secondes = 59; //les seconde passe a 59
                    this.updateCountdown(); //on relance le compte a rebours
                } else {
                    this.secondes--; //sinon on enlev une seconde
                    this.updateCountdown(); // on relance le compte a rebours 
                }
            }, 1000) // temps entre chaque seconde

        return (main.innerHTML = `                  
        <div class="exercice-container">
            <p>${this.minutes}:${this.secondes}</p>
            <img src="./img/${exerciceArray[this.index].pic}.png" />
            <div>${this.index + 1}/${exerciceArray.length}</div>
        </div>
        
        `); // dans le main on injecte une div contenant p: minutes de cet objet : seconde 
        // imag n° index +1 / longeur du tableau
    }

    ring() { //fonction pour jouer la cloche
        const audio = new Audio();
        audio.src = "ring.mp3"
        audio.play();
    }


}

const utils = {

    pageContent: function(title, content, btn) {
        document.querySelector('h1').innerHTML = title;
        main.innerHTML = content;
        document.querySelector('.btn-container').innerHTML = btn;
    },

    handleEventMinutes: function() {
        document.querySelectorAll('input[type="number"]').forEach((input) => {
            input.addEventListener('input', (e) => {
                exerciceArray.map((exo) => {
                    if (exo.pic == e.target.id) {
                        exo.min = parseInt(e.target.value)
                        this.store();
                    }
                })
            })
        })
    },

    handleEventArrow: function() {
        document.querySelectorAll('.arrow').forEach((arrow) => {
            arrow.addEventListener('click', (e) => {
                let position = 0;
                exerciceArray.map((exo) => {
                    if (exo.pic == e.target.dataset.pic && position != 0) {
                        console.log('yes');
                        //echanger les elements dans le tableau 
                        [exerciceArray[position], exerciceArray[position - 1]] = [exerciceArray[position - 1], exerciceArray[position]]

                        page.lobby();
                        this.store();
                    } else {
                        position++;
                    }
                });
            })
        })

    },

    deleteItem: function() {
        document.querySelectorAll('.deleteBtn').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                let newArr = [];
                exerciceArray.map((exo) => {
                    if (exo.pic != e.target.dataset.pic) {
                        newArr.push(exo)
                    }
                });
                exerciceArray = newArr;
                console.log(newArr);
                page.lobby();
                this.store();
            });
        });
    },

    reboot: function() {
        exerciceArray = basicArray;
        page.lobby();
        this.store();
    },

    store: function() {
        localStorage.exercices = JSON.stringify(exerciceArray);
    }
};

const page = {

    lobby: function() {

        let mapArray = exerciceArray.map((exo) =>

            `            
        <li>
            <div class="card-header">
                <input type="number" id=${exo.pic} min="1" max="10" value=${exo.min}>  
                <span>Min</span>     
            </div>
            <img src="./img/${exo.pic}.png" />
            <i class="fas fa-arrow-alt-circle-left arrow" data-pic=${exo.pic}></i>
            <i class="fas fa-times-circle deleteBtn" data-pic=${exo.pic}></i>
        </li>
        `
        ).join("");

        utils.pageContent(
            "Paramétrage <i id='reboot' class='fas fa-undo'></i>",
            "<ul>" + mapArray + "</ul>",
            "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>"
        );
        utils.handleEventMinutes();
        utils.handleEventArrow();
        utils.deleteItem();
        reboot.addEventListener('click', () => utils.reboot());
        start.addEventListener('click', () => this.routine());

    },

    routine: function() {
        const exercice = new Exercice();
        utils.pageContent(
            "routine", exercice.updateCountdown(), null
        );
    },

    finish: function() {
        utils.pageContent(
            "C'estt terminé !",
            "<button id='start'>Recommencer</button>",
            "<button id='reboot' class='btn-reboot'>Réinitialiser <i class='fas fa-times-circle'></i></button>"
        );

        start.addEventListener('click', () => this.routine());
        reboot.addEventListener('click', () => utils.reboot());
    }
}
page.lobby();