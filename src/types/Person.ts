export interface PersonId {
  id: string;
}

export interface NewPerson {
  name: string;
}

export interface Person extends PersonId, NewPerson {
  pictureUrl?: string;
}
