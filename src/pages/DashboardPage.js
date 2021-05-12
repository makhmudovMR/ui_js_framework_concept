import { Page } from '../core/router/Page';

export class DashboardPage extends Page{

  getRoot(){
    return document.createElement('div').innerHTML = '<h1>this is dashboard</h1>'
  }


}