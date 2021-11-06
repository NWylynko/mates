import { useState, useEffect } from "react";
import styled from "styled-components";

import { getPeople } from "../stub/getPeople"

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
      const people = await getPeople();
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
        {people.map(({ name }) => (
          <ListItem>
            <h3>{name}</h3>
            <Button>View</Button>
          </ListItem>
        ))}
      </Container>
    </>
  );
};

export default PeoplePage;

