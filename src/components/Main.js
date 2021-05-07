import { BaseComponent } from "../core/BaseComponent";
import { Content } from './Content';
import { Header } from './Header';

export class Main{

  constructor() {
    const app = document.querySelector('#app');
    this.$app = app;
    this.components = [Header, Content];
  }

  render(){
    console.log(this.components);
    this.components.map(Component => {
      const $div = document.createElement('div');
      const comp = new Component($div);
      $div.innerHTML = comp.toHTML();
      this.$app.append($div);
    });
  }
}
