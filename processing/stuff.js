var optionsHidden = true;

function toggleOptions(){

  var newStyle = "visibility:";
  if(optionsHidden){
    newStyle += "visible";
    optionsHidden = false;
  }else{
    newStyle += "hidden";
    optionsHidden = true;
  }

  document.getElementById("options").style = newStyle;
}

function fuck(){
  var newLevel = document.getElementById("newLevel").value;

  
  location.reload();
  updateLevel(newLevel);

}

 function toggleAnnoyance(){
  if(getCookie("dontannoy") == "no"){
    clearInterval(annoyanceInterval);

    document.getElementById("annoyRate").innerHTML = "Off";

    setCookie("dontannoy","yes",30);

    document.getElementById("annoy").style = "color:red;";

    alert("Annonyance disabled");
 
   }
  else{
    var rate = 5000-(50*getCookie("level"));

    clearInterval(annoyanceInterval);

    annoyanceInterval = setInterval(setAnnoy,rate);

    document.getElementById("annoyRate").innerHTML = rate + " ms";

    setCookie("dontannoy","no",30);

    document.getElementById("annoy").style = "color:green;";

    alert("Annonyance enabled");
  }
}

function setAnnoy(){
  setCookie("annoy",1,30); 
}
function timeToAnnoy(){
  if(getCookie("annoy") == "1"){
    setCookie("annoy",0,30);
    return true;
  }else{
    return false; 
  } 
  
}

function clearStats(){
  document.getElementById("secondsWasted").innerHTML = 0;
  document.getElementById("minutesWasted").innerHTML = 0;
  document.getElementById("currLevel").innerHTML = 0;
  document.getElementById("totalClicks").innerHTML = 0;
  document.getElementById("annoy").checked = false;

   setCookie("lastMin",0,30);
   setCookie("lastSec",0,30);
   setCookie("level",0,30);
   setCookie("numClicks",0,30);   
   setCookie("dontannoy","yes",30);   

   location.reload();
}


function updateTime(){
  var newSec = document.getElementById("secondsWasted").innerHTML;

  var newMin = document.getElementById("minutesWasted").innerHTML;
  
  newSec++;

  if(newSec == 60){
    newSec = 0;
    newMin++;
  }
  
  if(newSec < 10)
    newSec = "0" + newSec;


  document.getElementById("secondsWasted").innerHTML = newSec;
  document.getElementById("minutesWasted").innerHTML = newMin;  

  setCookie("lastMin",newMin,30);
  setCookie("lastSec",newSec,30);    
}
          
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
} 
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
} 


function getClicks(){
    return getCookie("numClicks");
}

function getLevel(){
  currLevel = getCookie("level");
  //alert("Resuming level "+ currLevel);
  
  document.getElementById("currLevel").innerHTML = currLevel;
  document.getElementById("secondsWasted").innerHTML = getCookie("lastSec");
  document.getElementById("minutesWasted").innerHTML = getCookie("lastMin");

  return currLevel;
}

function updateToggled(thisToggled){
  document.getElementById("numToggled").innerHTML = thisToggled;
}

function updateLevel(newLevel){

 if(getCookie("dontannoy") == "yes"){
    clearInterval(annoyanceInterval);
    document.getElementById("annoyRate").innerHTML = "Off";
  }
  else{
   var rate = 5000-(50*newLevel);
    clearInterval(annoyanceInterval);
    annoyanceInterval = setInterval(setAnnoy,rate);
    document.getElementById("annoyRate").innerHTML = rate + " ms";  
  }  
  document.getElementById("currLevel").innerHTML = newLevel;
  setCookie("level",newLevel,30);
}

function setClicks(newClicks){
  document.getElementById("totalClicks").innerHTML = newClicks;
  setCookie("numClicks",newClicks,30);
}

var annoyanceInterval;
setInterval(updateTime,1000);
