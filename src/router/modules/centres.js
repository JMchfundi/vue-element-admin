/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const centresRouter = {
  path: '/centres',
  component: Layout,
  redirect: 'centres-data',
  children: [
    {
      path: 'centres-data',
      component: () => import('@/views/table/complex-table'),
      name: 'centres',
      meta: { title: 'Centres', icon: 'table' }
    }
  ]
}
export default centresRouter
