import styled from 'styled-components';

import { BoxShadowCss } from './BoxShadowCss';

interface ButtonProps {
  selected?: boolean;
}

export const Button = styled.button`
  background-color: ${({ selected }: ButtonProps) => selected ? "var(--primary)" : "var(--background)"};
  color: ${({ selected }: ButtonProps) => selected ? "var(--background)" : "var(--primary)"};
  border: 2px solid var(--primary);
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin: 0.125rem 0.25rem;
  cursor: pointer;
  width: 125px;

  ${BoxShadowCss};

  & > a {
    color: inherit;
    text-decoration: none;

  }

`;