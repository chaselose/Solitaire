/**
 * Created by Chase on 10/26/2016.
 */

//Diamonds
var diA =  src = "cards/ace_of_diamonds.png";
var di2 =  src = "cards/2_of_diamonds.png";
var di3 =  src = "cards/3_of_diamonds.png";
var di4 =  src = "cards/4_of_diamonds.png";
var di5 =  src =  "cards/5_of_diamonds.png";
var di6 =  src =  "cards/6_of_diamonds.png";
var di7 =  src =  "cards/7_of_diamonds.png";
var di8 =  src =  "cards/8_of_diamonds.png";
var di9 =  src =  "cards/9_of_diamonds.png";
var di0 =  src =  "cards/10_of_diamonds.png";
var diJ =  src =  "cards/jack_of_diamonds2.png";
var diQ =  src =  "cards/queen_of_diamonds2.png";
var diK =  src =  "cards/king_of_diamonds2.png";

//Hearts
var hrtA = src =  "cards/ace_of_hearts.png";
var hrt2 = src =  "cards/2_of_hearts.png";
var hrt3 = src =  "cards/3_of_hearts.png";
var hrt4 = src =  "cards/4_of_hearts.png";
var hrt5 = src =  "cards/5_of_hearts.png";
var hrt6 = src =  "cards/6_of_hearts.png";
var hrt7 = src =  "cards/7_of_hearts.png";
var hrt8 = src =  "cards/8_of_hearts.png";
var hrt9 = src =  "cards/9_of_hearts.png";
var hrt0 = src =  "cards/10_of_hearts.png";
var hrtJ = src =  "cards/jack_of_hearts2.png";
var hrtQ = src =  "cards/queen_of_hearts2.png";
var hrtK = src =  "cards/king_of_hearts2.png";

//Clubs
var clbA = src =  "cards/ace_of_clubs.png";
var clb2 = src =  "cards/2_of_clubs.png";
var clb3 = src =  "cards/3_of_clubs.png";
var clb4 = src =  "cards/4_of_clubs.png";
var clb5 = src =  "cards/5_of_clubs.png";
var clb6 = src =  "cards/6_of_clubs.png";
var clb7 = src =  "cards/7_of_clubs.png";
var clb8 = src =  "cards/8_of_clubs.png";
var clb9 = src =  "cards/9_of_clubs.png";
var clb0 = src =  "cards/10_of_clubs.png";
var clbJ = src =  "cards/jack_of_clubs2.png";
var clbQ = src =  "cards/queen_of_clubs2.png";
var clbK = src =  "cards/king_of_clubs2.png";

//Spades
var spdA = src =  "cards/ace_of_spades.png";
var spd2 = src =  "cards/2_of_spades.png";
var spd3 = src =  "cards/3_of_spades.png";
var spd4 = src =  "cards/4_of_spades.png";
var spd5 = src =  "cards/5_of_spades.png";
var spd6 = src =  "cards/6_of_spades.png";
var spd7 = src =  "cards/7_of_spades.png";
var spd8 = src =  "cards/8_of_spades.png";
var spd9 = src =  "cards/9_of_spades.png";
var spd0 = src =  "cards/10_of_spades.png";
var spdJ = src =  "cards/jack_of_spades2.png";
var spdQ = src =  "cards/queen_of_spades2.png";
var spdK = src =  "cards/king_of_spades2.png";

function $(name){
    return document.getElementById(name)
}
    
function EnableCustom(){
    var isChecked = $("cst").checked;

    if(isChecked == true){
        $("cardback").disabled = false;
    }
    else{
        $("cardback").disabled = true;
    }
}

function Play(){
    var cardval;
   cardval = Math.floor((Math.random() * 52) + 1);

    if (cardval == 1){
        diA;
    }
    else if(cardval == 2){
        di2;
    }
    else if(cardval == 3){
        di3;
    }
    else if(cardval == 4){
        di4;
    }
    else if(cardval == 5){
        di5;
    }
    else if(cardval == 6){
        di6;
    }
    else if(cardval == 7){
        di7;
    }
    else if(cardval == 8){
        di8;
    }
    else if(cardval == 9){
        di9;
    }
    else if(cardval == 10){
        di0;
    }
    else if(cardval == 11){
        diJ;
    }
    else if(cardval == 12){
        diQ;
    }
    else if(cardval == 13){
        diK;
    }
    else if(cardval == 14){
        hrtA;
    }
    else if(cardval == 15){
        hrt2;
    }
    else if(cardval == 16){
        hrt3;
    }
    else if(cardval == 17){
        hrt4;
    }
    else if(cardval == 18){
        hrt5;
    }
    else if(cardval == 19){
        hrt6;
    }
    else if(cardval == 20){
        hrt7;
    }
    else if(cardval == 21){
        hrt8;
    }
    else if(cardval == 22){
        hrt9;
    }
    else if(cardval == 23){
        hrt0;
    }
    else if(cardval == 24){
        hrtJ;
    }
    else if(cardval == 25){
        hrtQ;
    }
    else if(cardval == 26){
        hrtK;
    }
    else if(cardval == 27){
        clbA;
    }
    else if(cardval == 28){
        clb2;
    }
    else if(cardval == 29){
        clb3;
    }
    else if(cardval == 30){
        clb4;
    }
    else if(cardval == 31){
        clb5;
    }
    else if(cardval == 32){
        clb6;
    }
    else if(cardval == 33){
        clb7;
    }
    else if(cardval == 34){
        clb8;
    }
    else if(cardval == 35){
        clb9;
    }
    else if(cardval == 36){
        clb0;
    }
    else if(cardval == 37){
        clbJ;
    }
    else if(cardval == 38){
        clbQ;
    }
    else if(cardval == 39){
        clbK;
    }
    else if(cardval == 40){
        spdA;
    }
    else if(cardval == 41){
        spd2;
    }
    else if(cardval == 42){
        spd3;
    }
    else if(cardval == 43){
        spd4;
    }
    else if(cardval == 44){
        spd5;
    }
    else if(cardval == 45){
        spd6;
    }
    else if(cardval == 46){
        spd7;
    }
    else if(cardval == 47){
        spd8;
    }
    else if(cardval == 48){
        spd9;
    }
    else if(cardval == 49){
        spd0;
    }
    else if(cardval == 50){
        spdJ;
    }
    else if(cardval == 51){
        spdQ;
    }
    else if(cardval == 52){
        spdK;
    }
}

var defult1 = $("dflt1").checked;
var defult2 = $("dflt2").checked;
var defult3 = $("dflt3").checked;
var card;

//This function block needs some work
function showImage(){
    if (isChecked == true){
        card = $("cardback").innerHTML;
    }
    else if (defult1 == true){
        card = "cards/back-1.png";
    }
    else if (defult2 == true){
        card = "cards/back-2.jpg";
    }
    else if (defult3 == true){
        card = "cards/back-3.jpg";
    }
    $("output").src = card;
}

// Main Menu buttons and options
function MainScreen(){
    window.location.href = "Main Screen.html"
}

function Options(){
    window.location.href = "Options.html"
}

function Play(){
    window.location.href = "Game.html"
}

//background color options


function changeColor(value){
    var color = document.body.style.backgroundColor;
    switch(value){
        case 'g':
            color = "green";
                break;
        case 'r':
            color = "red";
                break;
        case 'b':
            color = "blue";
                break;
        case 'p':
            color = "purple";
                break;
    }
    document.body.style.backgroundColor = color;
}
