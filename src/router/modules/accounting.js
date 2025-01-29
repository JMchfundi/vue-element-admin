/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const accountingRouter = {
  path: '/accounting',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'accounting',
  meta: {
    title: 'Accounting',
    icon: 'table'
  },
  children: [
    {
      path: 'coa',
      component: () => import('@/views/table/complex-table'),
      name: 'COAs',
      meta: { title: 'Chart of Accounts' }
    },
    {
      path: 'je',
      component: () => import('@/views/table/complex-table'),
      name: 'JEs',
      meta: { title: 'Journal Entry' }
    }
  ]
}
export default accountingRouter
