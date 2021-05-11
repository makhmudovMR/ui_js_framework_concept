import { BaseComponent } from "../core/BaseComponent";
import { Content } from './Content';
import { Header } from './Header';
import { Emitter } from "../core/Emitter";

export class Main{

  constructor() {
    const app = document.querySelector('#app');
    this.$app = app;
    this.components = [Header, Content];
    this.emitter = new Emitter();
  }

  render(){
    console.log(this.components);
    /**
     * Проходимся по массиву классов компонетов и создаем объекты этих классов
     * добавляя в корневой узел div html который возращает компонент (у каждого компанента своя обертка div)
     * добавляем в корневой div app (корневой контейнер приложения) divы копонентов
     * и возвращаем массив объектов копонентов
     */
    this.components = this.components.map(Component => {
      const $div = document.createElement('div');
      const comp = new Component($div, {
        emitter: this.emitter,
      });
      $div.innerHTML = comp.toHTML();
      this.$app.append($div);
      return comp;
    });

    /**
     * Инициализируем слушатели компонентов
     */
    this.components.forEach(component => {
      component.init();
    })
  }
}
