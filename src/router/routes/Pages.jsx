import { lazy } from 'react'

const PagesRoutes = [
    // Dashboard
    {
      path: '/Dashboard',
      component: lazy(() => import('../../view/Dashboards/ecommerce')),
      layout: 'VerticalLayout',
    }

  ]
  
  export default PagesRoutes
  