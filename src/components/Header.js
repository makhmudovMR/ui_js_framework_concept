import { BaseComponent } from "../core/BaseComponent";

export class Header extends BaseComponent {

  constructor($root){
    super($root, {
      listeners: ['click'], 
    })
    this.name = 'Header';
  }

  click(){
    console.log('click Header')
    console.log(this.name);
  }

  toHTML() {
    return `
      <div>
        <h3>Header</h3>
        <input type="text"  name="test">
      </div>
    `;
  }
}
