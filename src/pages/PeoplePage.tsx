import { useState, useEffect } from "react";
import styled from "styled-components";

import { Container } from "../components/Container";
import { ListHeader } from "../components/ListHeader";
import { Loading } from "../components/Loading";
import { ListItem } from "../components/ListItem";
import { Button } from "../components/Button";

import { people } from "../firebase/firestore"
import { useFirebase } from "../firebase/context"

import type { Person } from "../types/Person"

const PeoplePage = () => {

  const { user } = useFirebase();

  // const [peopleList, setPeopleList] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);

  const onAddPerson = async () => {
    // if (!user) return;
    // const newPerson = await people.add(user.uid, { name: "Jake Man" })
    // console.log(newPerson)
  }

  // useEffect(() => {
  //   if (!user) return;

  //   const unsub = people.getAll(user.uid, (people) => {
  //     console.log(people)
  //     setPeopleList(people)
  //     setLoading(false)
  //   }, console.error);
  //   return unsub;
    
  // }, [user])

  return (
    <>
      <Container>
        <ListHeader title="People" buttonText="Add Person" onButtonClick={onAddPerson} />
        {loading && <Loading />}
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
