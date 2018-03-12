let boton = document.getElementById("boton");
let texto = document.getElementById("texto_piso");
let imgBoton = document.getElementById("img-boton");

var flag = true;
boton.addEventListener("click", cambiar);

function cambiar() {
	texto.innerHTML = "Dormitorio";
	if(flag) {
		imgBoton.src = "images/lampOn.png";
		flag = false;
	}
	else {
		imgBoton.src = "images/lampOff.png";
		flag = true;
	}
}