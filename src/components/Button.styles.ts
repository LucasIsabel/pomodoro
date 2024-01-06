import styled from 'styled-components';

export type VariantColorsType = 'primary' | 'secondary' | 'success' | 'danger';

export type ButtonProps = {
  variant: VariantColorsType;
};

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;
  background: ${(props) => props.theme.colors['green-500']};
  border: 0;
  color: ${(props) => props.theme.colors.white};
  margin: 0 10px;
  border-radius: 4px;
  cursor: pointer;
`;
