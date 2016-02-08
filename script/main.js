/*var bouton_debutant;
var bouton_inter;
var bouton_avance;
window.onload = principale;

function principale (){
///**!/Pour masquer la division :
    console.log('Page chargée');
    $('#debutant').hide();
    $('#Intermediaire').hide();
    $('#avance').hide();

     bouton_debutant = document.getElementById('niveau1');
    console.log('bouton_debutant');
    bouton_debutant.onclick = afficher_debutant;

     bouton_inter = document.getElementById('niveau2');
    console.log('bouton_inter');
    bouton_inter.onclick = afficher_Intermediaire;

     bouton_avance = document.getElementById('niveau3');
    console.log('bouton_avance');
    bouton_avance.onclick = afficher_avance;


    function afficher_debutant (){
        document.getElementById('debutant').style.visibility = "visible"; // Afficher le bloc div
    }
    function afficher_Intermediaire (){
        bouton_inter.style.visibility = "visible"; // Afficher le bloc div
    }
    function afficher_avance (){
        bouton_avance.style.visibility = "visible"; // Afficher le bloc div
    }
}*/

//JavaScript Progress Bar
var debut_progress_bar = document.getElementById('debut');
console.log(debut_progress_bar);
debut_progress_bar.onclick = move;

function move() {
    var elem = document.getElementsByClassName("myBar");
    var elem1 = elem[0];
    var width = 0;
    var id = setInterval(frame, 1000);
    function frame() {
        if (width == 100) {
            clearInterval(id);
        } else {
            width++;
            elem1.style.width = width + '%';
        }
    }
}

var debut_progress_bar1 = document.getElementById('debut1');
console.log(debut_progress_bar1);
debut_progress_bar1.onclick = move1;

function move1() {
    var elem = document.getElementsByClassName("myBar");
    var elem2 = elem[1];
    var width = 0;
    var id = setInterval(frame, 1000);
    function frame() {
        if (width == 100) {
            clearInterval(id);
        } else {
            width++;
            elem2.style.width = width + '%';
        }
    }
}

var debut_progress_bar2 = document.getElementById('debut2');
console.log(debut_progress_bar2);
debut_progress_bar2.onclick = move2;

function move2() {
    var elem = document.getElementsByClassName("myBar");
    var elem3 = elem[2];
    var width = 0;
    var id = setInterval(frame, 1000);
    function frame() {
        if (width == 100) {
            clearInterval(id);
        } else {
            width++;
            elem3.style.width = width + '%';
        }
    }
}







