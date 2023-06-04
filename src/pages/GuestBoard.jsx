import { useState } from "react";
import { Board } from "../components/Board";

export const GuestBoard = () => {
  const [listNames, setListNames] = useState(["To Do", "Doing", "Done"]);
  return (
    <>
      <h1>Example board</h1>
      <Board listNames={listNames} />
    </>
  );
};
