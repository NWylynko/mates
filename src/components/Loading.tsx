import styled from "styled-components";

export const Loading = () => <StyledLoading><div /></StyledLoading>;
export const LoadingPage = () => <StyledLoading style={{ minHeight: 400 }} ><div /></StyledLoading>;

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  height: 100%;
  width: 100%;

  & > div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid var(--primary);
    border-top-color: #fafafa;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`;