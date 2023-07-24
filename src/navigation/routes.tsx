import { ErrorPage, Main, AnotherPage } from '../pages';

export default [
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/another-page',
    element: <AnotherPage />,
    errorElement: <ErrorPage />,
  },
];
