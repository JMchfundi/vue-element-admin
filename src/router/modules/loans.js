/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const loansRouter = {
  path: '/loans',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'loans',
  meta: {
    title: 'Loans',
    icon: 'table'
  },
  children: [
    {
      path: 'vl',
      component: () => import('@/views/table/complex-table'),
      name: 'VLs',
      meta: { title: 'View Loans' }
    },
    {
      path: 'va',
      component: () => import('@/views/table/complex-table'),
      name: 'VAs',
      meta: { title: 'View Applications' }
    },
    {
      path: 'cl',
      component: () => import('@/views/table/complex-table'),
      name: 'Cls',
      meta: { title: 'Create Loan' }
    },
    {
      path: 'ls',
      component: () => import('@/views/table/complex-table'),
      name: 'LSs',
      meta: { title: 'Loan Status' }
    },
    {
      path: 'mp',
      component: () => import('@/views/table/complex-table'),
      name: 'MPs',
      meta: { title: 'Manage Products' }
    },
    {
      path: 'mc',
      component: () => import('@/views/table/complex-table'),
      name: 'MCs',
      meta: { title: 'Manage Charges' }
    },
    {
      path: 'cr',
      component: () => import('@/views/table/complex-table'),
      name: 'CRs',
      meta: { title: 'Cash Registers' }
    },
    {
      path: 'lp',
      component: () => import('@/views/table/complex-table'),
      name: 'LPs',
      meta: { title: 'Loan Provisioning' }
    }
  ]
}
export default loansRouter
