var cc1 = document.getElementById("change1");
var cc2 = document.getElementById("change2");
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rcolor = document.getElementById("random");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function generateColor() {
    var pos1 = Math.floor((Math.random() * 256));
    var pos2 = Math.floor((Math.random() * 256));
    var pos3 = Math.floor((Math.random() * 256));

	var rgbColor = pos1 + "," + pos2 + "," + pos3; 

// ---Converting RGB into HEX to update color value attribute with hex code---
	hexcolor = "#" + ((1 << 24) + (pos1 << 16) + (pos2 << 8) + pos3).toString(16).slice(1);

	return  rgbColor;
}


// ---Update "color1" value attribute--- 
function colorPick1() {
	generateColor();
	cc1.value = hexcolor;
}

// ---Update "color2" value attribute---
function colorPick2() {
	generateColor();
	cc2.value = hexcolor;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// ---First update both the colors value attribute and then apply those colors---
rcolor.addEventListener("click", function() {
	colorPick1();
	colorPick2();
	setGradient();
});
