// interface user{
//     name:string,
//     age:string
// }
// interface Props{
//     data:user
// }

import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const Page1 = () => {
  const { data } = useContext(DataContext);
  return (
    <div>
      <h1>Page 1</h1>
      <hr />
      <pre>{JSON.stringify(data)}</pre>

    </div>
  );
};
