import { lazy } from "react";

const PagesRoutes = [
  // Dashboard

  // Get Start
  {
    path: "/",
    component: lazy(() => import("../../view/Pages/GetStarted")),
    layout: "VerticalLayout",
  },

  // Landing Register Page
  {
    path: "/register",
    component: lazy(() => import("../../view/Pages/Register")),
    layout: "VerticalLayout",
  },

  // Register 
  {
    path: "/register/registion",
    component: lazy(() => import("../../view/Registion/Registion")),
    layout: "VerticalLayout",
  },

  // Login
  {
    path: "/login",
    component: lazy(() => import("../../view/Login")),
    layout: "VerticalLayout",
  },

  // Report
  {
    path: "/reported",
    component: lazy(() => import("../../view/Pages/Report/index")),
    layout: "VerticalLayout",
  },

  // Search Repair Shop
  {
    path: "/search",
    component: lazy(() => import("../../view/Pages/CustomerService/RepairShop/index")),
    layout: "VerticalLayout",
  },

  // Check Status
  {
    path: "/status",
    component: lazy(() => import("../../view/Pages/CustomerService/RepairStatus/index")),
    layout: "VerticalLayout",
  },

  // Dashboard
  {
    path: '/dashboard',
    component: lazy(() => import('../../view/Dashboards/ecommerce/index')),
    layout: 'VerticalLayout',
  },

  // add-detail
  {
    path: '/dashboard/add-detail',
    component: lazy(() => import('../../view/Dashboards/repairDashboard/repairAdd/index')),
    layout: 'VerticalLayout',
  },

  // all-repair
  {
    path: '/dashboard/all-repair',
    component: lazy(() => import('../../view/Dashboards/repairDashboard/repairList/index')),
    layout: 'VerticalLayout',
  },

  // show-repair
  {
    path: '/dashboard/all-repair/detail',
    component: lazy(() => import('../../view/Dashboards/repairDashboard/repairList/ShowDetail')),
    layout: 'VerticalLayout',
  },

  // status
  // {
  //   path: '/dashboard/status',
  //   component: lazy(() => import('../../view/Dashboards/repairDashboard/repairSatatus/index')),
  //   layout: 'VerticalLayout',
  // },

    // Add Member
  {
    path: '/dashboard/add-member',
    component: lazy(() => import('../../view/Dashboards/member/addMember')),
    layout: 'VerticalLayout',
  },

    // Search Repair
    {
      path: '/dashboard/search-repair',
      component: lazy(() => import('../../view/Dashboards/member/searchMember')),
      layout: 'VerticalLayout',
    },

    // Show Repair
    {
      path: '/dashboard/search-repair/details',
      component: lazy(() => import('../../view/Dashboards/member/ShowDetailMember')),
      layout: 'VerticalLayout',
    },

     // Show Repair
     {
      path: '/dashboard/member',
      component: lazy(() => import('../../view/Dashboards/member/member')),
      layout: 'VerticalLayout',
    },
];


export default PagesRoutes;
