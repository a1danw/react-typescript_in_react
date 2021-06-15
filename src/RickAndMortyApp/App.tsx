import React, { useContext } from "react";
import { Store } from "./Context/Store";
import { Link } from "@reach/router";

export default function App(props: any): JSX.Element {
  // useReducer is similiar to useState - takes an initial value and a value to change the state
  // cont [count, dispatch]

  // const store = useContext(Store);
  // console.log(store);
  const { state } = useContext(Store);

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode!!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves"> Favourite(s): {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
}
