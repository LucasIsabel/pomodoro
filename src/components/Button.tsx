import React from 'react';
import { ButtonContainer } from './Button.styles';
import type { VariantColorsType } from './Button.styles';

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: VariantColorsType;
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}> Button </ButtonContainer>;
}
