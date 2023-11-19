import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
// layouts
import AuthLayout from '../layouts/auth';

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      element: <AuthLayout />,
      children: [
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: 'forgot-password', element: <ForgotPassword /> },
        { path: 'reset-password', element: <ResetPassword /> },
      ],
    },
    {
      path: 'dashboard',
      element: <AuthLayout />,
      children: [
        { path: 'general', element: <General /> },
        { path: 'general/:id', element: <GeneralSingle /> },
      ],
    },
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Register = lazy(() => import('../pages/auth/Register'));
const Login = lazy(() => import('../pages/auth/Login'));
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword'));
const ResetPassword = lazy(() => import('../pages/auth/ResetPassword'));
// Dashboard
const General = lazy(() => import('../pages/dashboard/General'));
const GeneralSingle = lazy(() => import('../pages/dashboard/GeneralSingle'));
