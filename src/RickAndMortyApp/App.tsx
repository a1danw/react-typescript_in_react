import React, { useContext, useEffect } from "react";
import { Store } from "./Context/Store";
import { Link } from "@reach/router";
import "./App.css";

export default function App(props: any): JSX.Element {
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
          <Link to="/favourites"> Favourite(s): {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
}
