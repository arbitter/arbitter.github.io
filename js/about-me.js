/*
References to each grid item by ID.
*/
let frontEnd = document.getElementById("front-end");
let backEnd = document.getElementById("back-end");
let gameDev = document.getElementById("game-dev");
let softwareTest = document.getElementById("software-test");
let userEx = document.getElementById("user-ex");
let softSkills = document.getElementById("soft-skills");
let devTools = document.getElementById("dev-tools");
let methods = document.getElementById("methods");
/// end references

/*
Mouse over events for each grid item.
*/
frontEnd.addEventListener("mouseover", feMouseOver);
backEnd.addEventListener("mouseover", beMouseOver);
gameDev.addEventListener("mouseover", gdMouseOver);
softwareTest.addEventListener("mouseover", stMouseOver);
userEx.addEventListener("mouseover", uxMouseOver);
softSkills.addEventListener("mouseover", ssMouseOver);
devTools.addEventListener("mouseover", dtMouseOver);
methods.addEventListener("mouseover", methodsMouseOver);
/// end mouse over events

/*
Mouse out events for each grid item.
*/
frontEnd.addEventListener("mouseout", feMouseOut);
backEnd.addEventListener("mouseout", beMouseOut);
gameDev.addEventListener("mouseout", gdMouseOut);
softwareTest.addEventListener("mouseout", stMouseOut);
userEx.addEventListener("mouseout", uxMouseOut);
softSkills.addEventListener("mouseout", ssMouseOut);
devTools.addEventListener("mouseout", dtMouseOut);
methods.addEventListener("mouseout", methodsMouseOut);
/// end mouse out events

/*
Mouse Over Functions for each grid item.
*/
function feMouseOver() {
  frontEnd.innerHTML = "<dl><dt><h4>JavaScript</h4></dt><dt><h4>HTML</h4></dt><dt><h4>CSS</h4></dt><dt><h4>React</h4></dt><dt><h4>Angular</h4></dt></dl>";
};

function beMouseOver() {
  backEnd.innerHTML = "<dl><dt><h4>C++</h4></dt><dt><h4>Java</h4></dt><dt><h4>Python</h4></dt><dt><h4>Spring</h4></dt><dt><h4>Django</h4></dt><dt><h4>Flask</h4></dt></dl>";
};

function gdMouseOver() {
  gameDev.innerHTML = "<dl><dt><h4>UE4</h4></dt><dt><h4>UMG</h4></dt><dt><h4>Blueprint</h4></dt><dt><h4>Unity</h4></dt><dt><h4>Box2D</h4></dt></dl>";
}

function stMouseOver() {
  softwareTest.innerHTML = "<dl><dt><h4>Unit Testing</h4></dt><dt><h4>Branch Testing</h4></dt><dt><h4>Testing Automation</h4></dt><dt><h4>Appium</h4></dt><dt><h4>Selenium</h4></dt></dl>";
}

function uxMouseOver() {
  userEx.innerHTML = "<dl><dt><h4>User Stories</h4></dt><dt><h4>Use Cases</h4></dt><dt><h4>Wireframing</h4></dt><dt><h4>Information Architecture</h4></dt></dl>";
}

function ssMouseOver() {
  softSkills.innerHTML = "<dl><dt><h4>Communication</h4></dt><dt><h4>Collaboration</h4></dt><dt><h4>Critical Thinking</h4></dt><dt><h4>Work Ethic</h4></dt></dl>";
}

function dtMouseOver(){
  console.log("Dev Tools Mouse Over Logged");
  devTools.innerHTML = "<dl><dt><h4>GitHub</h4></dt><dt><h4>Subversion</h4></dt><dt><h4>Trello</h4></dt></dl>";
}

function methodsMouseOver() {
  console.log("Methods Mouse Over Logged");
  methods.innerHTML = "<dl><dt><h4>Agile</h4></dt><dt><h4>Waterfall</h4></dt></dl>";
}
/// End Mouse Over Functions

/*
Mouse Out Functions for each grid item.
*/
function feMouseOut() {
  frontEnd.innerHTML = "<h3>Front End</h3>";
};

function beMouseOut() {
  backEnd.innerHTML = "<h3>Back End</h3>";
};

function gdMouseOut() {
  gameDev.innerHTML = "<h3>Game Development</h3>";
}

function stMouseOut() {
  softwareTest.innerHTML = "<h3>Software Testing</h3>";
}

function uxMouseOut() {
  userEx.innerHTML = "<h3>User Experience</h3>";
}

function ssMouseOut() {
  softSkills.innerHTML = "<h3>Soft Skills</h3>";
}

function dtMouseOut(){
  devTools.innerHTML = "<h3>Developer Tools</h3>";
}

function methodsMouseOut() {
  methods.innerHTML = "<h3>Methodologies</h3>";
}
/// End Mouse Out Functions
