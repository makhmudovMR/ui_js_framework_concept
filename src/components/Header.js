import { BaseComponent } from "../core/BaseComponent";

export class Header extends BaseComponent {

  constructor($root, emitter){
    super($root, {
      listeners: ['click'], 
    })
    this.emitter = emitter.emitter;
    this.name = 'Header';
  }

  click(){
    console.log('click Header')
    console.log(this.name);
    console.log(this.emitter)
    this.emitter.emit('myevent', 'test3');
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
