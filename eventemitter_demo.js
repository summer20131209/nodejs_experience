var events = require('events');
var emitter = new events.EventEmitter(); 
emitter.on('some_event', function() { 
    console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
    emitter.emit('some_event'); 
}, 1000); 