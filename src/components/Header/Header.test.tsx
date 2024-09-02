import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './';

describe('Header Component', () => {
  test('renders Header with logo', () => {
    render(<Header />);

    const headerElement = screen.getByTestId('Header');
    expect(headerElement).toBeInTheDocument();

    const logoImage = screen.getByAltText('Caju Front Teste');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', './img/caju-logo.svg');
  });

  test('header has correct styles', () => {
    render(<Header />);

    const headerElement = screen.getByTestId('Header');

    expect(headerElement).toHaveClass(
      'sticky top-0 left-0 right-0 w-full h-16 flex justify-between items-center px-6 z-10 bg-gradient-to-r from-8% t0-53% from-[#e80537] to-[#e66900]'
    );
  });
});
