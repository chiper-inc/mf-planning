import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Main } from '..';
import { renderWithRouter } from '../../utils/testUtils';

describe('main', () => {
  it('should render correctly', async () => {
    renderWithRouter(<Main />);
    expect(screen.getByText(/Hello world from main!/i)).toBeInTheDocument();
  });
});
