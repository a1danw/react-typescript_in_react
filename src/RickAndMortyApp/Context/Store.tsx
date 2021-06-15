import React from "react";
import { IAction, IState } from "../Context/interfaces";

const initialState: IState = {
  episodes: [],
  favourites: [],
};

// context provides a provider and consumer const { Provider, Consumer } = React.createContext()
// we can use the useContext hook to eliminate using <Consumer></Consumer> in child components

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":
      return { ...state, favourites: [...state.favourites, action.payload] };
    case "REMOVE_FAV":
      return { ...state, favourites: action.payload };
    default:
      return state;
  }
}

export function StoreProvider({ children }: JSX.ElementChildrenAttribute) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  // pass
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
// import React from "react";

// interface IState {
//   episodes: Array<any>;
//   favourites: Array<any>;
// }

// export interface IAction {
//   type: string;
//   payload: any;
// }

// const initialState: IState = {
//   episodes: [],
//   favourites: [],
// };

// export const Store = React.createContext<IState | any>(initialState);

// function reducer(state: IState, action: IAction): IState {
//   switch (action.type) {
//     case "FETCH_DATA": {
//       return { ...state, episodes: action.payload };
//     }
//     case "ADD_FAV": {
//       return { ...state, favourites: [...state.favourites, action.payload] };
//     }
//     default:
//       return state;
//   }
// }

// export function StoreProvider(props: any): JSX.Element {
//   const [state, dispatch] = React.useReducer(reducer, initialState);
//   return (
//     <Store.Provider value={{ state, dispatch }}>
//       {props.children}
//     </Store.Provider>
//   );
// }
