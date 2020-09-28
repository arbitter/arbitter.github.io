// 4 buttons for navigation at the top of each page. When clicked, they take the user to a different page on the website. 
let homeButton = document.getElementById("homeButton");
let aboutMeButton = document.getElementById("aboutButton");
let softwareButton = document.getElementById("softwareButton");
let gameButton = document.getElementById("gameButton");

//Learn more link under name and title. Gets all items with the learn-more class. 
//Since there should only be one, we know the one we're looking for is the 0th element. 
let learnMore = document.getElementById("learn-more");

//contact me link at the bottom right of the page. 
let contactMe = document.getElementById("contact-me");

//5 urls for each webpage. When clicking one of the navigation buttons go to these urls. 
let homeUrl = "./index.html";
let aboutMeUrl = "./aboutme.html";
let softwareUrl = "./softwareprojects.html";
let gameUrl = "./gameprojects.html";
let contactUrl = "./contact-me.html";

//email link. 
let email = document.getElementById("email");
let emailUrl = "mailto: averyclariday@my.unt.edu";


//On click events for elements on every page of the website. 
homeButton.onclick = () => {
	location.href = homeUrl; 
}
aboutMeButton.onclick = () => {
	location.href = aboutMeUrl; 
}
softwareButton.onclick = () => {
	location.href = softwareUrl;
}
gameButton.onclick = () => {
	location.href = gameUrl;
}

//On click events for elements only on certain pages of the website. 
if(learnMore != null){
	learnMore.onclick = () => {
		location.href = aboutMeUrl; 
	}
}

if(contactMe != null){
	contactMe.onclick = () => {
		location.href = contactUrl;
	}
}

if(email != null){
	email.onclick = () => {
		window.open(emailUrl);
	}
}