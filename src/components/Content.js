import { BaseComponent } from "../core/BaseComponent";

export class Content extends BaseComponent{

  constructor($root){
    super($root)
  }
  
  toHTML(){
    return `
      <div style="border: 2px dotted">
        <br/>
      </div>
    `
  }
}
