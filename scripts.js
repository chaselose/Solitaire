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
var di0 = "cards/10_of_diamonds.png";
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
var hrt0 = "cards/10_of_hearts.png";
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
var clb0 = "cards/10_of_clubs.png";
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
var spd0 = "cards/10_of_spades.png";
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
    window.location.href = "Game.html";

    //RNG 1/2 done
    var MAX = 52;
    drawNum[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
        45, 46, 47, 48,49, 50, 51, 52];
    for (i = 1 ; i <= MAX; i++)
    {
        drawNum[1] = (int)(Math.random()*MAX)+1;
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
