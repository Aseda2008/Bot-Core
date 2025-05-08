import React from 'react';
import photo  from "../../assets/img/Photo.svg"
// import { FaUser } from 'react-icons/fa';
// import { VscArrowCircleRight } from 'react-icons/vsc';
const News = () => {
    return (
    //     <section id="news">
    //     <img src={"https://as2.ftcdn.net/v2/jpg/03/16/58/03/1000_F_316580392_ShA4c9CRiGqQsXIlQhCgtyw9duYIyoHH.jpg"} alt="img"/>
    //         <div class="container">
    //             <div class="news">
    //         <article className='news--card'>
    //         <img src={photo} alt="img"/>
    //             {/* <div class="news--card__circle">
    //                 <p>26 <span>Nov</span></p>
    //             </div> */}
    //             <div class="news--card__text">
    //   <a><FaUser /></a>
    //   <h4>By Rachi Card</h4>
    //   <h3>The Benefits of Vitamin D & How to Get It</h3>
    //   <p>Simply dummy text of the printing and typesetting <br/>industry. Lorem Ipsum</p>
    //   <button>Read More <VscArrowCircleRight/></button>
    //             </div>
    //         </article>
    //             </div>
    //         </div>
    //     </section>
    <div className="container">
        <div className="container--card">
            <article className='container--card__article'>
            <img src={photo} alt="img" className='container--card__article--img'/>
            <div class="container--card__article__data">
                <span className='container--card__article__data--des'>Simply dummy text of the printing and typesetting <br/>industry. Lorem Ipsum</span>
                <h2 className='container--card__article__data--title'>The Benefits of Vitamin D & How to Get It</h2>
                <button className='container--card__article--btn'>Read More </button>
            </div>
            </article>
        </div>
    </div>

    );
};

export default News;