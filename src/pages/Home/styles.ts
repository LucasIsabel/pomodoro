import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const StartCountdownButton = styled.button<{ isActive?: boolean }>`
  display: flex;
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  background: ${({ theme, isActive }) =>
    isActive ? theme.colors['red-500'] : theme.colors['green-500']};
  color: ${({ theme }) => theme.colors['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme, isActive }) =>
      isActive ? theme.colors['red-500'] : theme.colors['green-700']};
  }
`;
