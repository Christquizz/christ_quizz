$(function() {
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

var point = 0;

function executer_questionnaire(){
    $('<p>')
        .html('<label>') // créer élément label
        .html('Quel est le plus long verset de la Bible ?')
        .appendTo('#form_debutant');


    $('<p>')
        .html('<button class="vrai1 boutons1">' + 'Esther 8 : 9' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="faux boutons1">' + 'psaumes 5 : 9' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="faux boutons1">' + 'Job 8 : 9' +'</button>')
        .appendTo('#form_debutant');

    $('<p>')
        .html('<label>') // créer élément label
        .html('Combien disciples Jésus avait-il ?')
        .appendTo('#form_debutant');

    $('<p>')
        .html('<button class="faux boutons2">' + '40' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="faux boutons2">' + '120' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="vrai2 boutons2">' + '12' +'</button>')
        .appendTo('#form_debutant');


    $('<p>')
        .html('<label>') // créer élément label
        .html('Quel est le plus court verset de la Bible ?')
        .appendTo('#form_debutant');

    $('<p>')
        .html('<button class="faux boutons3">' + 'Luc 11 : 35' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="vrai3 boutons3">' + 'Jean 11 : 35' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="faux boutons3">' + 'proverbes 11 : 35' +'</button>')
        .appendTo('#form_debutant');


    $('<p>')
        .html('<label>') // créer élément label
        .html('Lequel des disciple a-t-il trahi Jésus ?')
        .appendTo('#form_debutant');

    $('<p>')
        .html('<button class="faux boutons4">' + 'Jean' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="vrai4 boutons4">' + 'Judas Iscariot' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="faux boutons4">' + 'Jean Baptiste' +'</button>')
        .appendTo('#form_debutant');


    $('<p>')
        .html('<label>') // créer élément label
        .html('Qui prolongea sa vie de 15 ans par une prière ?')
        .appendTo('#form_debutant');

    $('<p>')
        .html('<button class="faux boutons5">' + 'Samson' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="faux boutons5">' + 'Salomon' +'</button>')
        .appendTo('#form_debutant');
    $('<p>')
        .html('<button class="vrai5 boutons5">' + 'Ezéchias' +'</button>')
        .appendTo('#form_debutant');


    $(".bouton_enfant").click(function(event){
        event.preventDefault();
    });

   /* $('.bouton_enfant').click(function(e){
        e.stopPropagation();
    });*/

    /*if ($("#about").hasClass("opened")) {
        $("#about").animate({
            right: -700 + "px"
        }, 2000);*/

    $('.boutons1').on('click', function(){
        if($(this).hasClass('vrai1')  ){

            point += 2;
            var test = document.getElementsByClassName('boutons1');
            this.setAttribute("disabled", "disabled");
            test[0].setAttribute("disabled", "disabled");
            test[1].setAttribute("disabled", "disabled");
            test[2].setAttribute("disabled", "disabled");
        }else{
            point += 0;
            var test = document.getElementsByClassName('boutons1');
            this.setAttribute("disabled", "disabled");
            test[0].setAttribute("disabled", "disabled");
            test[1].setAttribute("disabled", "disabled");
            test[2].setAttribute("disabled", "disabled");
        }

        console.log(point);
    });

    $('.boutons2').on('click', function(){
        if($(this).hasClass('vrai2')  ){

            point += 2;
            var test1 = document.getElementsByClassName('boutons2');
            this.setAttribute("disabled", "disabled");
            test1[0].setAttribute("disabled", "disabled");
            test1[1].setAttribute("disabled", "disabled");
            test1[2].setAttribute("disabled", "disabled");
        }else{
            point += 0;
            var test1 = document.getElementsByClassName('boutons2');
            this.setAttribute("disabled", "disabled");
            test1[0].setAttribute("disabled", "disabled");
            test1[1].setAttribute("disabled", "disabled");
            test1[2].setAttribute("disabled", "disabled");
        }
        console.log(point);
    });

    $('.boutons3').on('click', function(){
        if($(this).hasClass('vrai3')  ){

            point += 2;
            var test2 = document.getElementsByClassName('boutons3');
            this.setAttribute("disabled", "disabled");
            test2[0].setAttribute("disabled", "disabled");
            test2[1].setAttribute("disabled", "disabled");
            test2[2].setAttribute("disabled", "disabled");
        }else{
            point += 0;
            var test2 = document.getElementsByClassName('boutons3');
            this.setAttribute("disabled", "disabled");
            tes2t[0].setAttribute("disabled", "disabled");
            test2[1].setAttribute("disabled", "disabled");
            test2[2].setAttribute("disabled", "disabled");
        }
        console.log(point);
    });

     $('.boutons4').on('click', function(){
         if($(this).hasClass('vrai4')  ){

            point += 2;
            var test3 = document.getElementsByClassName('boutons4');
            this.setAttribute("disabled", "disabled");
            test3[0].setAttribute("disabled", "disabled");
            test3[1].setAttribute("disabled", "disabled");
            test3[2].setAttribute("disabled", "disabled");
        }else{
            point += 0;
            var test3 = document.getElementsByClassName('boutons4');
            this.setAttribute("disabled", "disabled");
            test3[0].setAttribute("disabled", "disabled");
            tes3[1].setAttribute("disabled", "disabled");
            test3[2].setAttribute("disabled", "disabled");
        }
         console.log(point);
    });

     $('.boutons5').on('click', function(){
         if($(this).hasClass('vrai5')  ){

            point += 2;
            var test4 = document.getElementsByClassName('boutons5');
            this.setAttribute("disabled", "disabled");
            test4[0].setAttribute("disabled", "disabled");
            test4[1].setAttribute("disabled", "disabled");
            test4[2].setAttribute("disabled", "disabled");
        }else{
            point += 0;
            var test4 = document.getElementsByClassName('boutons5');
            this.setAttribute("disabled", "disabled");
            test4[0].setAttribute("disabled", "disabled");
            test4[1].setAttribute("disabled", "disabled");
            test4[2].setAttribute("disabled", "disabled");
        }


    });


   /* $('.faux').on('click', function(){
        this.setAttribute("disabled", "disabled");
    });
console.log(point);*/

};

var les_progress_bar = document.getElementsByClassName('debut');
les_progress_bar[0].onclick = move;
les_progress_bar[1].onclick = move1;
//les_progress_bar[2].onclick = move2;


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
                var test = document.getElementsByClassName('boutons1');
                var test1 = document.getElementsByClassName('boutons2');
                var test2 = document.getElementsByClassName('boutons3');
                var test3 = document.getElementsByClassName('boutons4');
                var test4 = document.getElementsByClassName('boutons5');
                test[0].setAttribute("disabled", "disabled");
                test[1].setAttribute("disabled", "disabled");
                test[2].setAttribute("disabled", "disabled");
                test1[0].setAttribute("disabled", "disabled");
                test1[1].setAttribute("disabled", "disabled");
                test1[2].setAttribute("disabled", "disabled");
                test2[0].setAttribute("disabled", "disabled");
                test2[1].setAttribute("disabled", "disabled");
                test2[2].setAttribute("disabled", "disabled");
                test3[0].setAttribute("disabled", "disabled");
                test3[1].setAttribute("disabled", "disabled");
                test3[2].setAttribute("disabled", "disabled");
                test4[0].setAttribute("disabled", "disabled");
                test4[1].setAttribute("disabled", "disabled");
                test4[2].setAttribute("disabled", "disabled");
                test5[0].setAttribute("disabled", "disabled");
                test5[1].setAttribute("disabled", "disabled");
                test5[2].setAttribute("disabled", "disabled");
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
                elem2.classList.toggle('chute')
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
            if(width == 100){ elem3.classList.toggle('chute')

            }
        }
    }
}

//Niveau intermédiaire



$("#soumettre_inter").click(function(event){
    event.preventDefault();
});
$("#soumettre_inter").on('click', function(){
   //if(document.getElementById('qst1_inter').value.toUpperCase.trim == 'unique'){
    if($('#qst1_inter').val() == 'unique'){
        point=point+2;
        document.getElementById('qst1_inter').classList.toggle('chute1')
    }else{
        point+=0;
        document.getElementById('qst1_inter').classList.toggle('chute')
    }
    if($('#qst2_inter').val() == 'jesus christ'){
   // if(document.getElementById('qst2_inter').value.toUpperCase.trim == 'jesus christ'){
        point=point+2;
        document.getElementById('qst2_inter').classList.toggle('chute1')
    }else{
        point+=0;
        document.getElementById('qst2_inter').classList.toggle('chute')
    }
    if($('#qst3_inter').val() == 'nul'){
   // if(document.getElementById('qst3_inter').value.toUpperCase.trim == 'nul'){
        point=point+2;
        document.getElementById('qst3_inter').classList.toggle('chute1')
    }else{
        point+=0;
        document.getElementById('qst3_inter').classList.toggle('chute')
    }
    if($('#qst4_inter').val() == 'salut'){
    //if(document.getElementById('qst4_inter').value.toUpperCase.trim == 'salut'){
        point=point+2;
        document.getElementById('qst4_inter').classList.toggle('chute1')
    }else{
        point+=0;
        document.getElementById('qst4_inter').classList.toggle('chute')
    }
    if($('#qst5_inter').val() == 'père'){
   // if(document.getElementById('qst5_inter').value.toUpperCase.trim == 'père'){
        point=point+2;
        document.getElementById('qst5_inter').classList.toggle('chute1')
    }else{
        point+=0;
        document.getElementById('qst5_inter').classList.toggle('chute')
    }
    console.log(point);

    $('<p>')
        .html('Le nombre de point que vous avez totalisé est: '+ point)
        .appendTo('#fragment-5')
});

$("#soumission").on('click', function(){
    event.preventDefault();
    $('<p>')
        .html('joueur en ligne: '+ $('#nom').val())
        .appendTo('.affich_nom');


});

$("form").submit(function(){
    event.preventDefault();
    return false;
});
