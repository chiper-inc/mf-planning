import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

/* Steps from:
    https://testing-library.com/docs/example-react-router/#reducing-boilerplate
*/
export const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};
