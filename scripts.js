var navTitles = ["Navigate...","Home", "Other Site", "Portfolio", "About Me"];
var navLinks  = ["","/","http://tonyrogers.ddns.net","/portfolio.html","/about.html"];

function outputHeader(title,headerText){
	
	var thisHeader = document.getElementById("header");

	var thisTitle = document.createElement("title");
	thisTitle.innerHTML = title;

	var thisHeaderText = document.createElement("h2");
	thisHeaderText.className = "header-text";
	thisHeaderText.innerHTML = headerText;

	var thisNav = document.createElement("select");
	thisNav.className = "nav-bar";
	thisNav.id = "nav-bar";
	thisNav.onchange = function nav(){

		window.location = document.getElementById("nav-bar").value;
	}

	for (var i = 0; i <  navTitles.length; i++) {
		var thisNavItem = document.createElement("option");

		thisNavItem.value = navLinks[i];
		thisNavItem.innerHTML = navTitles[i];

		thisNav.appendChild(thisNavItem);
	}



	thisHeader.appendChild(thisTitle);
	thisHeader.appendChild(thisHeaderText);
	thisHeader.appendChild(thisNav);
}

function outputFooter(){

}

