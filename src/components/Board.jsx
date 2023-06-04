import { List } from "./List";

export const Board = ({ listNames }) => {
  return (
    <>
      <h1>Here be lists</h1>
      <div className="board">
        {listNames.map((column, index) => {
          return <List key={index} title={column} />;
        })}
      </div>
    </>
  );
};
