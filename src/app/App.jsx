import './App.scss';
import MainPage from '../pages/MainPage/MainPage';
import ItemPage from '../pages/ItemPage/ItemPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import jsonData from '../../data.json';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  { ErrorBoundary }  from  "react-error-boundary" ;

const App = () => {
  const items = jsonData;

  const RouterMainPage = createBrowserRouter([
    {
      path: '/',
      element: <MainPage items={items} />,
      errorElement: <ErrorPage />,
    },
  ]);

  const RouterItemPage = createBrowserRouter([
    {
      path: '/itemPage/:itemId',
      element: <ItemPage items={items} />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div>
      <ErrorBoundary  fallback = {<ErrorPage />}><RouterProvider router={RouterMainPage} /></ErrorBoundary>
      <ErrorBoundary  fallback = {<ErrorPage />}><RouterProvider router={RouterItemPage} /></ErrorBoundary>
     
    </div>
  );
};

export default App;
