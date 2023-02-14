import { AuthProvider } from '@/context/AuthContext';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Login } from '.';

const sut = () => {
  return render(
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
};

describe('<Login />', () => {
  it('should render the heading', () => {
    const { container } = sut();

    expect(
      screen.getByRole('heading', { name: /Retro Achievements PS4/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render form login', () => {
    sut();
    expect(screen.getByTestId('form-login')).toBeTruthy();
    expect(screen.getByTestId('input-login')).toBeTruthy();
    expect(screen.getByTestId('button-login')).toBeTruthy();
  });

  it('should set user in localStorage', async () => {
    sut();
    await userEvent.type(screen.getByTestId('input-login'), 'bleach');
    await userEvent.click(screen.getByTestId('button-login'));
    expect(localStorage.getItem('usuarioRetro')).toBeTruthy();
  });
  it('should not define user when user is defined in localStorage', async () => {
    sut();
    await userEvent.type(screen.getByTestId('input-login'), 'bleach');
    await userEvent.click(screen.getByTestId('button-login'));
    await userEvent.type(screen.getByTestId('input-login'), 'bleachRemix');
    await userEvent.click(screen.getByTestId('button-login'));
    expect(localStorage.getItem('usuarioRetro')).toBe('bleach');
  });
});
