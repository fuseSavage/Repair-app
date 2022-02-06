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
    path: "/registion",
    component: lazy(() => import("../../view/Pages/Register")),
    layout: "VerticalLayout",
  },

  // Register 
  {
    path: "/register",
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

  // pages 404
  {
    path: '/pages/error-404',
    component: lazy(() => import('../../view/Errors/404/index')),
    layout: 'FullLayout',
  },
];

export default PagesRoutes;
