/**
 * Created by Chase on 10/26/2016.
 */

//Diamonds
var diA = "cards/ace_of_diamonds.png";
var di2 = "cards/2_of_diamonds.png";
var di3 = "cards/3_of_diamonds.png";
var di4 = "cards/4_of_diamonds.png";
var di5 = "cards/5_of_diamonds.png";
var di6 = "cards/6_of_diamonds.png";
var di7 = "cards/7_of_diamonds.png";
var di8 = "cards/8_of_diamonds.png";
var di9 = "cards/9_of_diamonds.png";
var di10 = "cards/10_of_diamonds.png";
var diJ = "cards/jack_of_diamonds2.png";
var diQ = "cards/queen_of_diamonds2.png";
var diK = "cards/king_of_diamonds2.png";

//Hearts
var hrtA = "cards/ace_of_hearts.png";
var hrt2 = "cards/2_of_hearts.png";
var hrt3 = "cards/3_of_hearts.png";
var hrt4 = "cards/4_of_hearts.png";
var hrt5 = "cards/5_of_hearts.png";
var hrt6 = "cards/6_of_hearts.png";
var hrt7 = "cards/7_of_hearts.png";
var hrt8 = "cards/8_of_hearts.png";
var hrt9 = "cards/9_of_hearts.png";
var hrt10 = "cards/10_of_hearts.png";
var hrtJ = "cards/jack_of_hearts2.png";
var hrtQ = "cards/queen_of_hearts2.png";
var hrtK = "cards/king_of_hearts2.png";

//Clubs
var clbA = "cards/ace_of_clubs.png";
var clb2 = "cards/2_of_clubs.png";
var clb3 = "cards/3_of_clubs.png";
var clb4 = "cards/4_of_clubs.png";
var clb5 = "cards/5_of_clubs.png";
var clb6 = "cards/6_of_clubs.png";
var clb7 = "cards/7_of_clubs.png";
var clb8 = "cards/8_of_clubs.png";
var clb9 = "cards/9_of_clubs.png";
var clb10 = "cards/10_of_clubs.png";
var clbJ = "cards/jack_of_clubs2.png";
var clbQ = "cards/queen_of_clubs2.png";
var clbK = "cards/king_of_clubs2.png";

//Spades
var spdA = "cards/ace_of_spades.png";
var spd2 = "cards/2_of_spades.png";
var spd3 = "cards/3_of_spades.png";
var spd4 = "cards/4_of_spades.png";
var spd5 = "cards/5_of_spades.png";
var spd6 = "cards/6_of_spades.png";
var spd7 = "cards/7_of_spades.png";
var spd8 = "cards/8_of_spades.png";
var spd9 = "cards/9_of_spades.png";
var spd10 = "cards/10_of_spades.png";
var spdJ = "cards/jack_of_spades2.png";
var spdQ = "cards/queen_of_spades2.png";
var spdK = "cards/king_of_spades2.png";

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

var card;
var defult1 = $("dflt1").checked;
var defult2 = $("dflt2").checked;
var defult3 = $("dflt3").checked;

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
    window.location.href = "Game.html";

    //RNG 1/2 done
    var MAX = 52;
    var drawNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
        45, 46, 47, 48,49, 50, 51, 52];
    for (i = 1 ; i <= 52; i++)
    {
        drawNum[1] = (int)(Math.random()*52)+1;
        if (drawNum = 1){
            $("div1-1").src = diA;
        }
        else if (drawNum = 2){
            $("div1-1").src = di2;
        }
        else if (drawNum = 3){
            $("div1-1").src = di3;
        }
        else if (drawNum = 4){
            $("div1-1").src = di4;
        }
        else if (drawNum = 5){
            $("div1-1").src = di5;
        }
        else if (drawNum = 6){
            $("div1-1").src = di6;
        }
        else if (drawNum = 7){
            $("div1-1").src = di7;
        }
        else if (drawNum = 8){
            $("div1-1").src = di8;
        }
        else if (drawNum = 9){
            $("div1-1").src = di9;
        }
        else if (drawNum = 10){
            $("div1-1").src = di10;
        }
        else if (drawNum = 11){
            $("div1-1").src = diJ;
        }
        else if (drawNum = 12){
            $("div1-1").src = diQ;
        }
        else if (drawNum = 13){
            $("div1-1").src = diK;
        }
        else if (drawNum = 14){
            $("div1-1").src = hrtA;
        }
        else if (drawNum = 15){
            $("div1-1").src = hrt2;
        }
        else if (drawNum = 16){
            $("div1-1").src = hrt3;
        }
        else if (drawNum = 17){
            $("div1-1").src = hrt4;
        }
        else if (drawNum = 18){
            $("div1-1").src = hrt5;
        }
        else if (drawNum = 19){
            $("div1-1").src = hrt6;
        }
        else if (drawNum = 20){
            $("div1-1").src = hrt7;
        }
        else if (drawNum = 21){
            $("div1-1").src = hrt8;
        }
        else if (drawNum = 22){
            $("div1-1").src = hrt9;
        }
        else if (drawNum = 23){
            $("div1-1").src = hrt10;
        }
        else if (drawNum = 24){
            $("div1-1").src = hrtJ;
        }
        else if (drawNum = 25){
            $("div1-1").src = hrtQ;
        }
        else if (drawNum = 26){
            $("div1-1").src = hrtK;
        }
        else if (drawNum = 27){
            $("div1-1").src = clbA;
        }
        else if (drawNum = 28){
            $("div1-1").src = clb2;
        }
        else if (drawNum = 29){
            $("div1-1").src = clb3;
        }
        else if (drawNum = 30){
            $("div1-1").src = clb4;
        }
        else if (drawNum = 31){
            $("div1-1").src = clb5;
        }
        else if (drawNum = 32){
            $("div1-1").src = clb6;
        }
        else if (drawNum = 33){
            $("div1-1").src = clb7;
        }
        else if (drawNum = 34){
            $("div1-1").src = clb8;
        }
        else if (drawNum = 35){
            $("div1-1").src = clb9;
        }
        else if (drawNum = 36){
            $("div1-1").src = clbJ;
        }
        else if (drawNum = 37){
            $("div1-1").src = clbQ;
        }
        else if (drawNum = 38){
            $("div1-1").src = clbK;
        }
        else if (drawNum = 39){
            $("div1-1").src = spdA;
        }
        else if (drawNum = 40){
            $("div1-1").src = spd2;
        }
        else if (drawNum = 41){
            $("div1-1").src = spd3;
        }
        else if (drawNum = 42){
            $("div1-1").src = spd4;
        }
        else if (drawNum = 43){
            $("div1-1").src = spd5;
        }
        else if (drawNum = 44){
            $("div1-1").src = spd6;
        }
        else if (drawNum = 45){
            $("div1-1").src = spd7;
        }
        else if (drawNum = 46){
            $("div1-1").src = spd8;
        }
        else if (drawNum = 47){
            $("div1-1").src = spd9;
        }
        else if (drawNum = 48){
            $("div1-1").src = spdJ;
        }
        else if (drawNum = 49){
            $("div1-1").src = spdQ;
        }
        else if (drawNum = 50){
            $("div1-1").src = spdK;
        }
        else if (drawNum = 51){
            $("div1-1").src = clb10;
        }
        else if (drawNum = 52){
            $("div1-1").src = spd10;
        }

        while (drawNum[2] == drawNum[1])
        {
            drawNum[2] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[3] == drawNum[1]) || (drawNum[3] == drawNum[2]) )
        {
            drawNum[3] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[4] == drawNum[1]) || (drawNum[4] == drawNum[2]) || (drawNum[4] == drawNum[3]) )
        {
            drawNum[4] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }

        }


        while ((drawNum[5] == drawNum[1]) || (drawNum[5] == drawNum[2]) || (drawNum[5] == drawNum[3]) || (drawNum[5] == drawNum[4]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[6] == drawNum[1]) || (drawNum[6] == drawNum[2]) || (drawNum[6] == drawNum[3]) || (drawNum[6] == drawNum[4]) || (drawNum[6] == drawNum[5]) )


        while ((drawNum[7] == drawNum[1]) || (drawNum[7] == drawNum[2]) || (drawNum[7] == drawNum[3]) || (drawNum[7] == drawNum[4]) || (drawNum[7] == drawNum[5]) || (drawNum[7]
        == drawNum[6]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[8] == drawNum[1]) || (drawNum[8] == drawNum[2]) || (drawNum[8] == drawNum[3]) || (drawNum[8] == drawNum[4]) || (drawNum[8] == drawNum[5]) || (drawNum[8]
        == drawNum[6]) || (drawNum[8] == drawNum[7])  )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[9] == drawNum[1]) || (drawNum[9] == drawNum[2]) || (drawNum[9] == drawNum[3]) || (drawNum[9] == drawNum[4]) || (drawNum[9] == drawNum[5]) || (drawNum[9]
            == drawNum[6]) || (drawNum[9] == drawNum[7]) || (drawNum[9] == drawNum[8]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[10] == drawNum[1]) || (drawNum[10] == drawNum[2]) || (drawNum[10] == drawNum[3]) || (drawNum[10] == drawNum[4]) || (drawNum[10] == drawNum[5]) || (drawNum[10]
        == drawNum[6]) || (drawNum[10] == drawNum[7]) || (drawNum[10] == drawNum[8]) || (drawNum[10] == drawNum[9]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[11] == drawNum[1]) || (drawNum[11] == drawNum[2]) || (drawNum[11] == drawNum[3]) || (drawNum[11] == drawNum[4]) || (drawNum[11] == drawNum[5]) || (drawNum[11]
        == drawNum[6]) || (drawNum[11] == drawNum[7]) || (drawNum[11] == drawNum[8]) || (drawNum[11] == drawNum[9]) || (drawNum[11] == drawNum[10]))
         {
        drawNum[5] = (int)(Math.random()*MAX)+1;
        if (drawNum = 1){
            $("div1-1").src = diA;
        }
        else if (drawNum = 2){
            $("div1-1").src = di2;
        }
        else if (drawNum = 3){
            $("div1-1").src = di3;
        }
        else if (drawNum = 4){
            $("div1-1").src = di4;
        }
        else if (drawNum = 5){
            $("div1-1").src = di5;
        }
        else if (drawNum = 6){
            $("div1-1").src = di6;
        }
        else if (drawNum = 7){
            $("div1-1").src = di7;
        }
        else if (drawNum = 8){
            $("div1-1").src = di8;
        }
        else if (drawNum = 9){
            $("div1-1").src = di9;
        }
        else if (drawNum = 10){
            $("div1-1").src = di10;
        }
        else if (drawNum = 11){
            $("div1-1").src = diJ;
        }
        else if (drawNum = 12){
            $("div1-1").src = diQ;
        }
        else if (drawNum = 13){
            $("div1-1").src = diK;
        }
        else if (drawNum = 14){
            $("div1-1").src = hrtA;
        }
        else if (drawNum = 15){
            $("div1-1").src = hrt2;
        }
        else if (drawNum = 16){
            $("div1-1").src = hrt3;
        }
        else if (drawNum = 17){
            $("div1-1").src = hrt4;
        }
        else if (drawNum = 18){
            $("div1-1").src = hrt5;
        }
        else if (drawNum = 19){
            $("div1-1").src = hrt6;
        }
        else if (drawNum = 20){
            $("div1-1").src = hrt7;
        }
        else if (drawNum = 21){
            $("div1-1").src = hrt8;
        }
        else if (drawNum = 22){
            $("div1-1").src = hrt9;
        }
        else if (drawNum = 23){
            $("div1-1").src = hrt10;
        }
        else if (drawNum = 24){
            $("div1-1").src = hrtJ;
        }
        else if (drawNum = 25){
            $("div1-1").src = hrtQ;
        }
        else if (drawNum = 26){
            $("div1-1").src = hrtK;
        }
        else if (drawNum = 27){
            $("div1-1").src = clbA;
        }
        else if (drawNum = 28){
            $("div1-1").src = clb2;
        }
        else if (drawNum = 29){
            $("div1-1").src = clb3;
        }
        else if (drawNum = 30){
            $("div1-1").src = clb4;
        }
        else if (drawNum = 31){
            $("div1-1").src = clb5;
        }
        else if (drawNum = 32){
            $("div1-1").src = clb6;
        }
        else if (drawNum = 33){
            $("div1-1").src = clb7;
        }
        else if (drawNum = 34){
            $("div1-1").src = clb8;
        }
        else if (drawNum = 35){
            $("div1-1").src = clb9;
        }
        else if (drawNum = 36){
            $("div1-1").src = clbJ;
        }
        else if (drawNum = 37){
            $("div1-1").src = clbQ;
        }
        else if (drawNum = 38){
            $("div1-1").src = clbK;
        }
        else if (drawNum = 39){
            $("div1-1").src = spdA;
        }
        else if (drawNum = 40){
            $("div1-1").src = spd2;
        }
        else if (drawNum = 41){
            $("div1-1").src = spd3;
        }
        else if (drawNum = 42){
            $("div1-1").src = spd4;
        }
        else if (drawNum = 43){
            $("div1-1").src = spd5;
        }
        else if (drawNum = 44){
            $("div1-1").src = spd6;
        }
        else if (drawNum = 45){
            $("div1-1").src = spd7;
        }
        else if (drawNum = 46){
            $("div1-1").src = spd8;
        }
        else if (drawNum = 47){
            $("div1-1").src = spd9;
        }
        else if (drawNum = 48){
            $("div1-1").src = spdJ;
        }
        else if (drawNum = 49){
            $("div1-1").src = spdQ;
        }
        else if (drawNum = 50){
            $("div1-1").src = spdK;
        }
        else if (drawNum = 51){
            $("div1-1").src = clb10;
        }
        else if (drawNum = 52){
            $("div1-1").src = spd10;
        }
    }


        while ((drawNum[12] == drawNum[1]) || (drawNum[12] == drawNum[2]) || (drawNum[12] == drawNum[3]) || (drawNum[12] == drawNum[4]) || (drawNum[12] == drawNum[5]) || (drawNum[12]
        == drawNum[6]) || (drawNum[12] == drawNum[7]) || (drawNum[12] == drawNum[8]) || (drawNum[12] == drawNum[9]) || (drawNum[12] == drawNum[10]) || (drawNum[12] == drawNum[11]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[13] == drawNum[1]) || (drawNum[13] == drawNum[2]) || (drawNum[13] == drawNum[3]) || (drawNum[13] == drawNum[4]) || (drawNum[13] == drawNum[5]) || (drawNum[13]
        == drawNum[6]) || (drawNum[13] == drawNum[7]) || (drawNum[13] == drawNum[8]) || (drawNum[13] == drawNum[9]) || (drawNum[13] == drawNum[10]) || (drawNum[13] == drawNum[11])
            || (drawNum[13] == drawNum[12]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[14] == drawNum[1]) || (drawNum[14] == drawNum[2]) || (drawNum[14] == drawNum[3]) || (drawNum[14] == drawNum[4]) || (drawNum[14] == drawNum[5]) || (drawNum[14]
        == drawNum[6]) || (drawNum[14] == drawNum[7]) || (drawNum[14] == drawNum[8]) || (drawNum[14] == drawNum[9]) || (drawNum[14] == drawNum[10]) || (drawNum[14] == drawNum[11])
        || (drawNum[14] == drawNum[12]) || (drawNum[14] == drawNum[13]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[15] == drawNum[1]) || (drawNum[15] == drawNum[2]) || (drawNum[15] == drawNum[3]) || (drawNum[15] == drawNum[4]) || (drawNum[15] == drawNum[5]) || (drawNum[15]
        == drawNum[6]) || (drawNum[15] == drawNum[7]) || (drawNum[15] == drawNum[8]) || (drawNum[15] == drawNum[9]) || (drawNum[15] == drawNum[10]) || (drawNum[15] == drawNum[11])
        || (drawNum[15] == drawNum[12]) || (drawNum[15] == drawNum[13]) || (drawNum[15] == drawNum[14]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[16] == drawNum[1]) || (drawNum[16] == drawNum[2]) || (drawNum[16] == drawNum[3]) || (drawNum[16] == drawNum[4]) || (drawNum[16] == drawNum[5]) || (drawNum[16]
        == drawNum[6]) || (drawNum[16] == drawNum[7]) || (drawNum[16] == drawNum[8]) || (drawNum[16] == drawNum[9]) || (drawNum[16] == drawNum[10]) || (drawNum[16] == drawNum[11])
        || (drawNum[16] == drawNum[12]) || (drawNum[16] == drawNum[13]) || (drawNum[16] == drawNum[14]) || (drawNum[16] == drawNum[15]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[17] == drawNum[1]) || (drawNum[17] == drawNum[2]) || (drawNum[17] == drawNum[3]) || (drawNum[17] == drawNum[4]) || (drawNum[17] == drawNum[5]) || (drawNum[17]
        == drawNum[6]) || (drawNum[17] == drawNum[7]) || (drawNum[17] == drawNum[8]) || (drawNum[17] == drawNum[9]) || (drawNum[17] == drawNum[10]) || (drawNum[17] == drawNum[11])
        || (drawNum[17] == drawNum[12]) || (drawNum[17] == drawNum[13]) || (drawNum[17] == drawNum[14]) || (drawNum[17] == drawNum[15]) || (drawNum[17] == drawNum[16]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[17] == drawNum[1]) || (drawNum[17] == drawNum[2]) || (drawNum[17] == drawNum[3]) || (drawNum[17] == drawNum[4]) || (drawNum[17] == drawNum[5]) || (drawNum[17]
        == drawNum[6]) || (drawNum[17] == drawNum[7]) || (drawNum[17] == drawNum[8]) || (drawNum[17] == drawNum[9]) || (drawNum[17] == drawNum[10]) || (drawNum[17] == drawNum[11])
        || (drawNum[17] == drawNum[12]) || (drawNum[17] == drawNum[13]) || (drawNum[17] == drawNum[14]) || (drawNum[17] == drawNum[15]) || (drawNum[17] == drawNum[16]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[18] == drawNum[1]) || (drawNum[18] == drawNum[2]) || (drawNum[18] == drawNum[3]) || (drawNum[18] == drawNum[4]) || (drawNum[18] == drawNum[5]) || (drawNum[18]
        == drawNum[6]) || (drawNum[18] == drawNum[7]) || (drawNum[18] == drawNum[8]) || (drawNum[18] == drawNum[9]) || (drawNum[18] == drawNum[10]) || (drawNum[18] == drawNum[11])
        || (drawNum[18] == drawNum[12]) || (drawNum[18] == drawNum[13]) || (drawNum[18] == drawNum[14]) || (drawNum[18] == drawNum[15]) || (drawNum[18] == drawNum[16])
        || (drawNum[18] == drawNum[17]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[19] == drawNum[1]) || (drawNum[19] == drawNum[2]) || (drawNum[19] == drawNum[3]) || (drawNum[19] == drawNum[4]) || (drawNum[19] == drawNum[5]) || (drawNum[19]
        == drawNum[6]) || (drawNum[19] == drawNum[7]) || (drawNum[19] == drawNum[8]) || (drawNum[19] == drawNum[9]) || (drawNum[19] == drawNum[10]) || (drawNum[19] == drawNum[11])
        || (drawNum[19] == drawNum[12]) || (drawNum[19] == drawNum[13]) || (drawNum[19] == drawNum[14]) || (drawNum[19] == drawNum[15]) || (drawNum[19] == drawNum[16])
        || (drawNum[19] == drawNum[17]) || (drawNum[19] == drawNum[18]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[20] == drawNum[1]) || (drawNum[20] == drawNum[2]) || (drawNum[20] == drawNum[3]) || (drawNum[20] == drawNum[4]) || (drawNum[20] == drawNum[5]) || (drawNum[20]
        == drawNum[6]) || (drawNum[20] == drawNum[7]) || (drawNum[20] == drawNum[8]) || (drawNum[20] == drawNum[9]) || (drawNum[20] == drawNum[10]) || (drawNum[20] == drawNum[11])
        || (drawNum[20] == drawNum[12]) || (drawNum[20] == drawNum[13]) || (drawNum[20] == drawNum[14]) || (drawNum[20] == drawNum[15]) || (drawNum[20] == drawNum[16])
        || (drawNum[20] == drawNum[17]) || (drawNum[20] == drawNum[18]) || (drawNum[20] == drawNum[19]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[21] == drawNum[1]) || (drawNum[21] == drawNum[2]) || (drawNum[21] == drawNum[3]) || (drawNum[21] == drawNum[4]) || (drawNum[21] == drawNum[5]) || (drawNum[21]
        == drawNum[6]) || (drawNum[21] == drawNum[7]) || (drawNum[21] == drawNum[8]) || (drawNum[21] == drawNum[9]) || (drawNum[21] == drawNum[10]) || (drawNum[21] == drawNum[11])
        || (drawNum[21] == drawNum[12]) || (drawNum[21] == drawNum[13]) || (drawNum[21] == drawNum[14]) || (drawNum[21] == drawNum[15]) || (drawNum[21] == drawNum[16])
        || (drawNum[21] == drawNum[17]) || (drawNum[21] == drawNum[18]) || (drawNum[21] == drawNum[19]) || (drawNum[21] == drawNum[20]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[22] == drawNum[1]) || (drawNum[22] == drawNum[2]) || (drawNum[22] == drawNum[3]) || (drawNum[22] == drawNum[4]) || (drawNum[22] == drawNum[5]) || (drawNum[22]
        == drawNum[6]) || (drawNum[22] == drawNum[7]) || (drawNum[22] == drawNum[8]) || (drawNum[22] == drawNum[9]) || (drawNum[22] == drawNum[10]) || (drawNum[22] == drawNum[11])
        || (drawNum[22] == drawNum[12]) || (drawNum[22] == drawNum[13]) || (drawNum[22] == drawNum[14]) || (drawNum[22] == drawNum[15]) || (drawNum[22] == drawNum[16])
        || (drawNum[22] == drawNum[17]) || (drawNum[22] == drawNum[18]) || (drawNum[22] == drawNum[19]) || (drawNum[22] == drawNum[20]) || (drawNum[22] == drawNum[21]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[23] == drawNum[1]) || (drawNum[23] == drawNum[2]) || (drawNum[23] == drawNum[3]) || (drawNum[23] == drawNum[4]) || (drawNum[23] == drawNum[5]) || (drawNum[23]
        == drawNum[6]) || (drawNum[23] == drawNum[7]) || (drawNum[23] == drawNum[8]) || (drawNum[23] == drawNum[9]) || (drawNum[23] == drawNum[10]) || (drawNum[23] == drawNum[11])
        || (drawNum[23] == drawNum[12]) || (drawNum[23] == drawNum[13]) || (drawNum[23] == drawNum[14]) || (drawNum[23] == drawNum[15]) || (drawNum[23] == drawNum[16])
        || (drawNum[23] == drawNum[17]) || (drawNum[23] == drawNum[18]) || (drawNum[23] == drawNum[19]) || (drawNum[23] == drawNum[20]) || (drawNum[23] == drawNum[21])
        || (drawNum[23] == drawNum[22]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[24] == drawNum[1]) || (drawNum[24] == drawNum[2]) || (drawNum[24] == drawNum[3]) || (drawNum[24] == drawNum[4]) || (drawNum[24] == drawNum[5]) || (drawNum[24]
        == drawNum[6]) || (drawNum[24] == drawNum[7]) || (drawNum[24] == drawNum[8]) || (drawNum[24] == drawNum[9]) || (drawNum[24] == drawNum[10]) || (drawNum[24] == drawNum[11])
        || (drawNum[24] == drawNum[12]) || (drawNum[24] == drawNum[13]) || (drawNum[24] == drawNum[14]) || (drawNum[24] == drawNum[15]) || (drawNum[24] == drawNum[16])
        || (drawNum[24] == drawNum[17]) || (drawNum[24] == drawNum[18]) || (drawNum[24] == drawNum[19]) || (drawNum[24] == drawNum[20]) || (drawNum[24] == drawNum[21])
        || (drawNum[24] == drawNum[22]) || (drawNum[24] == drawNum[23]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[25] == drawNum[1]) || (drawNum[25] == drawNum[2]) || (drawNum[25] == drawNum[3]) || (drawNum[25] == drawNum[4]) || (drawNum[25] == drawNum[5]) || (drawNum[25]
        == drawNum[6]) || (drawNum[25] == drawNum[7]) || (drawNum[25] == drawNum[8]) || (drawNum[25] == drawNum[9]) || (drawNum[25] == drawNum[10]) || (drawNum[25] == drawNum[11])
        || (drawNum[25] == drawNum[12]) || (drawNum[25] == drawNum[13]) || (drawNum[25] == drawNum[14]) || (drawNum[25] == drawNum[15]) || (drawNum[25] == drawNum[16])
        || (drawNum[25] == drawNum[17]) || (drawNum[25] == drawNum[18]) || (drawNum[25] == drawNum[19]) || (drawNum[25] == drawNum[20]) || (drawNum[25] == drawNum[21])
        || (drawNum[25] == drawNum[22]) || (drawNum[25] == drawNum[23]) || (drawNum[25] == drawNum[24]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }


        while ((drawNum[26] == drawNum[1]) || (drawNum[26] == drawNum[2]) || (drawNum[26] == drawNum[3]) || (drawNum[26] == drawNum[4]) || (drawNum[26] == drawNum[5]) || (drawNum[26]
        == drawNum[6]) || (drawNum[26] == drawNum[7]) || (drawNum[26] == drawNum[8]) || (drawNum[26] == drawNum[9]) || (drawNum[26] == drawNum[10]) || (drawNum[26] == drawNum[11])
        || (drawNum[26] == drawNum[12]) || (drawNum[26] == drawNum[13]) || (drawNum[26] == drawNum[14]) || (drawNum[26] == drawNum[15]) || (drawNum[26] == drawNum[16])
        || (drawNum[26] == drawNum[17]) || (drawNum[26] == drawNum[18]) || (drawNum[26] == drawNum[19]) || (drawNum[26] == drawNum[20]) || (drawNum[26] == drawNum[21])
        || (drawNum[26] == drawNum[22]) || (drawNum[26] == drawNum[23]) || (drawNum[26] == drawNum[24]) || (drawNum[26] == drawNum[25]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[27] == drawNum[1]) || (drawNum[27] == drawNum[2]) || (drawNum[27] == drawNum[3]) || (drawNum[27] == drawNum[4]) || (drawNum[27] == drawNum[5]) || (drawNum[27]
        == drawNum[6]) || (drawNum[27] == drawNum[7]) || (drawNum[27] == drawNum[8]) || (drawNum[27] == drawNum[9]) || (drawNum[27] == drawNum[10]) || (drawNum[27] == drawNum[11])
        || (drawNum[27] == drawNum[12]) || (drawNum[27] == drawNum[13]) || (drawNum[27] == drawNum[14]) || (drawNum[27] == drawNum[15]) || (drawNum[27] == drawNum[16])
        || (drawNum[27] == drawNum[17]) || (drawNum[27] == drawNum[18]) || (drawNum[27] == drawNum[19]) || (drawNum[27] == drawNum[20]) || (drawNum[27] == drawNum[21])
        || (drawNum[27] == drawNum[22]) || (drawNum[27] == drawNum[23]) || (drawNum[27] == drawNum[24]) || (drawNum[27] == drawNum[25]) || (drawNum[27] == drawNum[26]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[28] == drawNum[1]) || (drawNum[28] == drawNum[2]) || (drawNum[28] == drawNum[3]) || (drawNum[28] == drawNum[4]) || (drawNum[28] == drawNum[5]) || (drawNum[28]
        == drawNum[6]) || (drawNum[28] == drawNum[7]) || (drawNum[28] == drawNum[8]) || (drawNum[28] == drawNum[9]) || (drawNum[28] == drawNum[10]) || (drawNum[28] == drawNum[11])
        || (drawNum[28] == drawNum[12]) || (drawNum[28] == drawNum[13]) || (drawNum[28] == drawNum[14]) || (drawNum[28] == drawNum[15]) || (drawNum[28] == drawNum[16])
        || (drawNum[28] == drawNum[17]) || (drawNum[28] == drawNum[18]) || (drawNum[28] == drawNum[19]) || (drawNum[28] == drawNum[20]) || (drawNum[28] == drawNum[21])
        || (drawNum[28] == drawNum[22]) || (drawNum[28] == drawNum[23]) || (drawNum[28] == drawNum[24]) || (drawNum[28] == drawNum[25]) || (drawNum[28] == drawNum[26])
        || (drawNum[28] == drawNum[27]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[29] == drawNum[1]) || (drawNum[29] == drawNum[2]) || (drawNum[29] == drawNum[3]) || (drawNum[29] == drawNum[4]) || (drawNum[29] == drawNum[5]) || (drawNum[29]
        == drawNum[6]) || (drawNum[29] == drawNum[7]) || (drawNum[29] == drawNum[8]) || (drawNum[29] == drawNum[9]) || (drawNum[29] == drawNum[10]) || (drawNum[29] == drawNum[11])
        || (drawNum[29] == drawNum[12]) || (drawNum[29] == drawNum[13]) || (drawNum[29] == drawNum[14]) || (drawNum[29] == drawNum[15]) || (drawNum[29] == drawNum[16])
        || (drawNum[29] == drawNum[17]) || (drawNum[29] == drawNum[18]) || (drawNum[29] == drawNum[19]) || (drawNum[29] == drawNum[20]) || (drawNum[29] == drawNum[21])
        || (drawNum[29] == drawNum[22]) || (drawNum[29] == drawNum[23]) || (drawNum[29] == drawNum[24]) || (drawNum[29] == drawNum[25]) || (drawNum[29] == drawNum[26])
        || (drawNum[29] == drawNum[27]) || (drawNum[29] == drawNum[28]) )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[30] == drawNum[1]) || (drawNum[30] == drawNum[2]) || (drawNum[30] == drawNum[3]) || (drawNum[30] == drawNum[4]) || (drawNum[30] == drawNum[5]) || (drawNum[30]
        == drawNum[6]) || (drawNum[30] == drawNum[7]) || (drawNum[30] == drawNum[8]) || (drawNum[30] == drawNum[9]) || (drawNum[30] == drawNum[10]) || (drawNum[30] == drawNum[11])
        || (drawNum[30] == drawNum[12]) || (drawNum[30] == drawNum[13]) || (drawNum[30] == drawNum[14]) || (drawNum[30] == drawNum[15]) || (drawNum[30] == drawNum[16])
        || (drawNum[30] == drawNum[17]) || (drawNum[30] == drawNum[18]) || (drawNum[30] == drawNum[19]) || (drawNum[30] == drawNum[20]) || (drawNum[30] == drawNum[21])
        || (drawNum[30] == drawNum[22]) || (drawNum[30] == drawNum[23]) || (drawNum[30] == drawNum[24]) || (drawNum[30] == drawNum[25]) || (drawNum[30] == drawNum[26])
        || (drawNum[30] == drawNum[27]) || (drawNum[30] == drawNum[28]) || (drawNum[30] == drawNum[29])  )
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[31] == drawNum[1]) || (drawNum[31] == drawNum[2]) || (drawNum[31] == drawNum[3]) || (drawNum[31] == drawNum[4]) || (drawNum[31] == drawNum[5]) || (drawNum[31]
        == drawNum[6]) || (drawNum[31] == drawNum[7]) || (drawNum[31] == drawNum[8]) || (drawNum[31] == drawNum[9]) || (drawNum[31] == drawNum[10]) || (drawNum[31] == drawNum[11])
        || (drawNum[31] == drawNum[12]) || (drawNum[31] == drawNum[13]) || (drawNum[31] == drawNum[14]) || (drawNum[31] == drawNum[15]) || (drawNum[31] == drawNum[16])
        || (drawNum[31] == drawNum[17]) || (drawNum[31] == drawNum[18]) || (drawNum[31] == drawNum[19]) || (drawNum[31] == drawNum[20]) || (drawNum[31] == drawNum[21])
        || (drawNum[31] == drawNum[22]) || (drawNum[31] == drawNum[23]) || (drawNum[31] == drawNum[24]) || (drawNum[31] == drawNum[25]) || (drawNum[31] == drawNum[26])
        || (drawNum[31] == drawNum[27]) || (drawNum[31] == drawNum[28]) || (drawNum[31] == drawNum[29]) || (drawNum[31] == drawNum[30]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[32] == drawNum[1]) || (drawNum[32] == drawNum[2]) || (drawNum[32] == drawNum[3]) || (drawNum[32] == drawNum[4]) || (drawNum[32] == drawNum[5]) || (drawNum[32]
        == drawNum[6]) || (drawNum[32] == drawNum[7]) || (drawNum[32] == drawNum[8]) || (drawNum[32] == drawNum[9]) || (drawNum[32] == drawNum[10]) || (drawNum[32] == drawNum[11])
        || (drawNum[32] == drawNum[12]) || (drawNum[32] == drawNum[13]) || (drawNum[32] == drawNum[14]) || (drawNum[32] == drawNum[15]) || (drawNum[32] == drawNum[16])
        || (drawNum[32] == drawNum[17]) || (drawNum[32] == drawNum[18]) || (drawNum[32] == drawNum[19]) || (drawNum[32] == drawNum[20]) || (drawNum[32] == drawNum[21])
        || (drawNum[32] == drawNum[22]) || (drawNum[32] == drawNum[23]) || (drawNum[32] == drawNum[24]) || (drawNum[32] == drawNum[25]) || (drawNum[32] == drawNum[26])
        || (drawNum[32] == drawNum[27]) || (drawNum[32] == drawNum[28]) || (drawNum[32] == drawNum[29]) || (drawNum[32] == drawNum[30])|| (drawNum[32] == drawNum[31]))
        {
        drawNum[5] = (int)(Math.random()*MAX)+1;
        if (drawNum = 1){
            $("div1-1").src = diA;
        }
        else if (drawNum = 2){
            $("div1-1").src = di2;
        }
        else if (drawNum = 3){
            $("div1-1").src = di3;
        }
        else if (drawNum = 4){
            $("div1-1").src = di4;
        }
        else if (drawNum = 5){
            $("div1-1").src = di5;
        }
        else if (drawNum = 6){
            $("div1-1").src = di6;
        }
        else if (drawNum = 7){
            $("div1-1").src = di7;
        }
        else if (drawNum = 8){
            $("div1-1").src = di8;
        }
        else if (drawNum = 9){
            $("div1-1").src = di9;
        }
        else if (drawNum = 10){
            $("div1-1").src = di10;
        }
        else if (drawNum = 11){
            $("div1-1").src = diJ;
        }
        else if (drawNum = 12){
            $("div1-1").src = diQ;
        }
        else if (drawNum = 13){
            $("div1-1").src = diK;
        }
        else if (drawNum = 14){
            $("div1-1").src = hrtA;
        }
        else if (drawNum = 15){
            $("div1-1").src = hrt2;
        }
        else if (drawNum = 16){
            $("div1-1").src = hrt3;
        }
        else if (drawNum = 17){
            $("div1-1").src = hrt4;
        }
        else if (drawNum = 18){
            $("div1-1").src = hrt5;
        }
        else if (drawNum = 19){
            $("div1-1").src = hrt6;
        }
        else if (drawNum = 20){
            $("div1-1").src = hrt7;
        }
        else if (drawNum = 21){
            $("div1-1").src = hrt8;
        }
        else if (drawNum = 22){
            $("div1-1").src = hrt9;
        }
        else if (drawNum = 23){
            $("div1-1").src = hrt10;
        }
        else if (drawNum = 24){
            $("div1-1").src = hrtJ;
        }
        else if (drawNum = 25){
            $("div1-1").src = hrtQ;
        }
        else if (drawNum = 26){
            $("div1-1").src = hrtK;
        }
        else if (drawNum = 27){
            $("div1-1").src = clbA;
        }
        else if (drawNum = 28){
            $("div1-1").src = clb2;
        }
        else if (drawNum = 29){
            $("div1-1").src = clb3;
        }
        else if (drawNum = 30){
            $("div1-1").src = clb4;
        }
        else if (drawNum = 31){
            $("div1-1").src = clb5;
        }
        else if (drawNum = 32){
            $("div1-1").src = clb6;
        }
        else if (drawNum = 33){
            $("div1-1").src = clb7;
        }
        else if (drawNum = 34){
            $("div1-1").src = clb8;
        }
        else if (drawNum = 35){
            $("div1-1").src = clb9;
        }
        else if (drawNum = 36){
            $("div1-1").src = clbJ;
        }
        else if (drawNum = 37){
            $("div1-1").src = clbQ;
        }
        else if (drawNum = 38){
            $("div1-1").src = clbK;
        }
        else if (drawNum = 39){
            $("div1-1").src = spdA;
        }
        else if (drawNum = 40){
            $("div1-1").src = spd2;
        }
        else if (drawNum = 41){
            $("div1-1").src = spd3;
        }
        else if (drawNum = 42){
            $("div1-1").src = spd4;
        }
        else if (drawNum = 43){
            $("div1-1").src = spd5;
        }
        else if (drawNum = 44){
            $("div1-1").src = spd6;
        }
        else if (drawNum = 45){
            $("div1-1").src = spd7;
        }
        else if (drawNum = 46){
            $("div1-1").src = spd8;
        }
        else if (drawNum = 47){
            $("div1-1").src = spd9;
        }
        else if (drawNum = 48){
            $("div1-1").src = spdJ;
        }
        else if (drawNum = 49){
            $("div1-1").src = spdQ;
        }
        else if (drawNum = 50){
            $("div1-1").src = spdK;
        }
        else if (drawNum = 51){
            $("div1-1").src = clb10;
        }
        else if (drawNum = 52){
            $("div1-1").src = spd10;
        }
    }

        while ((drawNum[33] == drawNum[1]) || (drawNum[33] == drawNum[2]) || (drawNum[33] == drawNum[3]) || (drawNum[33] == drawNum[4]) || (drawNum[33] == drawNum[5]) || (drawNum[33]
        == drawNum[6]) || (drawNum[33] == drawNum[7]) || (drawNum[33] == drawNum[8]) || (drawNum[33] == drawNum[9]) || (drawNum[33] == drawNum[10]) || (drawNum[33] == drawNum[11])
        || (drawNum[33] == drawNum[12]) || (drawNum[33] == drawNum[13]) || (drawNum[33] == drawNum[14]) || (drawNum[33] == drawNum[15]) || (drawNum[33] == drawNum[16])
        || (drawNum[33] == drawNum[17]) || (drawNum[33] == drawNum[18]) || (drawNum[33] == drawNum[19]) || (drawNum[33] == drawNum[20]) || (drawNum[33] == drawNum[21])
        || (drawNum[33] == drawNum[22]) || (drawNum[33] == drawNum[23]) || (drawNum[33] == drawNum[24]) || (drawNum[33] == drawNum[25]) || (drawNum[33] == drawNum[26])
        || (drawNum[33] == drawNum[27]) || (drawNum[33] == drawNum[28]) || (drawNum[33] == drawNum[29]) || (drawNum[33] == drawNum[30])|| (drawNum[33] == drawNum[31])
        || (drawNum[33] == drawNum[32]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[34] == drawNum[1]) || (drawNum[34] == drawNum[2]) || (drawNum[34] == drawNum[3]) || (drawNum[34] == drawNum[4]) || (drawNum[34] == drawNum[5]) || (drawNum[34]
        == drawNum[6]) || (drawNum[34] == drawNum[7]) || (drawNum[34] == drawNum[8]) || (drawNum[34] == drawNum[9]) || (drawNum[34] == drawNum[10]) || (drawNum[34] == drawNum[11])
        || (drawNum[34] == drawNum[12]) || (drawNum[34] == drawNum[13]) || (drawNum[34] == drawNum[14]) || (drawNum[34] == drawNum[15]) || (drawNum[34] == drawNum[16])
        || (drawNum[34] == drawNum[17]) || (drawNum[34] == drawNum[18]) || (drawNum[34] == drawNum[19]) || (drawNum[34] == drawNum[20]) || (drawNum[34] == drawNum[21])
        || (drawNum[34] == drawNum[22]) || (drawNum[34] == drawNum[23]) || (drawNum[34] == drawNum[24]) || (drawNum[34] == drawNum[25]) || (drawNum[34] == drawNum[26])
        || (drawNum[34] == drawNum[27]) || (drawNum[34] == drawNum[28]) || (drawNum[34] == drawNum[29]) || (drawNum[34] == drawNum[30])|| (drawNum[34] == drawNum[31])
        || (drawNum[34] == drawNum[32])|| (drawNum[34] == drawNum[33]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[35] == drawNum[1]) || (drawNum[35] == drawNum[2]) || (drawNum[35] == drawNum[3]) || (drawNum[35] == drawNum[4]) || (drawNum[35] == drawNum[5]) || (drawNum[35]
        == drawNum[6]) || (drawNum[35] == drawNum[7]) || (drawNum[35] == drawNum[8]) || (drawNum[35] == drawNum[9]) || (drawNum[35] == drawNum[10]) || (drawNum[35] == drawNum[11])
        || (drawNum[35] == drawNum[12]) || (drawNum[35] == drawNum[13]) || (drawNum[35] == drawNum[14]) || (drawNum[35] == drawNum[15]) || (drawNum[35] == drawNum[16])
        || (drawNum[35] == drawNum[17]) || (drawNum[35] == drawNum[18]) || (drawNum[35] == drawNum[19]) || (drawNum[35] == drawNum[20]) || (drawNum[35] == drawNum[21])
        || (drawNum[35] == drawNum[22]) || (drawNum[35] == drawNum[23]) || (drawNum[35] == drawNum[24]) || (drawNum[35] == drawNum[25]) || (drawNum[35] == drawNum[26])
        || (drawNum[35] == drawNum[27]) || (drawNum[35] == drawNum[28]) || (drawNum[35] == drawNum[29]) || (drawNum[35] == drawNum[30])|| (drawNum[35] == drawNum[31])
        || (drawNum[35] == drawNum[32])|| (drawNum[35] == drawNum[33])|| (drawNum[35] == drawNum[34]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[36] == drawNum[1]) || (drawNum[36] == drawNum[2]) || (drawNum[36] == drawNum[3]) || (drawNum[36] == drawNum[4]) || (drawNum[36] == drawNum[5]) || (drawNum[36]
        == drawNum[6]) || (drawNum[36] == drawNum[7]) || (drawNum[36] == drawNum[8]) || (drawNum[36] == drawNum[9]) || (drawNum[36] == drawNum[10]) || (drawNum[36] == drawNum[11])
        || (drawNum[36] == drawNum[12]) || (drawNum[36] == drawNum[13]) || (drawNum[36] == drawNum[14]) || (drawNum[36] == drawNum[15]) || (drawNum[36] == drawNum[16])
        || (drawNum[36] == drawNum[17]) || (drawNum[36] == drawNum[18]) || (drawNum[36] == drawNum[19]) || (drawNum[36] == drawNum[20]) || (drawNum[36] == drawNum[21])
        || (drawNum[36] == drawNum[22]) || (drawNum[36] == drawNum[23]) || (drawNum[36] == drawNum[24]) || (drawNum[36] == drawNum[25]) || (drawNum[36] == drawNum[26])
        || (drawNum[36] == drawNum[27]) || (drawNum[36] == drawNum[28]) || (drawNum[36] == drawNum[29]) || (drawNum[36] == drawNum[30])|| (drawNum[36] == drawNum[31])
        || (drawNum[36] == drawNum[32])|| (drawNum[36] == drawNum[33])|| (drawNum[36] == drawNum[34])|| (drawNum[36] == drawNum[35]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[37] == drawNum[1]) || (drawNum[37] == drawNum[2]) || (drawNum[37] == drawNum[3]) || (drawNum[37] == drawNum[4]) || (drawNum[37] == drawNum[5]) || (drawNum[37]
        == drawNum[6]) || (drawNum[37] == drawNum[7]) || (drawNum[37] == drawNum[8]) || (drawNum[37] == drawNum[9]) || (drawNum[37] == drawNum[10]) || (drawNum[37] == drawNum[11])
        || (drawNum[37] == drawNum[12]) || (drawNum[37] == drawNum[13]) || (drawNum[37] == drawNum[14]) || (drawNum[37] == drawNum[15]) || (drawNum[37] == drawNum[16])
        || (drawNum[37] == drawNum[17]) || (drawNum[37] == drawNum[18]) || (drawNum[37] == drawNum[19]) || (drawNum[37] == drawNum[20]) || (drawNum[37] == drawNum[21])
        || (drawNum[37] == drawNum[22]) || (drawNum[37] == drawNum[23]) || (drawNum[37] == drawNum[24]) || (drawNum[37] == drawNum[25]) || (drawNum[37] == drawNum[26])
        || (drawNum[37] == drawNum[27]) || (drawNum[37] == drawNum[28]) || (drawNum[37] == drawNum[29]) || (drawNum[37] == drawNum[30])|| (drawNum[37] == drawNum[31])
        || (drawNum[37] == drawNum[32])|| (drawNum[37] == drawNum[33])|| (drawNum[37] == drawNum[34])|| (drawNum[37] == drawNum[35])|| (drawNum[37] == drawNum[36]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[38] == drawNum[1]) || (drawNum[38] == drawNum[2]) || (drawNum[38] == drawNum[3]) || (drawNum[38] == drawNum[4]) || (drawNum[38] == drawNum[5]) || (drawNum[38]
        == drawNum[6]) || (drawNum[38] == drawNum[7]) || (drawNum[38] == drawNum[8]) || (drawNum[38] == drawNum[9]) || (drawNum[38] == drawNum[10]) || (drawNum[38] == drawNum[11])
        || (drawNum[38] == drawNum[12]) || (drawNum[38] == drawNum[13]) || (drawNum[38] == drawNum[14]) || (drawNum[38] == drawNum[15]) || (drawNum[38] == drawNum[16])
        || (drawNum[38] == drawNum[17]) || (drawNum[38] == drawNum[18]) || (drawNum[38] == drawNum[19]) || (drawNum[38] == drawNum[20]) || (drawNum[38] == drawNum[21])
        || (drawNum[38] == drawNum[22]) || (drawNum[38] == drawNum[23]) || (drawNum[38] == drawNum[24]) || (drawNum[38] == drawNum[25]) || (drawNum[38] == drawNum[26])
        || (drawNum[38] == drawNum[27]) || (drawNum[38] == drawNum[28]) || (drawNum[38] == drawNum[29]) || (drawNum[38] == drawNum[30])|| (drawNum[38] == drawNum[31])
        || (drawNum[38] == drawNum[32])|| (drawNum[38] == drawNum[33])|| (drawNum[38] == drawNum[34])|| (drawNum[38] == drawNum[35])|| (drawNum[38] == drawNum[36])
        || (drawNum[38] == drawNum[37]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[39] == drawNum[1]) || (drawNum[39] == drawNum[2]) || (drawNum[39] == drawNum[3]) || (drawNum[39] == drawNum[4]) || (drawNum[39] == drawNum[5]) || (drawNum[39]
        == drawNum[6]) || (drawNum[39] == drawNum[7]) || (drawNum[39] == drawNum[8]) || (drawNum[39] == drawNum[9]) || (drawNum[39] == drawNum[10]) || (drawNum[39] == drawNum[11])
        || (drawNum[39] == drawNum[12]) || (drawNum[39] == drawNum[13]) || (drawNum[39] == drawNum[14]) || (drawNum[39] == drawNum[15]) || (drawNum[39] == drawNum[16])
        || (drawNum[39] == drawNum[17]) || (drawNum[39] == drawNum[18]) || (drawNum[39] == drawNum[19]) || (drawNum[39] == drawNum[20]) || (drawNum[39] == drawNum[21])
        || (drawNum[39] == drawNum[22]) || (drawNum[39] == drawNum[23]) || (drawNum[39] == drawNum[24]) || (drawNum[39] == drawNum[25]) || (drawNum[39] == drawNum[26])
        || (drawNum[39] == drawNum[27]) || (drawNum[39] == drawNum[28]) || (drawNum[39] == drawNum[29]) || (drawNum[39] == drawNum[30])|| (drawNum[39] == drawNum[31])
        || (drawNum[39] == drawNum[32])|| (drawNum[39] == drawNum[33])|| (drawNum[39] == drawNum[34])|| (drawNum[39] == drawNum[35])|| (drawNum[39] == drawNum[36])
        || (drawNum[39] == drawNum[37])|| (drawNum[39] == drawNum[38]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[40] == drawNum[1]) || (drawNum[40] == drawNum[2]) || (drawNum[40] == drawNum[3]) || (drawNum[40] == drawNum[4]) || (drawNum[40] == drawNum[5]) || (drawNum[40]
    == drawNum[6]) || (drawNum[40] == drawNum[7]) || (drawNum[40] == drawNum[8]) || (drawNum[40] == drawNum[9]) || (drawNum[40] == drawNum[10]) || (drawNum[40] == drawNum[11])
    || (drawNum[40] == drawNum[12]) || (drawNum[40] == drawNum[13]) || (drawNum[40] == drawNum[14]) || (drawNum[40] == drawNum[15]) || (drawNum[40] == drawNum[16])
    || (drawNum[40] == drawNum[17]) || (drawNum[40] == drawNum[18]) || (drawNum[40] == drawNum[19]) || (drawNum[40] == drawNum[20]) || (drawNum[40] == drawNum[21])
    || (drawNum[40] == drawNum[22]) || (drawNum[40] == drawNum[23]) || (drawNum[40] == drawNum[24]) || (drawNum[40] == drawNum[25]) || (drawNum[40] == drawNum[26])
    || (drawNum[40] == drawNum[27]) || (drawNum[40] == drawNum[28]) || (drawNum[40] == drawNum[29]) || (drawNum[40] == drawNum[30])|| (drawNum[40] == drawNum[31])
    || (drawNum[40] == drawNum[32])|| (drawNum[40] == drawNum[33])|| (drawNum[40] == drawNum[34])|| (drawNum[40] == drawNum[35])|| (drawNum[40] == drawNum[36])
    || (drawNum[40] == drawNum[37])|| (drawNum[40] == drawNum[38])|| (drawNum[40] == drawNum[39]))
    {
        drawNum[5] = (int)(Math.random()*MAX)+1;
        if (drawNum = 1){
            $("div1-1").src = diA;
        }
        else if (drawNum = 2){
            $("div1-1").src = di2;
        }
        else if (drawNum = 3){
            $("div1-1").src = di3;
        }
        else if (drawNum = 4){
            $("div1-1").src = di4;
        }
        else if (drawNum = 5){
            $("div1-1").src = di5;
        }
        else if (drawNum = 6){
            $("div1-1").src = di6;
        }
        else if (drawNum = 7){
            $("div1-1").src = di7;
        }
        else if (drawNum = 8){
            $("div1-1").src = di8;
        }
        else if (drawNum = 9){
            $("div1-1").src = di9;
        }
        else if (drawNum = 10){
            $("div1-1").src = di10;
        }
        else if (drawNum = 11){
            $("div1-1").src = diJ;
        }
        else if (drawNum = 12){
            $("div1-1").src = diQ;
        }
        else if (drawNum = 13){
            $("div1-1").src = diK;
        }
        else if (drawNum = 14){
            $("div1-1").src = hrtA;
        }
        else if (drawNum = 15){
            $("div1-1").src = hrt2;
        }
        else if (drawNum = 16){
            $("div1-1").src = hrt3;
        }
        else if (drawNum = 17){
            $("div1-1").src = hrt4;
        }
        else if (drawNum = 18){
            $("div1-1").src = hrt5;
        }
        else if (drawNum = 19){
            $("div1-1").src = hrt6;
        }
        else if (drawNum = 20){
            $("div1-1").src = hrt7;
        }
        else if (drawNum = 21){
            $("div1-1").src = hrt8;
        }
        else if (drawNum = 22){
            $("div1-1").src = hrt9;
        }
        else if (drawNum = 23){
            $("div1-1").src = hrt10;
        }
        else if (drawNum = 24){
            $("div1-1").src = hrtJ;
        }
        else if (drawNum = 25){
            $("div1-1").src = hrtQ;
        }
        else if (drawNum = 26){
            $("div1-1").src = hrtK;
        }
        else if (drawNum = 27){
            $("div1-1").src = clbA;
        }
        else if (drawNum = 28){
            $("div1-1").src = clb2;
        }
        else if (drawNum = 29){
            $("div1-1").src = clb3;
        }
        else if (drawNum = 30){
            $("div1-1").src = clb4;
        }
        else if (drawNum = 31){
            $("div1-1").src = clb5;
        }
        else if (drawNum = 32){
            $("div1-1").src = clb6;
        }
        else if (drawNum = 33){
            $("div1-1").src = clb7;
        }
        else if (drawNum = 34){
            $("div1-1").src = clb8;
        }
        else if (drawNum = 35){
            $("div1-1").src = clb9;
        }
        else if (drawNum = 36){
            $("div1-1").src = clbJ;
        }
        else if (drawNum = 37){
            $("div1-1").src = clbQ;
        }
        else if (drawNum = 38){
            $("div1-1").src = clbK;
        }
        else if (drawNum = 39){
            $("div1-1").src = spdA;
        }
        else if (drawNum = 40){
            $("div1-1").src = spd2;
        }
        else if (drawNum = 41){
            $("div1-1").src = spd3;
        }
        else if (drawNum = 42){
            $("div1-1").src = spd4;
        }
        else if (drawNum = 43){
            $("div1-1").src = spd5;
        }
        else if (drawNum = 44){
            $("div1-1").src = spd6;
        }
        else if (drawNum = 45){
            $("div1-1").src = spd7;
        }
        else if (drawNum = 46){
            $("div1-1").src = spd8;
        }
        else if (drawNum = 47){
            $("div1-1").src = spd9;
        }
        else if (drawNum = 48){
            $("div1-1").src = spdJ;
        }
        else if (drawNum = 49){
            $("div1-1").src = spdQ;
        }
        else if (drawNum = 50){
            $("div1-1").src = spdK;
        }
        else if (drawNum = 51){
            $("div1-1").src = clb10;
        }
        else if (drawNum = 52){
            $("div1-1").src = spd10;
        }
    }

        while ((drawNum[41] == drawNum[1]) || (drawNum[41] == drawNum[2]) || (drawNum[41] == drawNum[3]) || (drawNum[41] == drawNum[4]) || (drawNum[41] == drawNum[5]) || (drawNum[41]
        == drawNum[6]) || (drawNum[41] == drawNum[7]) || (drawNum[41] == drawNum[8]) || (drawNum[41] == drawNum[9]) || (drawNum[41] == drawNum[10]) || (drawNum[41] == drawNum[11])
        || (drawNum[41] == drawNum[12]) || (drawNum[41] == drawNum[13]) || (drawNum[41] == drawNum[14]) || (drawNum[41] == drawNum[15]) || (drawNum[41] == drawNum[16])
        || (drawNum[41] == drawNum[17]) || (drawNum[41] == drawNum[18]) || (drawNum[41] == drawNum[19]) || (drawNum[41] == drawNum[20]) || (drawNum[41] == drawNum[21])
        || (drawNum[41] == drawNum[22]) || (drawNum[41] == drawNum[23]) || (drawNum[41] == drawNum[24]) || (drawNum[41] == drawNum[25]) || (drawNum[41] == drawNum[26])
        || (drawNum[41] == drawNum[27]) || (drawNum[41] == drawNum[28]) || (drawNum[41] == drawNum[29]) || (drawNum[41] == drawNum[30])|| (drawNum[41] == drawNum[31])
        || (drawNum[41] == drawNum[32])|| (drawNum[41] == drawNum[33])|| (drawNum[41] == drawNum[34])|| (drawNum[41] == drawNum[35])|| (drawNum[41] == drawNum[36])
        || (drawNum[41] == drawNum[37])|| (drawNum[41] == drawNum[38])|| (drawNum[41] == drawNum[39])|| (drawNum[41] == drawNum[40]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[42] == drawNum[1]) || (drawNum[42] == drawNum[2]) || (drawNum[42] == drawNum[3]) || (drawNum[42] == drawNum[4]) || (drawNum[42] == drawNum[5]) || (drawNum[42]
        == drawNum[6]) || (drawNum[42] == drawNum[7]) || (drawNum[42] == drawNum[8]) || (drawNum[42] == drawNum[9]) || (drawNum[42] == drawNum[10]) || (drawNum[42] == drawNum[11])
        || (drawNum[42] == drawNum[12]) || (drawNum[42] == drawNum[13]) || (drawNum[42] == drawNum[14]) || (drawNum[42] == drawNum[15]) || (drawNum[42] == drawNum[16])
        || (drawNum[42] == drawNum[17]) || (drawNum[42] == drawNum[18]) || (drawNum[42] == drawNum[19]) || (drawNum[42] == drawNum[20]) || (drawNum[42] == drawNum[21])
        || (drawNum[42] == drawNum[22]) || (drawNum[42] == drawNum[23]) || (drawNum[42] == drawNum[24]) || (drawNum[42] == drawNum[25]) || (drawNum[42] == drawNum[26])
        || (drawNum[42] == drawNum[27]) || (drawNum[42] == drawNum[28]) || (drawNum[42] == drawNum[29]) || (drawNum[42] == drawNum[30])|| (drawNum[42] == drawNum[31])
        || (drawNum[42] == drawNum[32])|| (drawNum[42] == drawNum[33])|| (drawNum[42] == drawNum[34])|| (drawNum[42] == drawNum[35])|| (drawNum[42] == drawNum[36])
        || (drawNum[42] == drawNum[37])|| (drawNum[42] == drawNum[38])|| (drawNum[42] == drawNum[39])|| (drawNum[42] == drawNum[40])|| (drawNum[42] == drawNum[41]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[43] == drawNum[1]) || (drawNum[43] == drawNum[2]) || (drawNum[43] == drawNum[3]) || (drawNum[43] == drawNum[4]) || (drawNum[43] == drawNum[5]) || (drawNum[43]
        == drawNum[6]) || (drawNum[43] == drawNum[7]) || (drawNum[43] == drawNum[8]) || (drawNum[43] == drawNum[9]) || (drawNum[43] == drawNum[10]) || (drawNum[43] == drawNum[11])
        || (drawNum[43] == drawNum[12]) || (drawNum[43] == drawNum[13]) || (drawNum[43] == drawNum[14]) || (drawNum[43] == drawNum[15]) || (drawNum[43] == drawNum[16])
        || (drawNum[43] == drawNum[17]) || (drawNum[43] == drawNum[18]) || (drawNum[43] == drawNum[19]) || (drawNum[43] == drawNum[20]) || (drawNum[43] == drawNum[21])
        || (drawNum[43] == drawNum[22]) || (drawNum[43] == drawNum[23]) || (drawNum[43] == drawNum[24]) || (drawNum[43] == drawNum[25]) || (drawNum[43] == drawNum[26])
        || (drawNum[43] == drawNum[27]) || (drawNum[43] == drawNum[28]) || (drawNum[43] == drawNum[29]) || (drawNum[43] == drawNum[30])|| (drawNum[43] == drawNum[31])
        || (drawNum[43] == drawNum[32])|| (drawNum[43] == drawNum[33])|| (drawNum[43] == drawNum[34])|| (drawNum[43] == drawNum[35])|| (drawNum[43] == drawNum[36])
        || (drawNum[43] == drawNum[37])|| (drawNum[43] == drawNum[38])|| (drawNum[43] == drawNum[39])|| (drawNum[43] == drawNum[40])|| (drawNum[43] == drawNum[41])
        || (drawNum[43] == drawNum[42]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[44] == drawNum[1]) || (drawNum[44] == drawNum[2]) || (drawNum[44] == drawNum[3]) || (drawNum[44] == drawNum[4]) || (drawNum[44] == drawNum[5]) || (drawNum[44]
        == drawNum[6]) || (drawNum[44] == drawNum[7]) || (drawNum[44] == drawNum[8]) || (drawNum[44] == drawNum[9]) || (drawNum[44] == drawNum[10]) || (drawNum[44] == drawNum[11])
        || (drawNum[44] == drawNum[12]) || (drawNum[44] == drawNum[13]) || (drawNum[44] == drawNum[14]) || (drawNum[44] == drawNum[15]) || (drawNum[44] == drawNum[16])
        || (drawNum[44] == drawNum[17]) || (drawNum[44] == drawNum[18]) || (drawNum[44] == drawNum[19]) || (drawNum[44] == drawNum[20]) || (drawNum[44] == drawNum[21])
        || (drawNum[44] == drawNum[22]) || (drawNum[44] == drawNum[23]) || (drawNum[44] == drawNum[24]) || (drawNum[44] == drawNum[25]) || (drawNum[44] == drawNum[26])
        || (drawNum[44] == drawNum[27]) || (drawNum[44] == drawNum[28]) || (drawNum[44] == drawNum[29]) || (drawNum[44] == drawNum[30])|| (drawNum[44] == drawNum[31])
        || (drawNum[44] == drawNum[32])|| (drawNum[44] == drawNum[33])|| (drawNum[44] == drawNum[34])|| (drawNum[44] == drawNum[35])|| (drawNum[44] == drawNum[36])
        || (drawNum[44] == drawNum[37])|| (drawNum[44] == drawNum[38])|| (drawNum[44] == drawNum[39])|| (drawNum[44] == drawNum[40])|| (drawNum[44] == drawNum[41])
        || (drawNum[44] == drawNum[42])|| (drawNum[44] == drawNum[43]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[45] == drawNum[1]) || (drawNum[45] == drawNum[2]) || (drawNum[45] == drawNum[3]) || (drawNum[45] == drawNum[4]) || (drawNum[45] == drawNum[5]) || (drawNum[45]
        == drawNum[6]) || (drawNum[45] == drawNum[7]) || (drawNum[45] == drawNum[8]) || (drawNum[45] == drawNum[9]) || (drawNum[45] == drawNum[10]) || (drawNum[45] == drawNum[11])
        || (drawNum[45] == drawNum[12]) || (drawNum[45] == drawNum[13]) || (drawNum[45] == drawNum[14]) || (drawNum[45] == drawNum[15]) || (drawNum[45] == drawNum[16])
        || (drawNum[45] == drawNum[17]) || (drawNum[45] == drawNum[18]) || (drawNum[45] == drawNum[19]) || (drawNum[45] == drawNum[20]) || (drawNum[45] == drawNum[21])
        || (drawNum[45] == drawNum[22]) || (drawNum[45] == drawNum[23]) || (drawNum[45] == drawNum[24]) || (drawNum[45] == drawNum[25]) || (drawNum[45] == drawNum[26])
        || (drawNum[45] == drawNum[27]) || (drawNum[45] == drawNum[28]) || (drawNum[45] == drawNum[29]) || (drawNum[45] == drawNum[30])|| (drawNum[45] == drawNum[31])
        || (drawNum[45] == drawNum[32])|| (drawNum[45] == drawNum[33])|| (drawNum[45] == drawNum[34])|| (drawNum[45] == drawNum[35])|| (drawNum[45] == drawNum[36])
        || (drawNum[45] == drawNum[37])|| (drawNum[45] == drawNum[38])|| (drawNum[45] == drawNum[39])|| (drawNum[45] == drawNum[40])|| (drawNum[45] == drawNum[41])
        || (drawNum[45] == drawNum[42])|| (drawNum[45] == drawNum[43])|| (drawNum[45] == drawNum[44]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[46] == drawNum[1]) || (drawNum[46] == drawNum[2]) || (drawNum[46] == drawNum[3]) || (drawNum[46] == drawNum[4]) || (drawNum[46] == drawNum[5]) || (drawNum[46]
        == drawNum[6]) || (drawNum[46] == drawNum[7]) || (drawNum[46] == drawNum[8]) || (drawNum[46] == drawNum[9]) || (drawNum[46] == drawNum[10]) || (drawNum[46] == drawNum[11])
        || (drawNum[46] == drawNum[12]) || (drawNum[46] == drawNum[13]) || (drawNum[46] == drawNum[14]) || (drawNum[46] == drawNum[15]) || (drawNum[46] == drawNum[16])
        || (drawNum[46] == drawNum[17]) || (drawNum[46] == drawNum[18]) || (drawNum[46] == drawNum[19]) || (drawNum[46] == drawNum[20]) || (drawNum[46] == drawNum[21])
        || (drawNum[46] == drawNum[22]) || (drawNum[46] == drawNum[23]) || (drawNum[46] == drawNum[24]) || (drawNum[46] == drawNum[25]) || (drawNum[46] == drawNum[26])
        || (drawNum[46] == drawNum[27]) || (drawNum[46] == drawNum[28]) || (drawNum[46] == drawNum[29]) || (drawNum[46] == drawNum[30])|| (drawNum[46] == drawNum[31])
        || (drawNum[46] == drawNum[32])|| (drawNum[46] == drawNum[33])|| (drawNum[46] == drawNum[34])|| (drawNum[46] == drawNum[35])|| (drawNum[46] == drawNum[36])
        || (drawNum[46] == drawNum[37])|| (drawNum[46] == drawNum[38])|| (drawNum[46] == drawNum[39])|| (drawNum[46] == drawNum[40])|| (drawNum[46] == drawNum[41])
        || (drawNum[46] == drawNum[42])|| (drawNum[46] == drawNum[43])|| (drawNum[46] == drawNum[44])|| (drawNum[46] == drawNum[45]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[47] == drawNum[1]) || (drawNum[47] == drawNum[2]) || (drawNum[47] == drawNum[3]) || (drawNum[47] == drawNum[4]) || (drawNum[47] == drawNum[5]) || (drawNum[47]
        == drawNum[6]) || (drawNum[47] == drawNum[7]) || (drawNum[47] == drawNum[8]) || (drawNum[47] == drawNum[9]) || (drawNum[47] == drawNum[10]) || (drawNum[47] == drawNum[11])
        || (drawNum[47] == drawNum[12]) || (drawNum[47] == drawNum[13]) || (drawNum[47] == drawNum[14]) || (drawNum[47] == drawNum[15]) || (drawNum[47] == drawNum[16])
        || (drawNum[47] == drawNum[17]) || (drawNum[47] == drawNum[18]) || (drawNum[47] == drawNum[19]) || (drawNum[47] == drawNum[20]) || (drawNum[47] == drawNum[21])
        || (drawNum[47] == drawNum[22]) || (drawNum[47] == drawNum[23]) || (drawNum[47] == drawNum[24]) || (drawNum[47] == drawNum[25]) || (drawNum[47] == drawNum[26])
        || (drawNum[47] == drawNum[27]) || (drawNum[47] == drawNum[28]) || (drawNum[47] == drawNum[29]) || (drawNum[47] == drawNum[30])|| (drawNum[47] == drawNum[31])
        || (drawNum[47] == drawNum[32])|| (drawNum[47] == drawNum[33])|| (drawNum[47] == drawNum[34])|| (drawNum[47] == drawNum[35])|| (drawNum[47] == drawNum[36])
        || (drawNum[47] == drawNum[37])|| (drawNum[47] == drawNum[38])|| (drawNum[47] == drawNum[39])|| (drawNum[47] == drawNum[40])|| (drawNum[47] == drawNum[41])
        || (drawNum[47] == drawNum[42])|| (drawNum[47] == drawNum[43])|| (drawNum[47] == drawNum[44])|| (drawNum[47] == drawNum[45])|| (drawNum[47] == drawNum[46]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[48] == drawNum[1]) || (drawNum[48] == drawNum[2]) || (drawNum[48] == drawNum[3]) || (drawNum[48] == drawNum[4]) || (drawNum[48] == drawNum[5]) || (drawNum[48]
        == drawNum[6]) || (drawNum[48] == drawNum[7]) || (drawNum[48] == drawNum[8]) || (drawNum[48] == drawNum[9]) || (drawNum[48] == drawNum[10]) || (drawNum[48] == drawNum[11])
        || (drawNum[48] == drawNum[12]) || (drawNum[48] == drawNum[13]) || (drawNum[48] == drawNum[14]) || (drawNum[48] == drawNum[15]) || (drawNum[48] == drawNum[16])
        || (drawNum[48] == drawNum[17]) || (drawNum[48] == drawNum[18]) || (drawNum[48] == drawNum[19]) || (drawNum[48] == drawNum[20]) || (drawNum[48] == drawNum[21])
        || (drawNum[48] == drawNum[22]) || (drawNum[48] == drawNum[23]) || (drawNum[48] == drawNum[24]) || (drawNum[48] == drawNum[25]) || (drawNum[48] == drawNum[26])
        || (drawNum[48] == drawNum[27]) || (drawNum[48] == drawNum[28]) || (drawNum[48] == drawNum[29]) || (drawNum[48] == drawNum[30])|| (drawNum[48] == drawNum[31])
        || (drawNum[48] == drawNum[32])|| (drawNum[48] == drawNum[33])|| (drawNum[48] == drawNum[34])|| (drawNum[48] == drawNum[35])|| (drawNum[48] == drawNum[36])
        || (drawNum[48] == drawNum[37])|| (drawNum[48] == drawNum[38])|| (drawNum[48] == drawNum[39])|| (drawNum[48] == drawNum[40])|| (drawNum[48] == drawNum[41])
        || (drawNum[48] == drawNum[42])|| (drawNum[48] == drawNum[43])|| (drawNum[48] == drawNum[44])|| (drawNum[48] == drawNum[45])|| (drawNum[48] == drawNum[46])
        || (drawNum[48] == drawNum[47]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[49] == drawNum[1]) || (drawNum[49] == drawNum[2]) || (drawNum[49] == drawNum[3]) || (drawNum[49] == drawNum[4]) || (drawNum[49] == drawNum[5]) || (drawNum[49]
        == drawNum[6]) || (drawNum[49] == drawNum[7]) || (drawNum[49] == drawNum[8]) || (drawNum[49] == drawNum[9]) || (drawNum[49] == drawNum[10]) || (drawNum[49] == drawNum[11])
        || (drawNum[49] == drawNum[12]) || (drawNum[49] == drawNum[13]) || (drawNum[49] == drawNum[14]) || (drawNum[49] == drawNum[15]) || (drawNum[49] == drawNum[16])
        || (drawNum[49] == drawNum[17]) || (drawNum[49] == drawNum[18]) || (drawNum[49] == drawNum[19]) || (drawNum[49] == drawNum[20]) || (drawNum[49] == drawNum[21])
        || (drawNum[49] == drawNum[22]) || (drawNum[49] == drawNum[23]) || (drawNum[49] == drawNum[24]) || (drawNum[49] == drawNum[25]) || (drawNum[49] == drawNum[26])
        || (drawNum[49] == drawNum[27]) || (drawNum[49] == drawNum[28]) || (drawNum[49] == drawNum[29]) || (drawNum[49] == drawNum[30])|| (drawNum[49] == drawNum[31])
        || (drawNum[49] == drawNum[32])|| (drawNum[49] == drawNum[33])|| (drawNum[49] == drawNum[34])|| (drawNum[49] == drawNum[35])|| (drawNum[49] == drawNum[36])
        || (drawNum[49] == drawNum[37])|| (drawNum[49] == drawNum[38])|| (drawNum[49] == drawNum[39])|| (drawNum[49] == drawNum[40])|| (drawNum[49] == drawNum[41])
        || (drawNum[49] == drawNum[42])|| (drawNum[49] == drawNum[43])|| (drawNum[49] == drawNum[44])|| (drawNum[49] == drawNum[45])|| (drawNum[49] == drawNum[46])
        || (drawNum[49] == drawNum[47])|| (drawNum[49] == drawNum[48]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[50] == drawNum[1]) || (drawNum[50] == drawNum[2]) || (drawNum[50] == drawNum[3]) || (drawNum[50] == drawNum[4]) || (drawNum[50] == drawNum[5]) || (drawNum[50]
        == drawNum[6]) || (drawNum[50] == drawNum[7]) || (drawNum[50] == drawNum[8]) || (drawNum[50] == drawNum[9]) || (drawNum[50] == drawNum[10]) || (drawNum[50] == drawNum[11])
        || (drawNum[50] == drawNum[12]) || (drawNum[50] == drawNum[13]) || (drawNum[50] == drawNum[14]) || (drawNum[50] == drawNum[15]) || (drawNum[50] == drawNum[16])
        || (drawNum[50] == drawNum[17]) || (drawNum[50] == drawNum[18]) || (drawNum[50] == drawNum[19]) || (drawNum[50] == drawNum[20]) || (drawNum[50] == drawNum[21])
        || (drawNum[50] == drawNum[22]) || (drawNum[50] == drawNum[23]) || (drawNum[50] == drawNum[24]) || (drawNum[50] == drawNum[25]) || (drawNum[50] == drawNum[26])
        || (drawNum[50] == drawNum[27]) || (drawNum[50] == drawNum[28]) || (drawNum[50] == drawNum[29]) || (drawNum[50] == drawNum[30])|| (drawNum[50] == drawNum[31])
        || (drawNum[50] == drawNum[32])|| (drawNum[50] == drawNum[33])|| (drawNum[50] == drawNum[34])|| (drawNum[50] == drawNum[35])|| (drawNum[50] == drawNum[36])
        || (drawNum[50] == drawNum[37])|| (drawNum[50] == drawNum[38])|| (drawNum[50] == drawNum[39])|| (drawNum[50] == drawNum[40])|| (drawNum[50] == drawNum[41])
        || (drawNum[50] == drawNum[42])|| (drawNum[50] == drawNum[43])|| (drawNum[50] == drawNum[44])|| (drawNum[50] == drawNum[45])|| (drawNum[50] == drawNum[46])
        || (drawNum[50] == drawNum[47])|| (drawNum[50] == drawNum[48])|| (drawNum[50] == drawNum[49]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[40] == drawNum[1]) || (drawNum[40] == drawNum[2]) || (drawNum[40] == drawNum[3]) || (drawNum[40] == drawNum[4]) || (drawNum[40] == drawNum[5]) || (drawNum[40]
        == drawNum[6]) || (drawNum[40] == drawNum[7]) || (drawNum[40] == drawNum[8]) || (drawNum[40] == drawNum[9]) || (drawNum[40] == drawNum[10]) || (drawNum[40] == drawNum[11])
        || (drawNum[40] == drawNum[12]) || (drawNum[40] == drawNum[13]) || (drawNum[40] == drawNum[14]) || (drawNum[40] == drawNum[15]) || (drawNum[40] == drawNum[16])
        || (drawNum[40] == drawNum[17]) || (drawNum[40] == drawNum[18]) || (drawNum[40] == drawNum[19]) || (drawNum[40] == drawNum[20]) || (drawNum[40] == drawNum[21])
        || (drawNum[40] == drawNum[22]) || (drawNum[40] == drawNum[23]) || (drawNum[40] == drawNum[24]) || (drawNum[40] == drawNum[25]) || (drawNum[40] == drawNum[26])
        || (drawNum[40] == drawNum[27]) || (drawNum[40] == drawNum[28]) || (drawNum[40] == drawNum[29]) || (drawNum[40] == drawNum[30])|| (drawNum[40] == drawNum[31])
        || (drawNum[40] == drawNum[32])|| (drawNum[40] == drawNum[33])|| (drawNum[40] == drawNum[34])|| (drawNum[40] == drawNum[35])|| (drawNum[40] == drawNum[36])
        || (drawNum[40] == drawNum[37])|| (drawNum[40] == drawNum[38])|| (drawNum[40] == drawNum[39]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }

        while ((drawNum[52] == drawNum[1]) || (drawNum[52] == drawNum[2]) || (drawNum[52] == drawNum[3]) || (drawNum[52] == drawNum[4]) || (drawNum[52] == drawNum[5]) || (drawNum[52]
        == drawNum[6]) || (drawNum[52] == drawNum[7]) || (drawNum[52] == drawNum[8]) || (drawNum[52] == drawNum[9]) || (drawNum[52] == drawNum[10]) || (drawNum[52] == drawNum[11])
        || (drawNum[52] == drawNum[12]) || (drawNum[52] == drawNum[13]) || (drawNum[52] == drawNum[14]) || (drawNum[52] == drawNum[15]) || (drawNum[52] == drawNum[16])
        || (drawNum[52] == drawNum[17]) || (drawNum[52] == drawNum[18]) || (drawNum[52] == drawNum[19]) || (drawNum[52] == drawNum[20]) || (drawNum[52] == drawNum[21])
        || (drawNum[52] == drawNum[22]) || (drawNum[52] == drawNum[23]) || (drawNum[52] == drawNum[24]) || (drawNum[52] == drawNum[25]) || (drawNum[52] == drawNum[26])
        || (drawNum[52] == drawNum[27]) || (drawNum[52] == drawNum[28]) || (drawNum[52] == drawNum[29]) || (drawNum[52] == drawNum[30])|| (drawNum[52] == drawNum[31])
        || (drawNum[52] == drawNum[32])|| (drawNum[52] == drawNum[33])|| (drawNum[52] == drawNum[34])|| (drawNum[52] == drawNum[35])|| (drawNum[52] == drawNum[36])
        || (drawNum[52] == drawNum[37])|| (drawNum[52] == drawNum[38])|| (drawNum[52] == drawNum[39])|| (drawNum[52] == drawNum[40])|| (drawNum[52] == drawNum[41])
        || (drawNum[52] == drawNum[42])|| (drawNum[52] == drawNum[43])|| (drawNum[52] == drawNum[44])|| (drawNum[52] == drawNum[45])|| (drawNum[52] == drawNum[46])
        || (drawNum[52] == drawNum[47])|| (drawNum[52] == drawNum[48])|| (drawNum[52] == drawNum[49]) || (drawNum[52] == drawNum[50]) || (drawNum[52] == drawNum[51]))
        {
            drawNum[5] = (int)(Math.random()*MAX)+1;
            if (drawNum = 1){
                $("div1-1").src = diA;
            }
            else if (drawNum = 2){
                $("div1-1").src = di2;
            }
            else if (drawNum = 3){
                $("div1-1").src = di3;
            }
            else if (drawNum = 4){
                $("div1-1").src = di4;
            }
            else if (drawNum = 5){
                $("div1-1").src = di5;
            }
            else if (drawNum = 6){
                $("div1-1").src = di6;
            }
            else if (drawNum = 7){
                $("div1-1").src = di7;
            }
            else if (drawNum = 8){
                $("div1-1").src = di8;
            }
            else if (drawNum = 9){
                $("div1-1").src = di9;
            }
            else if (drawNum = 10){
                $("div1-1").src = di10;
            }
            else if (drawNum = 11){
                $("div1-1").src = diJ;
            }
            else if (drawNum = 12){
                $("div1-1").src = diQ;
            }
            else if (drawNum = 13){
                $("div1-1").src = diK;
            }
            else if (drawNum = 14){
                $("div1-1").src = hrtA;
            }
            else if (drawNum = 15){
                $("div1-1").src = hrt2;
            }
            else if (drawNum = 16){
                $("div1-1").src = hrt3;
            }
            else if (drawNum = 17){
                $("div1-1").src = hrt4;
            }
            else if (drawNum = 18){
                $("div1-1").src = hrt5;
            }
            else if (drawNum = 19){
                $("div1-1").src = hrt6;
            }
            else if (drawNum = 20){
                $("div1-1").src = hrt7;
            }
            else if (drawNum = 21){
                $("div1-1").src = hrt8;
            }
            else if (drawNum = 22){
                $("div1-1").src = hrt9;
            }
            else if (drawNum = 23){
                $("div1-1").src = hrt10;
            }
            else if (drawNum = 24){
                $("div1-1").src = hrtJ;
            }
            else if (drawNum = 25){
                $("div1-1").src = hrtQ;
            }
            else if (drawNum = 26){
                $("div1-1").src = hrtK;
            }
            else if (drawNum = 27){
                $("div1-1").src = clbA;
            }
            else if (drawNum = 28){
                $("div1-1").src = clb2;
            }
            else if (drawNum = 29){
                $("div1-1").src = clb3;
            }
            else if (drawNum = 30){
                $("div1-1").src = clb4;
            }
            else if (drawNum = 31){
                $("div1-1").src = clb5;
            }
            else if (drawNum = 32){
                $("div1-1").src = clb6;
            }
            else if (drawNum = 33){
                $("div1-1").src = clb7;
            }
            else if (drawNum = 34){
                $("div1-1").src = clb8;
            }
            else if (drawNum = 35){
                $("div1-1").src = clb9;
            }
            else if (drawNum = 36){
                $("div1-1").src = clbJ;
            }
            else if (drawNum = 37){
                $("div1-1").src = clbQ;
            }
            else if (drawNum = 38){
                $("div1-1").src = clbK;
            }
            else if (drawNum = 39){
                $("div1-1").src = spdA;
            }
            else if (drawNum = 40){
                $("div1-1").src = spd2;
            }
            else if (drawNum = 41){
                $("div1-1").src = spd3;
            }
            else if (drawNum = 42){
                $("div1-1").src = spd4;
            }
            else if (drawNum = 43){
                $("div1-1").src = spd5;
            }
            else if (drawNum = 44){
                $("div1-1").src = spd6;
            }
            else if (drawNum = 45){
                $("div1-1").src = spd7;
            }
            else if (drawNum = 46){
                $("div1-1").src = spd8;
            }
            else if (drawNum = 47){
                $("div1-1").src = spd9;
            }
            else if (drawNum = 48){
                $("div1-1").src = spdJ;
            }
            else if (drawNum = 49){
                $("div1-1").src = spdQ;
            }
            else if (drawNum = 50){
                $("div1-1").src = spdK;
            }
            else if (drawNum = 51){
                $("div1-1").src = clb10;
            }
            else if (drawNum = 52){
                $("div1-1").src = spd10;
            }
        }
    }
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
