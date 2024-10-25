import Home from '@/page/home';
import About from '@/page/about';

const routes = [
  {
    path: '/',
    component: Home,
    // 不再需要 exact 属性，Route 默认匹配精确路径
  },
  {
    path: '/about',
    component: About,
  },
];

export default routes;
