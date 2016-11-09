/**
 * Created by Chase on 10/26/2016.
 */

//Diamonds
var diA =  src = "cards/ace_of_diamonds";
var di2 =  src = "cards/2_of_diamonds";
var di3 =  src = "cards/3_of_diamonds";
var di4 =  src = "cards/4_of_diamonds";
var di5 =  src =  "cards/5_of_diamonds";
var di6 =  src =  "cards/6_of_diamonds";
var di7 =  src =  "cards/7_of_diamonds";
var di8 =  src =  "cards/8_of_diamonds";
var di9 =  src =  "cards/9_of_diamonds";
var di0 =  src =  "cards/10_of_diamonds";
var diJ =  src =  "cards/jack_of_diamonds2";
var diQ =  src =  "cards/queen_of_diamonds2";
var diK =  src =  "cards/king_of_diamonds2";

//Hearts
var hrtA = src =  "cards/ace_of_hearts";
var hrt2 = src =  "cards/2_of_hearts";
var hrt3 = src =  "cards/3_of_hearts";
var hrt4 = src =  "cards/4_of_hearts";
var hrt5 = src =  "cards/5_of_hearts";
var hrt6 = src =  "cards/6_of_hearts";
var hrt7 = src =  "cards/7_of_hearts";
var hrt8 = src =  "cards/8_of_hearts";
var hrt9 = src =  "cards/9_of_hearts";
var hrt0 = src =  "cards/10_of_hearts";
var hrtJ = src =  "cards/jack_of_hearts2";
var hrtQ = src =  "cards/queen_of_hearts2";
var hrtK = src =  "cards/king_of_hearts2";

//Clubs
var clbA = src =  "cards/ace_of_clubs";
var clb2 = src =  "cards/2_of_clubs";
var clb3 = src =  "cards/3_of_clubs";
var clb4 = src =  "cards/4_of_clubs";
var clb5 = src =  "cards/5_of_clubs";
var clb6 = src =  "cards/6_of_clubs";
var clb7 = src =  "cards/7_of_clubs";
var clb8 = src =  "cards/8_of_clubs";
var clb9 = src =  "cards/9_of_clubs";
var clb0 = src =  "cards/10_of_clubs";
var clbJ = src =  "cards/jack_of_clubs2";
var clbQ = src =  "cards/queen_of_clubs2";
var clbK = src =  "cards/king_of_clubs2";

//Spades
var spdA = src =  "cards/ace_of_spades";
var spd2 = src =  "cards/2_of_spades";
var spd3 = src =  "cards/3_of_spades";
var spd4 = src =  "cards/4_of_spades";
var spd5 = src =  "cards/5_of_spades";
var spd6 = src =  "cards/6_of_spades";
var spd7 = src =  "cards/7_of_spades";
var spd8 = src =  "cards/8_of_spades";
var spd9 = src =  "cards/9_of_spades";
var spd0 = src =  "cards/10_of_spades";
var spdJ = src =  "cards/jack_of_spades2";
var spdQ = src =  "cards/queen_of_spades2";
var spdK = src =  "cards/king_of_spades2";

var $ = document.getElementByID;

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
