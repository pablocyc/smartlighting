let btn1 = document.getElementById("boton1");
let btn2 = document.getElementById("boton2");
let btn3 = document.getElementById("boton3");
let btn4 = document.getElementById("boton4");
let imgBoton1 = document.getElementById("img-boton1");
let imgBoton2 = document.getElementById("img-boton2");
let imgBoton3 = document.getElementById("img-boton3");
let imgBoton4 = document.getElementById("img-boton4");

var flag1 = true;
var flag2 = true;
var flag3 = true;
var flag4 = true;

btn1.onclick = function() { 
	if(flag1) imgBoton1.src = "images/lampOn.png", flag1=false
	else imgBoton1.src = "images/lampOff.png", flag1=true														
}
btn2.onclick = function() { 
	if(flag2) imgBoton2.src = "images/lampOn.png", flag2=false
	else imgBoton2.src = "images/lampOff.png", flag2=true														
}
btn3.onclick = function() { 
	if(flag3) imgBoton3.src = "images/lampOn.png", flag3=false
	else imgBoton3.src = "images/lampOff.png", flag3=true														
}
btn4.onclick = function() { 
	if(flag4) imgBoton4.src = "images/lampOn.png", flag4=false
	else imgBoton4.src = "images/lampOff.png", flag4=true														
}
