/*
Navigation Variable
-------------------
The reference to the navigation ID on each page.
*/
let navigation = document.getElementById("navigation");

/*
Add Navigation Function
-----------------------
Adds the navigation panel that goes at the top of each page.
*/
function addNavigation() {
	navigation.innerHTML = "<div class=\"nav-grid-container\"><a class=\"nav-grid-item\" href=\"./index.html\">Home</a><a class=\"nav-grid-item\" href=\"./aboutme.html\">About Me</a><a class=\"nav-grid-item\" href=\"./gameprojects.html\">Game Projects</a><a class=\"nav-grid-item\" href=\"./softwareprojects.html\">Software Projects</a></div>";
}

/*
Add Navigation Function Call
----------------------------
Add Navigation is called at the end of the script to make
sure the navigation panel is added to a page when loaded. 
*/
addNavigation();
