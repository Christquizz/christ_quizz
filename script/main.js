﻿window.onload = function(){
    //document.getElementById('bouton_qst_suivante').isDisabled = yes;
    document.getElementById('bouton_debuter').onclick = executer_questionnaire;
};


//création tableau des questions réponses

/*
questionnaire_niv1 = [
        ['Quel est le plus long verset de la Bible ?', 'Esther 8 : 9','psaumes 5 : 9','Job 8 : 9']
        ['Combien disciples Jésus avait-il ?', '120', '40', '12']
        ['Quel est le plus court verset de la Bible ?', 'Jean 11 : 35', 'Luc 11 : 35','proverbes 11 : 35']
        ['Lequel des disciple a-t-il trahi Jésus ?', 'Judas Iscariot', 'Jude','Jacques frère de Jésus']
                     ];

for (var i = 0; i <= questionnaire_niv1[i].length; i++ ){
    for (var j = 0; j <= questionnaire_niv1[i][j].length; j++ ){
            var question = questionnaire_niv1[i][0];
            var reponse1 = questionnaire_niv1[i][j];
            var reponse2 = questionnaire_niv1[i][j+1];
            var reponse3 = questionnaire_niv1[i][j+2];
*/

        function executer_questionnaire(){

            // Creation d'un nouvel élément label qui va contenir la question tirée au hasard
            var question1 = document.createElement('LABEL');
            document.getElementById('debutant').appendChild(question1);
            var text_label = document.createTextNode('question');
            question1.appendChild(text_label);

            // Creation d'un nouvel élément bouton qui va contenir le choix de réponse1 tirée au hasard
            var choix_reponse1 = document.createElement('BUTTON');
            document.getElementById('debutant').appendChild(choix_reponse1);
            var text_rep1 = document.createTextNode('reponse1');
            choix_reponse1.appendChild(text_rep1);

            // Creation d'un nouvel élément bouton qui va contenir le choix de réponse2 tirée au hasard
            var choix_reponse2 = document.createElement('BUTTON');
            document.getElementById('debutant').appendChild(choix_reponse2);
            var text_rep2 = document.createTextNode('reponse2');
            choix_reponse2.appendChild(text_rep2);

            // Creation d'un nouvel élément bouton qui va contenir le choix de réponse3 tirée au hasard
            var choix_reponse3 = document.createElement('BUTTON');
            document.getElementById('debutant').appendChild(choix_reponse3);
            var text_rep3 = document.createTextNode('reponse3');
            choix_reponse3.appendChild(text_rep3);

           /* // Activation du bouton "suivant" et désactivation du bouton "début"
            document.getElementById('bouton_qst_suivante').isDisabled = no;
            document.getElementById('bouton_debutant').isDisabled = yes;*/

        }





/*




var question_1;
var question_2;
var question_3;
var question_4;
var question_5;
var question_6;
var questionSet;
var sel_questions = new Array();

function createNewQuiz(){
    var question_1 = new Array();
    question_1[0] = 1; // single choice
    question_1[1] = "Who hosted 2008 Olympics?";
    question_1[2] = "China";
    question_1[3] = "USA";
    question_1[4] = "Australia";
    question_1[5] = "UK";
    question_1[6] = 2; // answer

    var question_2 = new Array();
    question_2[0] = 1; // single choice
    question_2[1] = "How many gold medals Australia did obtained?";
    question_2[2] = "13";
    question_2[3] = "14";
    question_2[4] = "15";
    question_3[0] = 2; // multi-choice
    question_3[1] = "Choose at least two disciplines that Australia obtained gold medals.";
    question_3[2] = "Basketball";
    question_3[3] = "Diving";
    question_3[4] = "Swimming";
    question_3[5] = "Rowing";
    question_3[6] = "3,4,5"; //answer index
    var question_4 = new Array();
    question_4[0] = 2; // multi-choice
    question_4[1] = "Choose at least two basketball players of USA team.";
    question_4[2] = "KIDD Jason";
    question_4[3] = "RUBIO Ricky";
    question_4[4] = "BOSH Chris";
    question_4[5] = "PRIGIONI Pablo";
    question_4[6] = "2,4"; //answer index
    var question_5 = new Array();
    question_5[0] = 3; // writing
    question_5[1] = "Choose three disciplines that Australia obtained gold medals.";
    question_5[2] = "Athletics, Basketball, Rowing, Sailing, Diving, Softball, Swimming";
    question_5[3] = "Athletics, Rowing, Sailing, Diving, Swimming";// Answers
    var question_6 = new Array();
    question_6[0] = 3; // writing
    question_6[1] = "Choose at least three swimmers.";
    question_6[2] = "MURPHY Patrick, RYAN Matt, McKENZIE-McHARG Cameron, MARBURG James, HACKETT Grant, BRITS Grant, FFROST Nick, PALMER Kirk, HEGERTY Francis, BRODIE Leith";
    question_6[3] = "MURPHY Patrick, HACKETT Grant, BRITS Grant, FFROST Nick, PALMER Kirk, BRODIE Leith";// Answers
    var questionSet = new Array(6);
    questionSet[0] = question_1;
    questionSet[1] = question_2;
    questionSet[2] = question_3;
    questionSet[3] = question_4;
    questionSet[4] = question_5;
    questionSet[5] = question_6;
    registerRandomQuestion();
}
function registerRandomQuestion()
{
    var totalQuestion = 6;
    for(rand = Math.floor(Math.random()*questionSet.length); rand>=0; rand = Math.floor((Math.random()*questionSet.length ){
        for(i = rand; i<sel_questions.length; i++){
            if(sel_questions[i] == rand){
                break;
            }
        else{
                sel_questions[sel_questions.length] = rand;
                createCookie(question_name, question_value, 1);
                return;
            }
        }
    }
}
function createCookie(cookie_name, cookie_value, days)
{
    document.cookie = cookie_value;
}
*/


//JavaScript Progress Bar....
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







