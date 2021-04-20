import React from "react";
import { IState as IProps } from "../App";

// if your going to create an interface which is the same as whats defined in the parent you can export the interface from the parent
// instead of re-creating the interface and rename the interface

// interface IProps {
//   // specifying an array of objects
//   people: {
//     name: string;
//     age: number;
//     url: string;
//     note?: string;
//   }[];
// }

// we need to define an interface with the type of the props we expect to receive or ts will complain in the parent component
// const List = ((people): IProps) => {
// const List = ({ people }: IProps) => {
const List: React.FC<IProps> = ({ people }: IProps) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} alt={person.name} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
