function setUnitType(){
	var thisType = document.getElementById("current-unit-type").value;

	switch(thisType){

		case "Volume":
			selectStartUnit = document.getElementById('start-unit');
			while (selectStartUnit.hasChildNodes()) {  
    				selectStartUnit.removeChild(selectStartUnit.firstChild);
			}
		break;

		case "Length":
			selectStartUnit = document.getElementById('start-unit');
			selectEndUnit = document.getElementById('end-unit');

			while (selectStartUnit.hasChildNodes()) {  
    				selectStartUnit.removeChild(selectStartUnit.firstChild);
			}

			while (selectEndUnit.hasChildNodes()) {  
    				selectEndUnit.removeChild(selectEndUnit.firstChild);
			}

			var lengthUnits = ["Inches", "Feet", "Yards", "Miles","Meters"];
			for (var i = 0; i<lengthUnits.length; i++){
				var opt = document.createElement('option');
				opt.value = lengthUnits[i];
				opt.innerHTML = lengthUnits[i];
				selectStartUnit.appendChild(opt);
			}
   
		break;

		case "Temperature":
			selectStartUnit = document.getElementById('start-unit');
			while (selectStartUnit.hasChildNodes()) {  
    				selectStartUnit.removeChild(selectStartUnit.firstChild);
			}

		break;

		default:
			alert("Pick a unit dumbass!");

			selectStartUnit = document.getElementById('start-unit');
			while (selectStartUnit.hasChildNodes()) {  
    				selectStartUnit.removeChild(selectStartUnit.firstChild);
			}

		break;

	}
//	alert(thisType);
}

function sayGreeting(){
	var person = prompt("Who the hell are you?");
	var newTitle = "";


	if(person !== null){
		if(person == ""){
			person = "not important";
			
			newTitle = "Why didn't you put in a name, bro?";
			document.getElementById("title").innerHTML = newTitle;
//			fuckYou();
		}
		else{
			if(person == "Haily" || person == "haily"){
				alert("Hey, beautiful!");
			}

			newTitle = "Hello, " + person;
		}
	}
	else{
//		alert("FUCK THAT SHIT");
	}
	;
	
	var newHeader = "<a href=\"/\">Your name is " + person + "</a>";

	document.getElementById("title").innerHTML = newTitle;
	document.getElementById("header").innerHTML = newHeader;


}

function fuckYou(){
	alert("Err #3693: NO_NAME");
	alert("Backtracking IP to identify...");
	alert(getIP());
	document.getElementById("header").innerHTML = "ERR";

}

function getIP(){

	var ip = document.createElement("img");

	ip.src = "http://echoip.org";

	print(ip);
}

function calculate(){
	var num1 = 0;
	var num2 = 0;
	var ans = 0;

	var oper = document.forms["calculator"]["op"].value;

	num1 = document.forms["calculator"]["num1"].value;
	num2 = document.forms["calculator"]["num2"].value;

	

	switch(oper){

		case "+":
			ans = Number(num1) + Number(num2);
		break;

		case "-":
			ans = num1 - num2;
		break;

		case "*":
			ans = num1 * num2;
		break;
		case "/":
			ans = num1 / num2;
		break;

	}
	alert(ans);
//	document.getElementById("answer").innerHTML = ans;
}
