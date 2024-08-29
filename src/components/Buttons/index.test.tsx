import { Button } from '.';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('Should show button', () => {
    const { debug } = render(<Button title="Ativar" />);
    expect(screen.getByRole('button', { name: /Ativar/i }));
    debug();
  });
});
