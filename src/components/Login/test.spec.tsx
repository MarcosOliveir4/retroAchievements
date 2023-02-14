import { render, screen } from '@testing-library/react';

import { Login } from '.';

describe('<Login />', () => {
  it('should render the heading', () => {
    const { container } = render(<Login />);

    expect(
      screen.getByRole('heading', { name: /Retro Achievements/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render form login', () => {
    render(<Login />);
    expect(screen.getByTestId('form-login')).toBeTruthy();
    expect(screen.getByTestId('input-login')).toBeTruthy();
    expect(screen.getByTestId('button-login')).toBeTruthy();
  });
});
