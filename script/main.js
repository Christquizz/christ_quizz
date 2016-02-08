window.onload = function(){
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
    28

    29

    question_3[0] = 2; // multi-choice
    31
    question_3[1] = "Choose at least two disciplines that Australia obtained gold medals.";
    32
    question_3[2] = "Basketball";
    33
    question_3[3] = "Diving";
    34
    question_3[4] = "Swimming";
    35
    question_3[5] = "Rowing";
    36
    question_3[6] = "3,4,5"; //answer index
    37

    38
    var question_4 = new Array();
    39
    question_4[0] = 2; // multi-choice
    40
    question_4[1] = "Choose at least two basketball players of USA team.";
    41
    question_4[2] = "KIDD Jason";
    42
    question_4[3] = "RUBIO Ricky";
    43
    question_4[4] = "BOSH Chris";
    44
    question_4[5] = "PRIGIONI Pablo";
    45
    question_4[6] = "2,4"; //answer index
    46

    47
    var question_5 = new Array();
    48
    question_5[0] = 3; // writing
    49
    question_5[1] = "Choose three disciplines that Australia obtained gold medals.";
    50
    question_5[2] = "Athletics, Basketball, Rowing, Sailing, Diving, Softball, Swimming";
    51
    question_5[3] = "Athletics, Rowing, Sailing, Diving, Swimming";// Answers
    52

    53
    var question_6 = new Array();
    54
    question_6[0] = 3; // writing
    55
    question_6[1] = "Choose at least three swimmers.";
    56
    question_6[2] = "MURPHY Patrick, RYAN Matt, McKENZIE-McHARG Cameron, MARBURG James, HACKETT Grant, BRITS Grant, FFROST Nick, PALMER Kirk, HEGERTY Francis, BRODIE Leith";
    57
    question_6[3] = "MURPHY Patrick, HACKETT Grant, BRITS Grant, FFROST Nick, PALMER Kirk, BRODIE Leith";// Answers
    58

    59

    60

    61
    var questionSet = new Array(6);
    62
    questionSet[0] = question_1;
    63
    questionSet[1] = question_2;
    64
    questionSet[2] = question_3;
    65
    questionSet[3] = question_4;
    66
    questionSet[4] = question_5;
    67
    questionSet[5] = question_6;
    68

    69

    70

    71
    registerRandomQuestion();
    72
}
73

74
function registerRandomQuestion()
75
{
    76
    var totalQuestion = 6;
    77
    for(rand = Math.floor(Math.random()*questionSet.length); rand>=0; rand = Math.floor((Math.random()*questionSet.length ){
        78
        for(i = rand; i<sel_questions.length; i++){
            79
            if(sel_questions[i] == rand){
                80
                break;
                81
            }
            82
        else{
                83
                sel_questions[sel_questions.length] = rand;
                84
                createCookie(question_name, question_value, 1);
                85
                return;
                86
            }
            87
        }
        88
    }
    89
}
90

91
function createCookie(cookie_name, cookie_value, days)
92
{
    93
    document.cookie = cookie_value;
    94
}










