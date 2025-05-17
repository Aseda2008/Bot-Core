import { img } from 'framer-motion/client';
import React from 'react';
import star from "../../assets/img/img20.png";

const Category = () => {
    let data = [
        {id:1,
        img:"https://pngfile.net/public/uploads/preview/carrot-vegetable-png-image-4381743279962vpuwufrwy5.png",
        category:"Vegetable",
        name:"Carrot",
        },
        {id:2,
        img:"https://www.urbangroc.com/wp-content/uploads/2023/01/pngwing.com_.png.webp",
        category:"Fresh",
        name:"Apple",
        },
         {id:3,
        img:"https://png.pngtree.com/png-vector/20250506/ourmid/pngtree-wooden-basket-filled-to-the-top-with-golden-rice-grains-png-image_16183165.png",
        category:"Millets",
        name:"Beans",
        },
         {id:4,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0yhAUjhNLzTshRCHme-QGWA5vVFv206jv3A&s",
        category:"Health",
        name:"Coffee",
        },
          {id:5,
        img:"https://static.vecteezy.com/system/resources/previews/048/095/183/non_2x/heap-of-hazelnuts-grain-3d-style-free-png.png",
        category:"Nuts",
        name:"Brown Hazelnut",
        },
    ]
    
    return (
       <div id="category">
        <div class="container">
            <div class="category">
             <div className="category--card" data-aos="zoom-in-up">
                          <button>{el.category}</button>
                          <a onClick={() => AddToBasket(el)}>
                          <GrAddCircle/>
                          </a>
                          <img
                            src={el.img}
                            alt="img"
                            onClick={() => nav(`/productDetail/${el._id}`)}
                          />
                          <h3>{el.name}</h3>
                          <hr />
                          <div className="home--card__price">
                            <h4>12.00</h4>
                            <div className="home--card__price--rating">
                              <img src={star} alt="img" />
                              <h4>0.2</h4>
                            </div>
                          </div>
                        </div>
            </div>
        </div>
       </div>
    );
};

export default Category;