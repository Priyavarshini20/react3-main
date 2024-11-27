import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayoutWrapper from './wrappers/LayoutWrapper';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { Provider } from 'react-redux';
import store from './redux/app/store';
import DashboardWrapper from './wrappers/DashboardWrapper';
import authLoader from './loaders/units/authLoader';
import AdminDashboardWrapper from './wrappers/AdminDashboardWrapper';
import Logout from './components/Logout';
import ErrorPage from './pages/ErrorPage';
import Alert from './components/Alert';
import Dashboard from './pages/user/Dashboard';
import Recipes from './pages/user/Recipes';
import Applied from './pages/user/Applied';
import dashboardLoader from './loaders/combined/dashboardLoader';
import recipesLoader from './loaders/units/recipesLoader';

const routes = [
  {
    path: "/",
    element: <LayoutWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading Layout Wrapper...</div>,
    children: [
      {
        path: "",
        element: <HomePage />,
        hydrateFallbackElement: <div>Loading Home Page...</div>,
      },
      {
        path: "register",
        element: <RegisterPage />,
        hydrateFallbackElement: <div>Loading Register Page...</div>,
      },
      {
        path: "login",
        element: <LoginPage />,
        hydrateFallbackElement: <div>Loading Login Page...</div>,
      },
      {
        path: "logout",
        element: <Logout />,
        hydrateFallbackElement: <div>Logging out...</div>,
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardWrapper />,
    hydrateFallbackElement: <div>Loading Dashboard Page...</div>,
    loader: authLoader,
    children: [
      {
        path: "",
        element: <Dashboard />,
        hydrateFallbackElement: <div>Loading User Dashboard Page...</div>,
        loader: dashboardLoader,
      },
      {
        path: "recipes",
        element: <Recipes />,
        hydrateFallbackElement: <div>Loading recipes Page...</div>,
        loader: recipesLoader,
      },
      {
        path: "applied",
        element: <Applied />,
        hydrateFallbackElement: <div>Loading Applied <Recipes></Recipes> Page...</div>,
      },
    ]
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboardWrapper />,
    hydrateFallbackElement: <div>Loading Admin Dashboard Page...</div>,
    loader: authLoader,
  },
  {
    path: "*",
    element: <ErrorPage />
  }
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionStatusRevalidation: true,
    v7_skipActionErrorRevalidation: true,
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <Alert />
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </Provider>
  )
}

export default App;