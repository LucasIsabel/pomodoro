import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      color: ${({ theme }) => theme.colors['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      cursor: pointer;

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme.colors['green-500']};
      }

      &:active,
      &:focus {
        outline: none;
        -moz-outline-style: none;
      }
    }
  }
`;
