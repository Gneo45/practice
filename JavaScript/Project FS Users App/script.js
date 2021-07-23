//lien Api https://randomuser.me/api/?results=24

let userData;

const fetchUser = async() => { //sans le async le log ne renvoit rien car le fetch n'est pas terminé
    await fetch('https://randomuser.me/api/?results=24')
        .then((res) => res.json())
        .then((data) => userData = (data.results));

    console.log(userData[0]);
};

const userDisplay = async() => { // avant de maper le tableau User attend que fetch users() soit terminer
    await fetchUser();

    // transformer la date de naissance
    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric"
        })
        return newDate;
    };
    //calculer le temps d'inscription
    const dayCalc = (date) => {
            let today = new Date();
            let todayTimestamp = Date.parse(today);
            let timestamp = Date.parse(date)

            return Math.ceil((todayTimestamp - timestamp) / 8.64e7);
        }
        //recupere les elements de l'api et les injecter dans l'html
    document.body.innerHTML = userData.map((user) =>
        `
        <div class="card">
        <img src=${user.picture.large} alt="photo de ${user.name.last}">
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
        <em> Membres depuis: ${dayCalc(user.registered.date)} jours</em>

        </div>
    `
    ).join('')
};

userDisplay();