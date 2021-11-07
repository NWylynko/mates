import { useState, useEffect, Suspense } from "react";
import styled from "styled-components";

import { PeopleItem } from "../types/PeopleItem";

import { Container } from "../components/Container";
import { ListHeader } from "../components/ListHeader";
import { Loading } from "../components/Loading";
import { ListItem } from "../components/ListItem";
import { Button } from "../components/Button";

const PeoplePage = () => {

  return (
    <>
      <Container>
        <ListHeader title="People" buttonText="Add Person" />
        {<Loading />}
        {[].map(({ id, name, pictureUrl }) => (
          <ListItem key={id}>
            <ProfilePicture src={pictureUrl} alt={`${name} profile picture`} />
            <h3>{name}</h3>
            <span>Graphic Design, Logo Design, Website Mockup</span>
            <Button>View</Button>
          </ListItem>
        ))}
      </Container>
    </>
  );
};

export default PeoplePage;

const ProfilePicture = styled.img`
  border-radius: 5px;
  height: 40px;
  width: 40px;
  background-color: var(--primary);
`;
