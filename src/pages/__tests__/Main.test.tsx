import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GQL_MOCKS, renderWithRouter } from '../../utils/testUtils';
import { MockedProvider } from '@apollo/client/testing';
import Main from '../Main';

describe('main', () => {
  it('should render correctly', async () => {
    renderWithRouter(
      <MockedProvider mocks={GQL_MOCKS} addTypename={false}>
        <Main />
      </MockedProvider>,
    );
    expect(
      await screen.findByText('Status server: Success'),
    ).toBeInTheDocument();
  });
});
