export class DomListener {
  constructor($root, options){
    this.$root = $root;
    this.listeners = options?.listeners;
  }

  /** Инициализация слушателей */
  initListeners(){
    this.listeners.forEach((listener) => {
      if(!this[listener]){
        throw new Error(`Need method ${listener} in ${this.name} component`);
      }
      /**
       * if we will not bind 'this' object 
       * we will lost 'this' object component in method 
       * click(){
       *  this // undefined
       * }
       */
      this[listener] = this[listener].bind(this); 
      this.$root.addEventListener(listener, this[listener]);
    });
  }

  /** Удаление слушателей */
  removeListeners(){
    this.listeners.forEach(listener => {
      this.$root.removeEventListener(listener, this[listener]);
    })
  }
}