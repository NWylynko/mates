import { PeopleItem } from "../styles/PeopleItem";

export const getPeople = (): Promise<PeopleItem[]> => {
  const peopleIds = [0, 1, 2, 3, 4];

  return Promise.all(peopleIds.map(async (id) => {
    const response = await fetch(`https://randomuser.me/api/`)
    const data: RootObject = await response.json();
    return {
      id: data.results[0].login.uuid,
      name: data.results[0].name.first + ' ' + data.results[0].name.last,
      pictureUrl: data.results[0].picture.thumbnail,
    }
  }))
}

interface RootObject {
  results: Result[];
  info: Info;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Street {
  number: number;
  name: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Dob {
  date: Date;
  age: number;
}

interface Registered {
  date: Date;
  age: number;
}

interface Id {
  name: string;
  value: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Result {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}