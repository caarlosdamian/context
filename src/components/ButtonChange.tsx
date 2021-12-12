import { useContext } from "react";
import { DataContext } from "../context/DataContext";


const dataFix = {
  name: "PROBANDO",
  age: "78",
};

export const ButtonChange = () => {

  const {setdata} = useContext(DataContext)
  return (
    <div>
      <button className="btn btn-primary"
      onClick={()=>setdata(dataFix)}
      
      >
          Change Data
      </button>
    </div>
  );
};
