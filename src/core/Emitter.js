export class Emitter{

  constructor(){
    this.listeners = {}
  }

  emit(event, ...args){
    if(!Array.isArray(this.listeners[event])){
      return false;
    }
    this.listeners[event].forEach(listener => {
      listener(...args);
    });
    return true;
  }

  subscribe(event, fn){
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] = this.listeners[event].filter(listener => {
        listener => listener !== fn;
      })
    }
  }
}

// Example

const emitter = new Emitter();

emitter.subscribe('event1', (data1, data2) => {
  console.log('data1: ', data1);
  console.log('data2: ', data2);
});


emitter.emit('event1', 'hello', 'world')
