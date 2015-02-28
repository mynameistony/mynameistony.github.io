var lengthUnits = ["Inches", "Feet", "Yards", "Miles","Meters"];
var volumeUnits = ["Fl. Oz", "Cups", "Pints", "Quarts", "Gallons", "Liters"]; //Liter is French for "Give me some FUCKING cola"!
var tempUnits = ["Farenheit", "Celsius", "Kelvin"];

var compliments = [
"you're beautiful!", "you're perfect!", "don't ever change!", "you are wonderful!", "I like your face...", "you should know that you are perfect :)",
"you are a human.", "you...uhhh...I dunno...maybe...ummmmm...I got nothing :P", "it's kind of hard to come up with compliments.",
"there will be more compliments soon..."
];

var insultNouns = ["cock","dick","ass","nigger","jew","ball","pussy"];

var insultVerbs = ["fuck","suck","lick","sniff","tast"];

function setUsernameCookie (){
		var username= prompt("Who the hell are ya?")
		var cookie = "username=" + username;
		
		alert(cookie);
	
}

function randomInsult(){

	var randNoun1 = insultNouns[Math.floor(Math.random()*insultNouns.length)];
	var randNoun2 = insultNouns[Math.floor(Math.random()*insultNouns.length)];

	var randVerb1 = insultVerbs[Math.floor(Math.random()*insultVerbs.length)];
	var randVerb2 = insultVerbs[Math.floor(Math.random()*insultVerbs.length)];


	var thisInsult = "you are a " + randNoun1 + " " + randVerb1 + "ing " + randNoun2 + " " + randVerb2 + "er";

	var insultElement = document.getElementById("insult");

	insultElement.innerHTML = thisInsult;

}

function randomCompliment(){

	var thisCompliment = compliments[Math.floor(Math.random()*compliments.length)];

	var complimentElement = document.getElementById("compliment");
	//var title = document.getElementById("title");

	//title.innerHTML = thisCompliment;
	complimentElement.innerHTML = thisCompliment;
}

function actuallyConvert(unitType, startUnit, endUnit, amount){
	var result = "I don't know how many";
	switch(unitType){
		case "Length":
			switch(startUnit){

				case "Inches":
					switch(endUnit){

						case "Feet":
							result = amount / 12;
						break;
						case "Yards":
							result = amount / 36;
						break;
						case "Miles":
							result = (amount / 12) / 5280;
						break;						
						case "Meters":
							result = amount * .0254;
						break;

					}
				break;
				case "Feet":
					switch(endUnit){
						case "Inches":
							result = amount * 12;
						break;
						case "Yards":
							result = amount / 3;
						break;
						case "Miles":
							result = amount / 5280;
						break;						
						case "Meters":
							result = amount *.3048;
						break;
					}
				break;
				case "Yards":
					switch(endUnit){				
						case "Inches":
							result = amount * 36;
						break;
						case "Feet":
							result = amount * 3;
						break;
						case "Miles":
							result = amount / 51;
						break;						
						case "Meters":
							result = amount * .9144;
						break;
					}
				break;
				case "Miles":
					switch(endUnit){
						case "Inches":
							result = amount * 5280 * 12;
						break;
						case "Yards":
							result = amount * 51;
						break;
						case "Feet":
							result = amount * 5280;
						break;						
						case "Meters":
							result = amount * 1609.34;
						break;
					}
				break;
				case "Meters":
					switch(endUnit){
						case "Inches":
							result = amount * 39.3701;
						break;
						case "Yards":
							result = amount * 1.09361;
						break;
						case "Feet":
							result = amount * 3.28084;
						break;						
						case "Miles":
							result = amount * 0.000621371;
						break;
					}
				break;

			}
		break;

		case "Volume":

			switch(startUnit){
				
				case "Fl. Oz":
					switch(endUnit){
						case "Cups":
							result = amount / 8;
						break;
						case "Pints":
							result = amount / 16;
						break;
						case "Quarts":
							result = amount / 32;
						break;
						case "Gallons":
							result = amount / 128;
						break;
						case "Liters":
							result = amount * 0.0295735;
						break;
					}
				break;
				case "Cups":
					switch(endUnit){
						case "Fl. Oz":
							result = amount * 8;
						break;
						case "Pints":
							result = amount / 2;
						break;
						case "Quarts":
							result = amount / 4;
						break;
						case "Gallons":
							result = amount / 16;							
						break;
						case "Liters":
							result = amount * 0.236588;
						break;
					}
				break;
				case "Pints":
					switch(endUnit){
						case "Cups":
							result = amount * 2;
						break;
						case "Fl. Oz":
							result = amount * 16;
						break;
						case "Quarts":
							result = amount / 2;
						break;
						case "Gallons":
							result = amount / 8;
						break;
						case "Liters":
							result = amount * 0.473176;
						break;
					}
				break;
				case "Quarts":
					switch(endUnit){
						case "Cups":
							result = amount * 4;							
						break;
						case "Pints":
							result = amount * 2;
						break;
						case "Fl. Oz":
							result = amount * 32;
						break;
						case "Gallons":
							result = amount / 4;
						break;
						case "Liters":
							result = amount * 0.946353;
						break;
					}
				break;
				case "Gallons":
					switch(endUnit){
						case "Cups":
							result = amount * 16;							
						break;
						case "Pints":
							result = amount * 8;
						break;
						case "Quarts":
							result = amount * 4;
						break;
						case "Fl. Oz":
							result = amount * 128;
						break;
						case "Liters":
							result = amount * 3.78541;
						break;
					}
				break;
				case "Liters":
					switch(endUnit){
						case "Cups":
							result = amount * 4.22675;
						break;
						case "Pints":
							result = amount * 2.11338;
						break;
						case "Quarts":
							result = amount * 1.05669;
						break;
						case "Gallons":
							result = amount * 0.264172;
						break;
						case "Fl. Oz":
							result = amount * 33.814;
						break;
					}
				break;

			}
		break;

		case "Temperature":

			switch(startUnit){

				case "Farenheit":
					switch(endUnit){
						case "Kelvin":
							result = "i don't know how many";
						break;
						case "Celsius":
							result = (amount - 32) * (5/9);
						break;
					}
				break;
				case "Celsius":
					switch(endUnit){
						case "Kelvin":
						break;
						case "Farenheit":
							result = (amount + 32) / (9/5);
						break;
					}
				break;
				case "Kelvin":
					switch(endUnit){
						case "Farenheit":
						break;
						case "Celsius":
						break;
					}
				break;
			}
		break;

		default:
			result = "not really anything...";
		break;



	}

	var m = amount + " " + startUnit + " is " + result + " " + endUnit;
	return m;

}

function convert(){

	var currentType = document.getElementById("current-unit-type").value; // Get current type of unit

	var startUnit = document.getElementById("start-unit").value; // Get starting unit

	var endUnit = document.getElementById("end-unit").value; // Get ending unit

	var startAmount = document.getElementById("start-amount").value; // Get amount

	document.getElementById('converted-value').innerHTML = actuallyConvert(currentType,startUnit,endUnit,startAmount); //Convert and set element
}

function setStartUnit(){
	var thisType = document.getElementById("current-unit-type").value; // Get current type of unit

	var startingUnit = document.getElementById('start-unit').value; //Selector for starting unit

	var endUnitSelector = document.getElementById('end-unit'); //Selector for starting unit

	while (endUnitSelector.hasChildNodes()) {  
		endUnitSelector.removeChild(endUnitSelector.firstChild);
	}

	switch(thisType){
		case "Length":
			for (var i = 0; i<lengthUnits.length; i++){
				var opt = document.createElement('option');
				opt.value = lengthUnits[i];
				opt.innerHTML = lengthUnits[i];
				if(lengthUnits[i] != startingUnit)
					endUnitSelector.appendChild(opt);
			}
		break;

		case "Volume":
			for (var i = 0; i<volumeUnits.length; i++){
				var opt = document.createElement('option');
				opt.value = volumeUnits[i];
				opt.innerHTML = volumeUnits[i];
				if(volumeUnits[i] != startingUnit)
					endUnitSelector.appendChild(opt);
			}
		break;

		case "Temperature":
			for (var i = 0; i<tempUnits.length; i++){
				var opt = document.createElement('option');	
				opt.value = tempUnits[i];
				opt.innerHTML = tempUnits[i];
				if(tempUnits[i] != startingUnit)
					endUnitSelector.appendChild(opt);
			}
		break;
	}

	convert();
}
function setUnitType(){
	var thisType = document.getElementById("current-unit-type").value; // Get current type of unit

	var startUnitSelector = document.getElementById('start-unit'); //Selector for starting unit	

	var endUnitSelector = document.getElementById('end-unit'); //Selector for starting unit

	//Clear starting unit selector
	while (startUnitSelector.hasChildNodes()) {  
		startUnitSelector.removeChild(startUnitSelector.firstChild);
	}

	while (endUnitSelector.hasChildNodes()) {  
		endUnitSelector.removeChild(endUnitSelector.firstChild);
	}

	switch(thisType){

		case "Volume":
			for (var i = 0; i<volumeUnits.length; i++){
				var opt = document.createElement('option');
				opt.value = volumeUnits[i];
				opt.innerHTML = volumeUnits[i];
				startUnitSelector.appendChild(opt);

			}			
		break;

		case "Length":

			for (var i = 0; i<lengthUnits.length; i++){
				var opt = document.createElement('option');
				opt.value = lengthUnits[i];
				opt.innerHTML = lengthUnits[i];
				startUnitSelector.appendChild(opt);

			}
		break;

		case "Temperature":
			for (var i = 0; i<tempUnits.length; i++){
				var opt = document.createElement('option');
				opt.value = tempUnits[i];
				opt.innerHTML = tempUnits[i];
				startUnitSelector.appendChild(opt);
			}
			

		break;

		default:
			//alert("Pick a unit!");
		break;

	}

	setStartUnit();
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
