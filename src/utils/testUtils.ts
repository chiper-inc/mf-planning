import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { GET_SERVER_STATUS } from '../pages/Main';

/* Steps from:
    https://testing-library.com/docs/example-react-router/#reducing-boilerplate
*/
export const renderWithRouter = (ui, { route = '/planning' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

export const GQL_MOCKS = [
  {
    request: {
      query: GET_SERVER_STATUS,
    },
    result: {
      data: {
        checkResult: 'Success',
      },
    },
  },
];
