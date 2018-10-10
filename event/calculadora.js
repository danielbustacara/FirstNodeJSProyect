var eventos = require('events');

var calculadora = new eventos.EventEmitter();

calculadora.on('sumar', (a,b) => {
  console.log('el resultado es '+(a+b));
});

calculadora.emit('sumar',4,6);
