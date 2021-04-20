import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./BasketballListApp/App";
import App from "./RickAndMortyApp/App";
import { Router, RouteComponentProps } from "@reach/router";
import { StoreProvider } from "./RickAndMortyApp/Context/Store";
import HomePage from "./RickAndMortyApp/pages/HomePage";
import FavePage from "./RickAndMortyApp/pages/FavePage";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<HomePage />} path="/" />
        <RouterPage pageComponent={<FavePage />} path="/faves" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
