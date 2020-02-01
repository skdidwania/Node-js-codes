var events = require('events');
var util = require('util');
var Person = function(name){
    this.name = name;
}
util.inherits(Person,events.EventEmitter);
var james = new Person('james');
var ryan = new Person('ryan');
var ryu = new Person('ryu');

var People = [james,ryan,ryu];

People.forEach(function(Person){
    Person.on('speak',function(msg){
        console.log(Person.name + 'said this ' + msg );
    });
});

james.emit('speak','This is james');
ryan.emit('speak','OH great nice to meet you Mer. ');
ryu.emit('speak','Thats cool');