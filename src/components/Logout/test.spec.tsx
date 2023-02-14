import { AuthProvider } from '@/context/AuthContext';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Logout } from '.';

const sut = () => {
  return render(
    <AuthProvider>
      <Logout />
    </AuthProvider>
  );
};

describe('<Logout />', () => {
  it('should render the button logout', () => {
    sut();
    expect(screen.getByTestId('buttonLogout')).toBeInTheDocument();
  });

  it('should render the heading', async () => {
    sut();
    await userEvent.click(screen.getByTestId('buttonLogout'));
    expect(localStorage.getItem('usuarioRetro')).toBe(null);
  });
});
