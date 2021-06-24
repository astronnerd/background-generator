var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var html = document.getElementById("gradient");
var direction = document.getElementById("direction");

function setGradient() {
	html.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = html.style.background + ";";
}

function setDirection() {
	html.style.background = "linear-gradient(" 
	+ direction.value
	+ ", " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = html.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
direction.addEventListener("input", setDirection);