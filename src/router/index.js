import Home from '@/components/children/home.vue'
import Issues from '@/components/children/next/issues.vue'
import Requests from '@/components/children/next/requests.vue'
import Header from '@/components/children/header.vue'
import Demo from '@/components/children/demo.vue'
import Explore from '@/components/children/next/explore.vue'
import MarketPlace from '@/components/children/next/marketplace.vue'

const routers = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo
  },
  {
    path: '/header',
    name: 'header',
    component: Header,
    children: [
      {
        path: '/issues',
        name: 'issues',
        component: Issues
      },
      {
        path: '/requests',
        name: 'requests',
        component: Requests
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
