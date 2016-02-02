



window.onload = principale;

function principale (){
    console.log('Page chargée');
    var boutons = document.getElementsByTagName('BUTTON');
    console.log(boutons.length);

    // Maintenant on peut brancher les listeners
    boutons[0].onclick = ecrire;

}


function ecrire(){
    console.log(this);
}