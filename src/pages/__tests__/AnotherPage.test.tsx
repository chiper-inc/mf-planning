import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AnotherPage } from '..';
import { renderWithRouter } from '../../utils/testUtils';

describe('AnotherPage', () => {
  it('should render correctly', async () => {
    renderWithRouter(<AnotherPage />);
    expect(
      screen.getByText(/Hello world from another page!/i),
    ).toBeInTheDocument();
  });
});
