import styled from "styled-components";
import { BoxShadowCss } from './BoxShadowCss';

export const Input = styled.input`
  background-color: var(--background);
  border: 2px solid var(--primary);
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin: 0.125rem 0.25rem;
  ${BoxShadowCss};
`;