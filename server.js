const express = require('express');
const five = require("johnny-five");


let app = express();
let board = new five.Board({port: 'COM4'});

app.get('/', function(req, res) {
	res.send('Hola mundo');
})

app.listen(3000, function(err) {
	if(err) return console.log('Hubo un error'), process.exit(1);
	console.log('Escuchando en el puerto 3000');
})



board.on("ready", function() {
	let led = new five.Led(13);
	led.blink(500);

	this.repl.inject( {

		led: led,
		on: () => led.on(),
		off: () => led.off(),
		stop: () => led.stop()
				
	})
})