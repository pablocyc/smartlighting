const path = require('path')
const express = require('express');
const five = require("johnny-five");


let app = express();
let board = new five.Board({port: 'COM4'});

app.use(express.static('public'));

app.get('/on-off', encender);


function encender(peticion, resultado) {
	resultado.send(arduino());
}


app.listen(3000, function(err) {
	if(err) return console.log('Hubo un error'), process.exit(1);
	console.log('Escuchando en el puerto 3000');
})

var flagState = false;
board.on("ready", arduino);

function arduino() {
	let led = new five.Led(13);
	if(flagState) led.on(), flagState = false;
	else led.off(), flagState = true;
}

// board.on("ready", function() {
// 	let led = new five.Led(13);

// 	this.repl.inject( {

// 		led: led,
// 		on: () => led.on(),
// 		off: () => led.off(),
// 		stop: () => led.stop()
				
// 	})
// })