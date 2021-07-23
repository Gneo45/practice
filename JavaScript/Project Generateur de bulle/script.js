const counterDisplay = document.querySelector('h3');
let counter = 0;


const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    //definir une taille de bulle aleatoire 
    const size = Math.random() * 100 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    //positionnement aleatoire sur l'absolute du css

    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    //injecter osscillement bulle sur la left
    // plusMinus ?=si math.random() > 0.5 renvoyer 1 sinon renvoyer -1 
    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");


    //click fait disparaitre la bulle
    bubble.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter;
        bubble.remove();
    });


    //definir le temps de vie de la bulle 
    setTimeout(() => {
        bubble.remove();
    }, 8000);
};
//ste interval, repeter une fonctino a intervalle regulier


//setInterval joue (fonction, tout les 3/10de seconde);
setInterval(bubbleMaker, 300);