var navTitles = ["Navigate...","Home", "Other Site", "Portfolio", "About Me"];
var navLinks  = ["","/","http://tonyrogers.ddns.net","/portfolio.html","/about.html"];

function setStyleSheet(){
	var thisStyle = document.createElement("link");
 	thisStyle.rel = "stylesheet";
 	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
		// alert("Mobile");
 		thisStyle.href="styles_mobile.css";
	}
	else{
		// alert("PC");
		thisStyle.href="styles.css";
	}

	document.body.appendChild(thisStyle);

}

function outputHeader(title,headerText){
	setStyleSheet();
	var thisHeader = document.getElementById("header");

	var thisTitle = document.createElement("title");
	thisTitle.innerHTML = title;

	var thisHeaderText = document.createElement("div");
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

