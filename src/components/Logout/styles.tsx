import styled from 'styled-components';

export const Wrapper = styled.main``;

export const ButtonLogout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  height: 40px;
  width: 40px;
  background-color: transparent;

  transition: all 0.2s;
  &:hover {
    background-color: #ebf3fe;
  }

  svg {
    width: 24px;
    height: 24px;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
