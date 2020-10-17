//Navigation id used for the addNavigation function that
//applies the navigation panel at the top of each page.
let navigation = document.getElementById("navigation");

function addNavigation() {
	navigation.innerHTML = "<div class=\"nav-grid-container\"><a class=\"nav-grid-item\" href=\"./index.html\">Home</a><a class=\"nav-grid-item\" href=\"./aboutme.html\">Aboue Me</a><a class=\"nav-grid-item\" href=\"./gameprojects.html\">Game Projects</a><a class=\"nav-grid-item\" href=\"./softwareprojects.html\">Software Projects</a></div>";
}
addNavigation();
