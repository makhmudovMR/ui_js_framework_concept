import {Main} from './components/Main';
import {Router} from './core/router/Router';
import {DashboardPage} from './pages/DashboardPage';
import {SomePage} from './pages/SomePage';

new Router('#app', {
  dashboard: DashboardPage,
  some: SomePage
});
