import styled from 'styled-components';

import { Button } from "./Button"
import { BoxShadowCss } from "./BoxShadowCss"

export const Header = () => {
  return (
    <Container>
      <h1>Mates</h1>
      <Button>Logout</Button>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 2rem;
  margin-bottom: 2rem;

  padding: 1rem;

  border: 2px solid var(--primary);
  border-radius: 20px;

  max-height: calc(80px - 2rem);
  width: calc(100% - 2rem - 4px);

  ${BoxShadowCss};
`;