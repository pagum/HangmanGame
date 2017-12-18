var gamersArray=[];

function init(){
  if(localStorage.gamersRecors){
    gamersArray=JSON.parse(localStorage.gamersRecors);
    for(var i=0; i<gamersArray.length; i++){
      var gamName=gamersArray[i].name;
      var gamTime=gamersArray[i].time;
      prepareTableCell(gamersArray[i].name, gamersArray[i].time);
    }
  }
}
function onRegisterPressed(){
  var gamName=document.getElementById("name").value;
  var gamTime=document.getElementById("time").value;

  var gamObj ={
    name: gamName,
    time: gamTime
  }
  gamersArray.push(gamObj);
  //console.log(gamersArray);
  localStorage.gamersRecord =JSON.stringify(gamersArray);
  prepareTableCell(gamName, gamTime);
  document.getElementById("name").value="";
  document.getElementById("time").value="";
}

function prepareTableCell(gamName, gamTime){
  var table =document.getElementById("regtable");
  var row= table.insertRow();
  var gamNameCell=row.insertCell(0);
  var gamTimeCell=row.insertCell(1);

  gamNameCell.innerHTML=gamName;
  gamTimeCell.innerHTML=gamTime;
}
/*function init(){
  document.getElementById("tablerows").innerHTML=""
  if(localStorage.gamersRecord){
    gamersArray =JSON.parse(localStorage.gamersRecord);
    for(var i=0; i<gamersArray.length; i++){
      prepareTableCell(gamersArray[i].name, gamersArray[i].time); 
    }
  }
}

function add(){
  var name=document.getElementById("name").value;
  var time=document.getElementById("time").value;

  var table=document.getElementById("regtable");
  var gamObj={
    name: name,
    time: time
  };

  gamersArray.push(gamObj);
  
  console.log(gamersArray);
  localStorage.gamersRecord =JSON.stringify(gamersArray);
  
  prepareTableCell(name, time);
  document.getElementById("name").value = "";
  document.getElementById("time").value = "";
}

function prepareTableCell(name, time){
  var table =document.getElementById("regtable");
  var row=table.insertRow();

  var nameCell=row.insertCell(0);
  var timeCell=row.insertCell(1);
  
  nameCell.innerHTML=name;
  timeCell.innerHTML=time;
}*/