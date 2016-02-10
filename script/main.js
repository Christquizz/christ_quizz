﻿$(function() {
    console.log("Page chargée !");
    // Atttacher listener sur 'submit' sur form
    $(document.form_debutant).submit(function (event) {
            console.log(this); // L'évènement submit est sur le formulaire
            event.preventDefault(); // Empecher le submit
            executer_questionnaire();
            /*createNewQuiz();
            return false;*/
           event.stopPropagation();
        }
    );
});


function executer_questionnaire(){
    $('<p>')
        .html('<label>') // créer élément label
        .html('Quel est le plus long verset de la Bible ?')
        .appendTo('#form_debutant');

    $('<p>')
        .html('<button class="bouton_enfant vrai">' + 'Esther 8 : 9' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="bouton_enfant">' + 'psaumes 5 : 9' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="bouton_enfant">' + 'Job 8 : 9' +'</button>')
        .appendTo('#form_debutant');

    $('<p>')
        .html('<label>') // créer élément label
        .html('Combien disciples Jésus avait-il ?')
        .appendTo('#form_debutant');

    $('<p>')
        .html('<button class="bouton_enfant">' + '40' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="bouton_enfant">' + '120' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="bouton_enfant  vrai">' + '12' +'</button>')
        .appendTo('#form_debutant');

    $('<p>')
        .html('<label>') // créer élément label
        .html('Quel est le plus court verset de la Bible ?')
        .appendTo('#form_debutant');

    $('<p>')
        .html('<button class="bouton_enfant ">' + 'Luc 11 : 35' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="bouton_enfant vrai">' + 'Jean 11 : 35' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="bouton_enfant">' + 'proverbes 11 : 35' +'</button>')
        .appendTo('#form_debutant');

    $('<p>')
        .html('<label>') // créer élément label
        .html('Lequel des disciple a-t-il trahi Jésus ?')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="bouton_enfant ">' + 'Jean' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="bouton_enfant vrai">' + 'Judas Iscariot' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="bouton_enfant">' + 'Jean Baptiste' +'</button>')
        .appendTo('#form_debutant');

    $('<p>')
        .html('<label>') // créer élément label
        .html('Qui prolongea sa vie de 15 ans par une prière ?')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="bouton_enfant ">' + 'Samson' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="bouton_enfant ">' + 'Salomon' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="bouton_enfant vrai">' + 'Ezéchias' +'</button>')
        .appendTo('#form_debutant');

   /* $(".bouton_enfant").click(function(event){
        event.preventDefault();
    });*/

   /* $('.bouton_enfant').click(function(e){
        e.stopPropagation();
    });*/


};




/*.children('span.suppr') // Descendre dans les span enfants (1 seul)
            .click(function(){ // Attacher listener 'click' sur span
                console.log(this); // On voit un span DOM
                $(this) // Reprise en jQuery du span DOM
                    .parent() // Remonter au parent jQuery
                    .remove(); // Détruire le parent
            })*/

var les_progress_bar = document.getElementsByClassName('debut');
les_progress_bar[0].onclick = move;
les_progress_bar[1].onclick  = move1;
les_progress_bar[2].onclick  = move2;

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
            if(width == 100){
                elem1.classList.toggle('chute');
            }
        }
    }
}

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
            if(width == 100){
                elem2.classList.toggle('chute');
            }
        }
    }
}

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
            if(width == 100){
                elem3.classList.toggle('chute');
            }
        }
    }
}


