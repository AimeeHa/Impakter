import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import TempPages from './pages/TempPages';
import TopCompanies from './pages/TopCompanies';
import SingleCompanyPage from './pages/SingleCompanyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/resources',
    element: <TempPages />,
  },
  {
    path: '/resources/:str',
    element: <TempPages />,
  },
  {
    path: '/regulations/:str',
    element: <TempPages />,
  },
  {
    path: '/about',
    element: <TempPages />,
  },
  {
    path: '/team',
    element: <TempPages />,
  },
  {
    path: '/partners',
    element: <TempPages />,
  },
  {
    path: '/media-kit',
    element: <TempPages />,
  },
  {
    path: '/contact-us',
    element: <TempPages />,
  },
  {
    path: '/esg-software',
    element: <TempPages />,
  },
  {
    path: '/esg-for-businesses',
    element: <TempPages />,
  },
  {
    path: '/csrd-for-business',
    element: <TempPages />,
  },
  {
    path: '/supply-chain-sustainability',
    element: <TempPages />,
  },
  {
    path: '/top-companies',
    element: <TopCompanies />,
  },
  {
    path: '/top-companies',
    element: <TopCompanies />,
  },
  {
    path: '/top-companies/:id',
    element: <SingleCompanyPage />,
  },
  {
    path: '/company-by-country/:country',
    element: <TempPages />,
  },
  {
    path: '/company-by-industry/:industry',
    element: <TempPages />,
  },
  {
    path: '/company-by-rating/:rating/',
    element: <TempPages />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
