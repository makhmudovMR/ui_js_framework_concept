import {Main} from './components/Main';
import {Router} from './core/router/Router';
import {DashboardPage} from './pages/DashboardPage';

new Router('#app', {
  dashboard: DashboardPage,
});

// const main = new Main();
// main.render();