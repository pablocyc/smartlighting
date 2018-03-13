const path = require('path')
const express = require('express');
const five = require("johnny-five");

let app = express();
let board = new five.Board({port: 'COM4'});

app.use(express.static('public'));

app.get('/on-off1', encender1);
app.get('/on-off2', encender2);
app.get('/on-off3', encender3);
app.get('/on-off4', encender4);

board.on("ready", arduino);

function encender1(peticion, resultado) {
	resultado.send(arduino(1));
}
function encender2(peticion, resultado) {
	resultado.send(arduino(2));
}
function encender3(peticion, resultado) {
	resultado.send(arduino(3));
}
function encender4(peticion, resultado) {
	resultado.send(arduino(4));
}

var flagState1 = true;
var flagState2 = true;
var flagState3 = true;
var flagState4 = true;

function arduino(state) {
	let led1 = new five.Led(8);	
	let led2 = new five.Led(9);	
	let led3 = new five.Led(10);	
	let led4 = new five.Led(11);	

	switch(state) {
		case 1: if(flagState1) led1.on(), flagState1 = false;
						else led1.off(), flagState1 = true; break;
		case 2: if(flagState2) led2.on(), flagState2 = false;
						else led2.off(), flagState2 = true; break;
		case 3: if(flagState3) led3.on(), flagState3 = false;
						else led3.off(), flagState3 = true; break;
		case 4: if(flagState4) led4.on(), flagState4 = false;
						else led4.off(), flagState4 = true; break;
	}
}

app.listen(3000, function(err) {
	if(err) return console.log('Hubo un error'), process.exit(1);
	console.log('Escuchando en el puerto 3000');
})

// board.on("ready", function() {
// 	let led = new five.Led(13);

// 	this.repl.inject( {

// 		led: led,
// 		on: () => led.on(),
// 		off: () => led.off(),
// 		stop: () => led.stop()
				
// 	})
// })

