/**
 * Created by Chase on 12/5/2016.
 */
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
        card = "cards/back_1.png";
    }
    else if (defult2 == true){
        card = "cards/back_2.jpg";
    }
    else if (defult3 == true){
        card = "cards/back_3.jpg";
    }
    $("output").src = card;
}
