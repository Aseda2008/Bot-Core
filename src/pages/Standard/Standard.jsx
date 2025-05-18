import React from 'react';
import Banner from "../../assets/img/Banner.png"
import img1 from "../../assets/img/img21.svg"
import img2 from "../../assets/img/img22.svg"
import img3 from "../../assets/img/img23.svg"
import { TbBackground } from 'react-icons/tb';
const Standard = () => {
    return (
      <section id="standard">
      <div class="QualityStandard" style={{
        background:`url("${Banner}") no-repeat center/cover`,
        height:"50vh",
      }}>

      </div>
        <div class="container">
            <img src={img1} alt="img"/>
            <div class="standard">
        <div class="standard--text">
        <h1>Organic Store Services</h1>
        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a <br/>
        layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br/>
        using 'Content here, content here', making it look like readable English. </p>
        
        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, <br/>
        and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
        <div class="standard--text__card">
            <img src={img2} alt="img"/>
        <div class="standard--text__card--block">
        <h3>Why Organic</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit <br/>
        voluptat. page editors now use Lorem Ipsum as their <br/>
        default model text, and auncover.</p>
        </div>
        </div>
        <div class="standard--text__card">
        <div class="standard--text__card--block">
        <h3>Why Organic</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit <br/>
        voluptat. page editors now use Lorem Ipsum as their <br/>
        default model text, and auncover.</p>
        </div>
        <img src={img3} alt="img"/>
        </div>
        <h1>We farm your land</h1>
         <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a <br/>
        layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br/>
        using 'Content here, content here', making it look like readable English. </p>

        </div>
            </div>
        </div>
      </section>
    );
};

export default Standard;