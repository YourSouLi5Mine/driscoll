import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router'
import UsersList from './components/Users/List'
import UserShow from './components/Users/Show'
import UserCreate from './components/Users/Create'
import { UsersProvider } from './context/Users';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/users' />,
  },
  {
    path: '/users',
    element: <UsersList />
  },
  {
    path: '/users/:id',
    element: <UserShow />
  },
  {
    path: '/users/new',
    element: <UserCreate />
  },
  {
    path: '/users/:id/edit',
    element: <UserCreate />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UsersProvider>
      <RouterProvider router={router} />
    </UsersProvider>
  </React.StrictMode>
);
