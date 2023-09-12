import { Navigate } from 'react-router-dom';

import DashboardLayout from '../components/Layout';
import Home from '../pages/Home';

import AuthGuard from './AuthGuard';

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
        path: 'Home',
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
