import { app } from "./index";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  onSnapshot,
} from "firebase/firestore";

import type { NewPerson, Person } from "../types/Person";

const db = getFirestore(app);

const DBref = (userId: string) => collection(db, "users", userId, "people");

export const people = {
  DBref,
  add: function (userId: string, person: NewPerson) {
    return addDoc(DBref(userId), person);
  },
  getAll(
    userId: string,
    callback: (people: Person[]) => void,
    error: (error: Error) => void
  ) {
    return onSnapshot(
      DBref(userId),
      (querySnapshot) => {
        const people: Person[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data() as Person;
          people.push({ ...data, id: doc.id });
          console.log(data);
        });
        callback(people);
      },
      error
    );
  },
};
