import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const Page2 = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      <h1>Page 2</h1>
      <hr />
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};
