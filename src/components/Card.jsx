import { useState } from "react";
export const Card = () => {
  const [title, setTitle] = useState();

  return (
    <div className="card" draggable>
      {title ? (
        <h2>{title}</h2>
      ) : (
        <>
          <h2>Add title</h2>
        </>
      )}
    </div>
  );
};
