import React, { useEffect, useState } from "react";
import { OrganickContext } from ".";
import axios from "axios";

const RootContext = ({ children }) => {
  const [organick, setOrganick] = useState([]);
  async function getProduc(){
    let res = await axios(
      `https://api-crud.elcho.dev/api/v1/8cc4b-540d7-5f885/organick`
    );
    let { data } = res.data;
    setOrganick(data);
  }
  useEffect(() => {
    getProduc();
  }, []);
  return (
    <OrganickContext.Provider value={{ organick, setOrganick }}>
      {children}
    </OrganickContext.Provider>
  );
};

export default RootContext;
