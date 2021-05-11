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
    const Page = this.routes.dashboard
    const page = new Page();
    this.$placeholder.append(page.getRoot());
  }

  destroy(){
    window.removeEventListener(this.changePageHandler);
  }
}