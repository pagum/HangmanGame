/*window.onload=start;

var option = new Array(2);
option[0]="Start";
option[1]="Scoreboard";
option[2]="Show categories";

function start (){
    var divsContent="";
    for(i=0; i<=3;i++){
        var el="opt"+i;
        divsContent=divsContent+ '<div class="option" onclick='
    }
}*/



function option(nr){
    var guessed = false;
    for(i=0; i<lengthOfPassword; i++){
        if(password.charAt(i) == alphabetletters[nr]){
            passwordHidden = passwordHidden.changeSign(i, alphabetletters[nr]);
            guessed = true;
        }
    }

    if(nr == 0){
        yes.play();
        var element = "let" + nr;
        //document.getElementById(element).style.background ="#009900";
        document.getElementById(element).style.color ="#009900";
        document.getElementById(element).style.border="3px solid #009900";
        document.getElementById(element).style.background ="default";
        writePassword();
    } else {
        no.play();
        var element = "let" + nr;
        //document.getElementById(element).style.background ="#990000";
        document.getElementById(element).style.color ="#990000";
        document.getElementById(element).style.border="3px solid #990000";
        document.getElementById(element).style.background ="default";
        //ERROR zamiast blokowac ponowny przycisk, blokuje licznik szans :(
        //document.getElementById(element).settAttribute ("onclick",";");
   
        howManyMisses ++;
        for ( i = 0; i < 10; i++){
            var startChances = 10;
            chancesLeft = startChances - howManyMisses;
         }
        document.getElementById("chances").innerHTML = 'Chances left : '+ chancesLeft;
    }
    //victory
    if(password==passwordHidden){
        document.getElementById("alphabet").innerHTML = "Yasss! The password is correct! "+ '<br/><span class="reset" onclick="location.reload()"> One more time? </span>';
    }
    //loss
    if(howManyMisses>=10){
        document.getElementById("alphabet").innerHTML = "Noope! You looser! Password: "+ password+ '<br/><span class="reset" onclick="location.reload()"> One more time? </span>';
    }
    
}