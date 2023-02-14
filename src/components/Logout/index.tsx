import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import * as S from './styles';
import { BiLogOut } from 'react-icons/bi';

export const Logout = () => {
  const { logout } = useContext(AuthContext);
  return (
    <S.Wrapper>
      <S.ButtonLogout onClick={logout} data-testid="buttonLogout">
        <BiLogOut />
      </S.ButtonLogout>
    </S.Wrapper>
  );
};
