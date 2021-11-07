import { useState, useEffect } from "react";
import styled from "styled-components";

import { PeopleItem } from "../styles/PeopleItem";

import { Container } from "../components/Container";
import { ListHeader } from "../components/ListHeader";
import { Loading } from "../components/Loading";
import { ListItem } from "../components/ListItem";
import { Button } from "../components/Button";

const PeoplePage = () => {

  const [people, setPeople] = useState<PeopleItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const people: PeopleItem[] = [];
      setPeople(people)
      setLoading(false)
    })()
  }, [])

  console.log(people)

  return (
    <>
      <Container>
        <ListHeader title="People" buttonText="Add Person" />
        {loading && <Loading />}
        {people.map(({ id, name, pictureUrl }) => (
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
