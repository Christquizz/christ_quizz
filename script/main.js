



//window.onload = principale;

//function principale (){
/////**!/Pour masquer la division :
//    document.getElementById('debutant').style.display = none;
//    console.log('Page chargée');
//    var boutons = document.getElementsByTagName('BUTTON');
//
//    console.log(boutons.length);
//
//    // Maintenant on peut brancher les listeners
//    boutons[0].onclick = ecrire;
//}


//function ecrire(){
//    console.log(this);
//}


///Pour afficher la division :
function afficher_cacher(id)
{
    if (document.getElementById(id).style.visibility == "hidden")
    {
        document.getElementById(id).style.visibility = "visible";
        document.getElementById('niveau1_'+id).innerHTML = 'DEBUTANT';
    }
    else {
        document.getElementById(id).style.visibility = "hidden";
        document.getElementById('niveau1_'+id).innerHTML = 'DEBUTANT';
    }
    return true;
}