window.onload = principale;

function principale (){
///**!/Pour masquer la division :
    console.log('Page chargée');
    $('#debutant').hide();
    $('#Intermediaire').hide();
    $('#avance').hide();

    var div_debutant = document.getElementById('debutant');
    console.log('div_debutant');
    div_debutant.onclick = afficher_dedutant;

    var div_inter = document.getElementById('Intermediaire');
    console.log('div_inter');
    div_inter.onclick = afficher_Intermediaire;

    var div_avance = document.getElementById('avance');
    console.log('div_avance');
    div_avance.onclick = afficher_avance;
}


function afficher_dedutant (){
    document.getElementById('debutant').style.visibility = "visible"; // Afficher le bloc div
}
function afficher_Intermediaire (){
    document.getElementById('Intermediaire').style.visibility = "visible"; // Afficher le bloc div
}
function afficher_avance (){
    document.getElementById('avance').style.visibility = "visible"; // Afficher le bloc div
}






/*
document.getElementById('ma_div').style.visibility = "visible"; // Afficher le bloc div
document.getElementById('ma_div').style.visibility = "hidden"; // Cacher le bloc div*/
