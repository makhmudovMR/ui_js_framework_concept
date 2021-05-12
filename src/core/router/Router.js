import {ActiveRoute} from './ActiveRoute';

export class Router{

  constructor(selector, routes){
    if(!selector){
      throw new Error('Selector is required');
    }

    this.$placeholder = document.querySelector(selector);
    console.log(this.$placeholder)
    this.routes = routes;
    this.changePageHandler = this.changePageHandler.bind(this);
    this.init();
  }

  init(){
    window.addEventListener('hashchange', this.changePageHandler)
    this.changePageHandler();
  }

  changePageHandler(event){
    if(this.page){
      this.page.destroy();
    }
    this.$placeholder.innerHTML = '';

    const Page = this.routes[ActiveRoute.path];
    this.page = new Page(ActiveRoute.params);

    this.$placeholder.append(this.page.getRoot());
    this.page.afterRender();
  }

  destroy(){
    window.removeEventListener(this.changePageHandler);
  }
}