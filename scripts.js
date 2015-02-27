function setUnitType(){
	
	alert("Ok");
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
