import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';
import Navigation from '../';

describe('Navigation', () => {
  it('full app rendering/navigating', async () => {
    render(<Navigation />);
    expect(screen.getByText(/Hello world from main!/i)).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(screen.getByText(/Another page/i));

    expect(
      screen.getByText(/Hello world from another page!/i),
    ).toBeInTheDocument();
  });

  it('landing on a bad page', async () => {
    render(<Navigation />);
    expect(
      screen.getByText(/Hello world from another page!/i),
    ).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(screen.getByText(/about/i));

    expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
  });
});
