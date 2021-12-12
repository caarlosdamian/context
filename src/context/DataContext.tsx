import { createContext, useState } from "react";

interface user {
  name: string;
  age: string;
}
const dataFix = {
  name: "Carlos",
  age: "26",
};
type GlobalContext = {
  data: user;
  setdata: React.Dispatch<
    React.SetStateAction<{
      name: string;
      age: string;
    }>
  >;
};

export const DataContext = createContext<GlobalContext>({
  data: dataFix,
  setdata: () => {},
});

export const DataProvider = ({ children }: any) => {
  const [data, setdata] = useState(dataFix);
  console.log(children);
  return (
    <DataContext.Provider value={{ data, setdata }}>
      {children}
    </DataContext.Provider>
  );
};
