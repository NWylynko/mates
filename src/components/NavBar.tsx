import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./Button";

const pagesToShowNavBar = ["/people", "/projects"]

export function NavBar() {

  const { pathname } = useLocation();

  if (!pagesToShowNavBar.includes(pathname)) {
    return null;
  }

  return (
    <Container>
      <Item to="/people">People</Item>
      <Item to="/projects">Projects</Item>
    </Container>
  );
}

interface ItemProps {
  to: string;
  children: string;
}

const Item = ({ to, children }: ItemProps) => {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const click = () => {
    navigate(to);
  }

  return (
    <Button selected={pathname === to} onClick={click}>
      {children}
    </Button>
  )
}

const Container = styled.nav`
  display: flex;
  margin-bottom: 1rem;
  gap: 1rem;
`;
