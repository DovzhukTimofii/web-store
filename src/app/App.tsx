import './App.scss';
import MainPage from '../pages/MainPage/MainPage';
import ItemPage from '../pages/ItemPage/ItemPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import jsonData from '../../data.json';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  { ErrorBoundary }  from  "react-error-boundary" ;
import React from 'react';

const App = () => {
  const items = jsonData;

 

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage items={items} {...items[0]}/>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/itemPage/:itemId',
    element: <ItemPage items={items} {...items[0]} />,
    errorElement: <ErrorPage />,
  }
])

  return (
    <div>
      <ErrorBoundary  fallback = {<ErrorPage />}><RouterProvider router={router} /></ErrorBoundary>
    </div>
  );
};

export default App;
