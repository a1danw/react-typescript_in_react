import React, { useState } from "react";
import List from "./components/List";
import "./App.css";
import AddToList from "./components/AddToList";

export interface IState {
  // specifying an array of objects
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  // in cases like these its best to let typescript to just infer that the state will be a number automatically
  // const [number, setNumber] = useState<number>(5);
  // const [number, setNumber] = useState(5);

  // ts automatically detects the types for us
  // if we start off as an empty array ts cant infer what the types are going to be

  // in ts we typically dont define a complicated state right inside of the triangle bracket - we instead create an interface
  // const [people, setPeople] = useState<{age: number, name: string}[]>([])

  // created one default person but the array would usually be empty
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url:
        "https://e0.365dm.com/21/02/768x432/skysports-nba-los-angeles-lakers_5268563.jpg?20210211081745",
      age: 36,
      note: "Allergic to staying on the same team",
    },
  ]);

  // const [people, setPeople] = useState([
  //   // {
  //   //   name: "LeBron James",
  //   //   url: "",
  //   //   age: 36,
  //   //   note: "Allergic to staying on the same team",
  //   // },
  //   // {
  //   //   name: "Koby Bryant",
  //   //   url: "",
  //   //   age: 36,
  //   //   note: "Allergic to staying on the same team",
  //   // },
  // ]);

  // people.map((person) => {
  //   return person.age;
  // });

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
