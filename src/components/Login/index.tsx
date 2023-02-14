import { AuthContext } from '@/context/AuthContext';
import { FormEvent, useContext, useState } from 'react';
import * as S from './styles';

export const Login = () => {
  const [usuario, setUsuario] = useState<string>('');
  const { login } = useContext(AuthContext);

  const handleForm = (event: FormEvent) => {
    event.preventDefault();
    login(usuario);
  };
  return (
    <S.Wrapper>
      <S.FormLogin
        data-testid="form-login"
        autoComplete="off"
        onSubmit={handleForm}
      >
        <h1>Retro Achievements PS4</h1>
        <S.InputLogin
          data-testid="input-login"
          placeholder="Digite seu usúario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <S.ButtonLogin data-testid="button-login" disabled={!usuario}>
          Acessar
        </S.ButtonLogin>
        <S.DescriptionLogin>
          Seu usuário no{' '}
          <a
            href="https://retroachievements.org/"
            target="_blank"
            rel="noreferrer"
          >
            Retro Achievements
          </a>
        </S.DescriptionLogin>
      </S.FormLogin>
    </S.Wrapper>
  );
};
