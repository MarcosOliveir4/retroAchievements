import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: var(--background);
  color: #fff;
  padding: 5rem;

  text-align: center;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormLogin = styled.form`
  background-color: var(--background);
  border: 2px solid #fff;
  border-radius: 10px;

  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;

  padding: 1rem;
  width: 500px;
`;

export const InputLogin = styled.input`
  border: none;
  border-radius: 10px;
  border: 1.5px solid #fff;

  padding: 0.5rem;
  background-color: #fff;
`;

export const ButtonLogin = styled.button`
  color: #fff;

  border: none;
  border-radius: 10px;
  border: 1.5px solid #fff;

  padding: 0.5rem;
  background-color: var(--background);

  font-weight: 600;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const DescriptionLogin = styled.span`
  a {
    color: #fff;
  }
`;
