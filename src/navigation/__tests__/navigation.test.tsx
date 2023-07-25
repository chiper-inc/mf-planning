import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Navigation from '../';
import { MockedProvider } from '@apollo/client/testing';
import { GQL_MOCKS } from '../../utils/testUtils';

describe('Navigation', () => {
  it('full app rendering/navigating', async () => {
    render(
      <MockedProvider mocks={GQL_MOCKS} addTypename={false}>
        <Navigation />
      </MockedProvider>,
    );
    expect(
      await screen.findByText('Status server: Success'),
    ).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(screen.getByText(/Another page/i));

    expect(
      screen.getByText(/Hello world from another page!/i),
    ).toBeInTheDocument();
  });
});
