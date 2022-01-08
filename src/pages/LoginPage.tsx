import styled from "styled-components"
import { Button } from "../components/Button"
import { Container } from "../components/Container"
import { signInWithGoogle } from "../firebase/auth"

const LoginPage = () => {
  return (
    <StyledContainer>
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    </StyledContainer>
  )
}

export default LoginPage

const StyledContainer = styled(Container)`
  margin: 3rem;
  padding: 2rem;
  width: calc(100% - 6rem - 4rem);

  display: flex;
  align-items: center;
  justify-content: center;
`;
