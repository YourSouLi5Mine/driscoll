import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router'
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import UsersList from './components/Users/List'
import UserShow from './components/Users/Show'
import UserCreate from './components/Users/Create'
import StoriesList from './components/Stories/List'
import StoryShow from './components/Stories/Show'
import { UsersProvider } from './context/Users';
import { StoriesProvider } from './context/Stories';
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';
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
  },
  {
    path: '/stories',
    element: <StoriesList />
  },
  {
    path: '/stories/:id',
    element: <StoryShow />
  }
]);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UsersProvider>
      <StoriesProvider>
        <RouterProvider router={router} />
      </StoriesProvider>
    </UsersProvider>
  </React.StrictMode>
);
