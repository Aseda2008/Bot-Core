import React, { useEffect, useState } from "react";
import { OrganickContext } from ".";
import axios from "axios";

const RootContext = ({ children }) => {
  const [orgainck, setOrganick] = useState([]);
  async function getProduc() {
    let res = await axios(
      `https://6819929f1ac1155635053d31.mockapi.io/produc/shop`
    );
    let { data } = res
    setOrganick(data);
    console.log(data);
    
  }
  useEffect(() => {
    getProduc();
  }, []);
  return (
    <div>
      <OrganickContext.Provider value={{ orgainck, setOrganick }}>
        {children}
      </OrganickContext.Provider>
    </div>
  );
};

export default RootContext;
