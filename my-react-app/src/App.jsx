import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Groups from './pages/Groups';
import GroupDetails from './pages/GroupDetails';
import Dashboard from './pages/Dashboard';
import CreateGroups from './pages/CreateGroup';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/groups',
    element: <Groups/>
  },
  {
    path: 'groupdetails',
    element : <GroupDetails/>
  },
  {
    path: '/dashboard',
    element : <Dashboard/>
  },
  {
    path: "/creategroups",
    element: <CreateGroups/>
  }


]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}