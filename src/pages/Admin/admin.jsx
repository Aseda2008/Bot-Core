import axios from "axios";
import React, {  useState } from "react";

const Admin = () => {
  const [proUrl, setProUrl] = useState("");
  const [proname, setProName] = useState("");
  const [prodes, setProDes] = useState("");
  const [proprice, setProprice] = useState("");
  function setProduc() {
    let NewData = {
      url: proUrl,
      name: proname,
      des: prodes,
      price: proprice,
    };
    axios.post(`https://6819929f1ac1155635053d31.mockapi.io/produc/shop`),
      NewData;
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
            placeholder="description"
            onChange={(e) => setProDes(e.target.value)}
          />
          <center>
            {" "}
            <button onClick={() => setProduc()}>create</button>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Admin;
