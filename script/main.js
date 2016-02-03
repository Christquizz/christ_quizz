



window.onload = principale;

function principale (){
///**!/Pour masquer la division :
    document.getElementById('debutant').style.display = none;
    console.log('Page chargée');
    var boutons = document.getElementsByTagName('BUTTON');

    console.log(boutons.length);

    // Maintenant on peut brancher les listeners
    boutons[0].onclick = ecrire;
}


function ecrire(){
    console.log(this);
}


///Pour afficher la division :
//document.getElementById(identifiant_de_ma_div).style.display = block;