import * as S from './styles';

export interface MainInterface {
  title: string;
  description: string;
}

export const Main = ({
  title = 'boilerplate',
  description = 'TypeScript, ReactJS, NextJS e Styled Components',
}: MainInterface) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </S.Wrapper>
);
