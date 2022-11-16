import Root from 'layout/Root/Root';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import About from 'pages/AboutPage/About';

import CardsList from 'components/CardsList/CardsList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FormsPage from 'pages/FormsPage/FormsPage';
import { dataTasks } from 'model/dataTasksTypeB';
import APIPage from 'pages/APIPage/APIPage';
import Logo from 'components/Logo/Logo';
import DetailsPage from 'pages/DetailsPage/DetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Logo />,
      },
      { path: 'about', element: <About /> },
      { path: 'cards', element: <CardsList cards={dataTasks} showSearchBar={true} /> },
      { path: 'forms', element: <FormsPage /> },
      {
        path: 'rick-and-morty/',
        element: <APIPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'rick-and-morty/:page',
        element: <APIPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'rick-and-morty/:page/:id',
        element: <DetailsPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
