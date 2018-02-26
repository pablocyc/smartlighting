const express = require('express');
const five = require("johnny-five");


let app = express();
let board = new five.Board({port: 'COM4'});

app.use(express.static('public'));

app.get('/on', encender);
app.get('/off', apagar);

function encender(peticion, resultado) {
	resultado.send(arduino(1));
}
function apagar(peticion, resultado) {
	resultado.send(arduino(0));
}



app.listen(3000, function(err) {
	if(err) return console.log('Hubo un error'), process.exit(1);
	console.log('Escuchando en el puerto 3000');
})


board.on("ready", arduino);

function arduino(state) {
	let led = new five.Led(13);
	if(state) led.on();
	else led.off();
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