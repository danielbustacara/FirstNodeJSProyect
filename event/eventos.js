var events = require('events');
var util =  require('util');

var Person = function(name) {
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person("james");
var daniel = new Person("daniel");

var personas = [james,daniel];

personas.forEach(function(person){
  person.on('speak',function(msg){
    console.log(person.name + " : " + msg);
  })
});

james.emit("speak","Hola daniel");
daniel.emit("speak","Hola james");
james.emit("speak","que tal");
daniel.emit("speak","bien y tu?");
