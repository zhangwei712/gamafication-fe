import { Navigate } from 'react-router-dom';

import DashboardLayout from '../component/layout';
import Home from '../page/home';

import AuthGuard from './authGuard';

const RootRoute = [
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: 'home',
        element: (
          <AuthGuard>
            <Home />
          </AuthGuard>
        ),
      },
      { path: '', element: <Navigate to="home" /> },
    ],
  },
  // 重定向
  { path: '', element: <Navigate to="/dashboard" /> },
  { path: '*', element: <Navigate to="/dashboard" /> },
];

export default RootRoute;
