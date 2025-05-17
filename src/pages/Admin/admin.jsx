import axios from "axios";
import React, { use, useState } from "react";

const Admin = () => {
  const [proUrl, setProUrl] = useState("");
  const [proname, setProName] = useState("");
  const [prodes, setProDes] = useState("");
  const [proprice, setProprice] = useState("");
  const [ category,setCategory] = useState("")

  function setProduc() {
    if(!proUrl || !prodes || !proname || !proprice || !category){
      alert("404")
    }
 else{
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
      `https://api-crud.elcho.dev/api/v1/8cc4b-540d7-5f885/organick?per_page=100`,
      NewData
    );
    setCategory(""),
    setProDes(""),
    setProName(""),
    setProUrl(""),
    setProprice("")
 }
  }

  return (
    <section id="admin">
      <div className="container">
        <div className="admin">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setProName(e.target.value)}
            value={proname}
          />
          <input
            type="text"
            placeholder="Price"
            onChange={(e) => setProprice(e.target.value)}
            value={proprice}
          />
          <input
            type="text"
            placeholder="url"
            onChange={(e) => setProUrl(e.target.value)}
            value={proUrl}
          />
           <input
            type="text"
            placeholder="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
          <input
            type="text"
            placeholder="description"
            onChange={(e) => setProDes(e.target.value)}
            value={prodes}
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
