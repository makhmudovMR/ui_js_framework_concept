import { DomListener } from './DomListener';

export class BaseComponent extends DomListener{
  
  constructor($root, options = {}){
    super($root, options)
  }

  init(){
    this.initListeners();
  }

  destroy(){
    this.removeListeners();
  }

  toHTML(){
    return ``;
  }

}