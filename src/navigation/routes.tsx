import { ErrorPage, Main, AnotherPage } from '../pages';

export default [
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/planning',
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/planning/another-page',
    element: <AnotherPage />,
    errorElement: <ErrorPage />,
  },
];
