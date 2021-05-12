import { BaseComponent } from "../core/BaseComponent";

export class Content extends BaseComponent{

  constructor($root, emitter){
    super($root, {
      listeners: [],
    })
    this.emitter = emitter.emitter;
    this.name = 'Content';
  }

  init(){
    super.init();
    this.unsub = this.emitter.subscribe('myevent', (data) => {
      this.$root.innerHTML = data;
    });
  }

  destroy(){
    super.destroy();
    console.log('destroy was called')
    this.unsub();
  }
  
  toHTML(){
    return `
      <div style="border: 2px dotted">
        <br/>
      </div>
    `
  }
}
