import {Page} from '../core/router/Page';
import {Main} from '../components/Main';
export class SomePage extends Page{

  getRoot(){
    console.log('params => ', this.params)
    this.main = new Main();
    return this.main.getRoot();
  }

  afterRender(){
    this.main.init();
  }

  destroy(){
    this.main.destroy();
    console.log('destroy was called');
  }

}