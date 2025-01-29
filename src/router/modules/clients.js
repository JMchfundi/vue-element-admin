/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const clientsRouter = {
  path: '/clients',
  component: Layout,
  redirect: 'clients-data',
  children: [
    {
      path: 'clients-data',
      component: () => import('@/views/table/complex-table'),
      name: 'clients',
      meta: { title: 'Clients', icon: 'table' }
    }
  ]
}
export default clientsRouter
