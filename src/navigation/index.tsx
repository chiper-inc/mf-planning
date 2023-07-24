import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const router = createBrowserRouter(routes);

const Navigation = () => <RouterProvider router={router} />;

export default Navigation;
