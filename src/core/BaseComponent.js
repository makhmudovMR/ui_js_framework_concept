import { DomListener } from './DomListener';

export class BaseComponent extends DomListener{
  
  constructor($root, options = {}){
    super($root, options)
  }

  init(){
    super.initListeners();
  }

  destroy(){
    super.removeListeners();
  }

  toHTML(){
    return ``;
  }

}