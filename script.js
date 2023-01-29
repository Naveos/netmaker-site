//traduction

var langue = "francais"

function anglais() {
    document.getElementById('navbar_accueil').innerHTML = "Home";
    document.getElementById('navbar_nos_sites').innerHTML = "Our websites";
    document.getElementById('navbar_tarifs').innerHTML = "Our prices";
    document.getElementById('navbar_contact').innerHTML = "Contact us";
    document.getElementById('navbar_changer_langue').innerHTML = "Francais"

    langue = "anglais"
}

function francais() {
    document.getElementById('navbar_accueil').innerHTML = 'Accueil';
    document.getElementById('navbar_nos_sites').innerHTML = "Nos créations";
    document.getElementById('navbar_tarifs').innerHTML = "Nos tarifs";
    document.getElementById('navbar_contact').innerHTML = "Nous contacter";
    document.getElementById('navbar_changer_langue').innerHTML = "English";

    langue = "francais"
}

function changer_langue() {
    if (langue == "francais"){
        anglais()
    }
    else {
        francais()
    }
}