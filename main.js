  
console.log(data); //IS ACCESSIBLE BECAUSE OF GLOBAL SCOPE
var randomIndex = Math.ceil(Math.random() * (data.words.length - 1));
console.log(randomIndex);
var randomWordFromData = data.words[randomIndex];
console.log(randomWordFromData);

startday = new Date();
clockStart = startday.getTime();
function initStopwatch()
{
 var myTime = new Date();
        var timeNow = myTime.getTime();
        var timeDiff = timeNow - clockStart;
        this.diffSecs = timeDiff/1000;
        return(this.diffSecs);
}
 function getSecs()
        {
                var mySecs = initStopwatch();
                var mySecs1 = ""+mySecs;
                mySecs1= mySecs1.substring(0,mySecs1.indexOf("."));
                window.setTimeout('getSecs()',1000);
                return mySecs1;
               window.localStorage.setItem("value",mySecs1);
        }

//var time =this.diffSecs; 

/*onload=function(){
var tablica = new Array("iojoi","fewfew","fwefwefw");
var los=Math.ceil(Math.random()*(tablica.length-1));
return (tablica[los]);}*/


var password=randomWordFromData.title;
password = password.toUpperCase();

var lengthOfPassword = password.length;
var howManyMisses = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var passwordHidden = "";
//loop: as many iterations as many characters are in the string
//each character replaced by "_"/" "

for ( i = 0; i < lengthOfPassword; i++){
    if(password.charAt(i) == " ") {
        passwordHidden = passwordHidden +" ";
    } else {
        passwordHidden = passwordHidden + "-";
    } 
}
function writeCategory(){
    document.getElementById("category").innerHTML = randomWordFromData.category;
}


function writePassword(){
    document.getElementById("passwordField").innerHTML = passwordHidden;
}


//writePassword/ letters as an alias of window.onload
window.onload = letters;
var alphabetletters = new Array(26)
alphabetletters[0] = "A";
alphabetletters[1] = "B";
alphabetletters[2] = "C";
alphabetletters[3] = "D";
alphabetletters[4] = "E";
alphabetletters[5] = "F";
alphabetletters[6] = "G";
alphabetletters[7] = "H";
alphabetletters[8] = "I";
alphabetletters[9] = "J";
alphabetletters[10] = "K";
alphabetletters[11] = "L";
alphabetletters[12] = "M";
alphabetletters[13] = "N";
alphabetletters[14] = "O";
alphabetletters[15] = "P";
alphabetletters[16] = "Q";
alphabetletters[17] = "R";
alphabetletters[18] = "S";
alphabetletters[19] = "T";
alphabetletters[20] = "U";
alphabetletters[21] = "V";
alphabetletters[22] = "W";
alphabetletters[23] = "X";
alphabetletters[24] = "Y";
alphabetletters[25] = "Z";
alphabetletters[26] = ":";
alphabetletters[27] = "-";

function letters(){
    var divsContent="";
    for(i = 0; i<28; i++){
        //at each iteration I generate one div with one letter
        // english alphabet=26 letters
        //string adding = concatenation
        var element = "let"+ i;
        divsContent = divsContent + '<div class="letters" onclick="check('+i+')" id="'+element+'">'+ alphabetletters[i] + '</div>';
        if(i==13) {
            divsContent = divsContent + '<div style="clear:both;"></div>'}
    }
    document.getElementById("alphabet").innerHTML = divsContent;

    writePassword();
}
//adding new methode to class string
//if=>else=>changeSign(3,"m"): (75)from 0 to position i dont change anyting + change sign("m")+ from position+1 till the end of string i dont change anything
String.prototype.changeSign = function(position,sign){
    if(position > this.length - 1) {
        return this.toString();
    } else {
        return this.substr(0,position) + sign + this.substr(position + 1);
    }
}

function check(nr){
    var guessed = false;
    for(i=0; i<lengthOfPassword; i++){
        if(password.charAt(i) == alphabetletters[nr]){
            passwordHidden = passwordHidden.changeSign(i, alphabetletters[nr]);
            guessed = true;
        }
    }

    if(guessed == true){
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
        document.getElementById("chances").innerHTML = 'Chances left : '+ chancesLeft ;
    }
    //victory
    if(password==passwordHidden){
       // document.getElementById("chances").innerHTML = "Yasss! The password is correct! "+ '<br/><span class="reset" onclick="location.reload()"> One more time? </span>';'
       document.getElementById("chances").innerHTML = "Yasss! The password is correct! "+ '<br/><span class="reset" onclick="location.reload()"> One more time? </span>'+'<br/>'+'Your time: '+getSecs()+ 'seconds'+'<br>'+"Do You want add your score to scoreboard?"+ '<br/><span class="add" onclick="toName()">Yes</span>';
       
    }
    //loss
    if(howManyMisses>=10){
        document.getElementById("chances").innerHTML = "Noope! You looser! Password: "+ password+ '<br/><span class="reset" onclick="location.reload()"> One more time? </span>';
    }
    
}
function toName(){
    javascript:location.href='name.html';
}
function category(){
    document.getElementById("category").innerHTML = 'Category: '+randomWordFromData.category;
}
category();

function hint(){
    document.getElementById("hint").innerHTML = '<br/><span class="reset" onclick="showHint()"> Hint?</span>';
}
hint()

function showHint(){
    document.getElementById("hint").innerHTML = randomWordFromData.hint
}

function wholePassword(){
    var guessWholePassword = document.answer.content.value;
    guessWholePass = guessWholePassword.toUpperCase();
    if (guessWholePass == password){
        yes.play();                                                                                                           
        document.getElementById("chances").innerHTML = "Yasss! The password is correct! "+ '<br/><span class="reset" onclick="location.reload()"> One more time? </span>'+'<br/>'+'Your time: '+getSecs() +'  seconds'+'<br>'+"Do You want add your score to scoreboard?"+ '<br/><span class="add" onclick="toName()">Yes</span>';
    } else {
        
        document.getElementById("chances").innerHTML = "Noo, try again! ";
        howManyMisses ++;
        for ( i = 0; i < 10; i++){
            yes.play
            var startChances = 10;
            chancesLeft = startChances - howManyMisses;
         }
        document.getElementById("chances").innerHTML = 'Chances left : '+ chancesLeft;
        if(howManyMisses>=10){
            document.getElementById("chances").innerHTML = "Noope! You looser! Password: "+ password+ '<br/><span class="reset" onclick="location.reload()"> One more time? </span>';
            
        }
    }
}
function saveTime(){
    var gamer = {
    name: name = document.gamers.name.value,
    time: getSecs(),
}
    var gamer1 = JSON.stringify(gamer);
    window.localStorage.setItem('gamer',gamer1)

  }
  save();


