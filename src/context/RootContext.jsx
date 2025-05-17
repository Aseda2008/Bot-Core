import React, { useEffect, useState } from "react";
import { OrganickContext } from ".";
import axios from "axios";

const RootContext = ({ children }) => {
  const [organick, setOrganick] = useState([]);
  const [basket, setBasket] = useState([]);
  async function getProduc() {
    let res = await axios(
      `https://api-crud.elcho.dev/api/v1/8cc4b-540d7-5f885/organick?per_page=100`
    );
    let { data } = res.data;
    setOrganick(data);
  }
  function getBasket() {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(res);
  }
  useEffect(() => {
    getProduc();
    getBasket();
  }, []);
  return (
    <OrganickContext.Provider
      value={{
        organick,
        setOrganick,
        setBasket,
        basket,
      }}
    >
      {children}
    </OrganickContext.Provider>
  );
};

export default RootContext;
