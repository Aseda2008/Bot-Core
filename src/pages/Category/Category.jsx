import { img, section } from 'framer-motion/client';
import React, { useContext, useState } from 'react';
import star from "../../assets/img/img20.png";
import { GrAddCircle } from 'react-icons/gr';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { OrganickContext } from '../../context';
import Product from '../Product/Product';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

const Category = () => {
    // let data = [
    //     {id:1,
    //     img:"https://pngfile.net/public/uploads/preview/carrot-vegetable-png-image-4381743279962vpuwufrwy5.png",
    //     category:"Vegetable",
    //     name:"Carrot",
    //     },
    //     {id:2,
    //     img:"https://www.urbangroc.com/wp-content/uploads/2023/01/pngwing.com_.png.webp",
    //     category:"Fresh",
    //     name:"Apple",
    //     },
    //      {id:3,
    //     img:"https://png.pngtree.com/png-vector/20250506/ourmid/pngtree-wooden-basket-filled-to-the-top-with-golden-rice-grains-png-image_16183165.png",
    //     category:"Millets",
    //     name:"Beans",
    //     },
    //      {id:4,
    //     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0yhAUjhNLzTshRCHme-QGWA5vVFv206jv3A&s",
    //     category:"Health",
    //     name:"Coffee",
    //     },
    
    // ]
    const [count,setCount] = useState(4)
    const {organick} = useContext(OrganickContext)
 const {catName} = useParams()
    return (
           <section id="home">
             <div className="container">
          <center>
            <h1>Related Products</h1>
          </center>
           <div className="home">
            {organick?.slice(0, count).map((el) => (
              <Product el={el} />
            ))}
          </div>
          <center>
            {count < organick.length ? (
              <button onClick={() => setCount(count + 4)}>
                Load More
                <MdOutlineArrowRightAlt />
              </button>
            ) : (
              <button>Finished</button>
            )}
          </center>
          </div>
       
           </section>
       
       
    );
};

export default Category;