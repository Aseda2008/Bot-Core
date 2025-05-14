import axios from "axios";
import React, { use, useState } from "react";

const Admin = () => {
  const [proUrl, setProUrl] = useState("");
  const [proname, setProName] = useState("");
  const [prodes, setProDes] = useState("");
  const [proprice, setProprice] = useState("");
  const [ category,setCategory] = useState("")

  function setProduc() {
    let NewData = {
      url: proUrl,
      name: proname,
      des: prodes,
      price: proprice,
      category: category,
      rating:Math.round(Math.random() * 5),
      quantity:1,
    };
    axios.post(
      `https://api-crud.elcho.dev/api/v1/8cc4b-540d7-5f885/organick`,
      NewData
    );
  }

  return (
    <section id="admin">
      <div className="container">
        <div className="admin">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setProName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Price"
            onChange={(e) => setProprice(e.target.value)}
          />
          <input
            type="text"
            placeholder="url"
            onChange={(e) => setProUrl(e.target.value)}
          />
           <input
            type="text"
            placeholder="category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="description"
            onChange={(e) => setProDes(e.target.value)}
          />

          <center>
            <button onClick={setProduc}>Create</button>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Admin;
