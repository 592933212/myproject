import Home from '@/components/children/home.vue'
import Mystar from '@/components/children/next/Mystar.vue'
import Header from '@/components/children/header.vue'
import Explore from '@/components/children/next/explore.vue'
import MarketPlace from '@/components/children/next/marketplace.vue'

const routers = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/myproject'
  },
  {
    path: '/header',
    name: 'header',
    component: Header,
    children: [
      {
        path: '/mystar',
        name: 'mystar',
        component: Mystar
      },
      {
        path: '/explore',
        name: 'explore',
        component: Explore
      },
      {
        path: '/marketplace',
        name: 'marketplace',
        component: MarketPlace
      }
    ]
  }
]
export default routers
