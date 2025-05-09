import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { newData } from '../../Data';
import { img } from 'framer-motion/client';

const NewsDetail = () => {
  const { id } = useParams();
  const [details,setDetails] = useState({})
  console.log({id},"ty");
  
 function getDetails(item){
let res = newData.find((el) => el.id === item)
setDetails(res)
 }
 useEffect(() => {
    getDetails(id);
  }, [id]);
  return (
    <div>
   { 
    <div>
      <img src={details?.image} alt="img" />
      <h1>{details?.title}</h1>
      <p>{details?.content}</p>
    </div>
}

    </div>
  );
};

export default NewsDetail;
