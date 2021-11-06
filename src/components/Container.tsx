import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 4rem);
  min-height: 400px;
  background-color: var(--white-background);
  border-radius: 20px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;