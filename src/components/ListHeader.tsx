import { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Input } from "./Input";

interface ListHeaderProps {
  title: string;
  buttonText: string;
  onButtonClick?: () => void;
  onSearch?: (value: string | undefined) => void;
}

export const ListHeader = ({
  title,
  buttonText,
  onButtonClick,
  onSearch,
}: ListHeaderProps) => {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <h2 style={{ width: 125 }}>{title}</h2>
      <Input
        style={{ minWidth: 300 }}
        placeholder="Search"
        value={search}
        onChange={(e) => {setSearch(e.target.value); onSearch && onSearch(e.target.value); }}
      />
      <Button onClick={onButtonClick}>{buttonText}</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
