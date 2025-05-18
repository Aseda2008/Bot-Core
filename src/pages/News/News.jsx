import React from "react";
import { FaCircleArrowRight, FaUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { newData } from "../../Data";
import Banner from "../../assets/img/BannerNews.svg";
const News = () => {
  const nav = useNavigate();

  const handleReadMore = (id) => {
    nav(`/newsDetail/${id}`);
  };

  return (
    <div id="RecentNews">
      <div
        class="RecentNewsBanner"
        style={{
          background: `url(${Banner}) no-repeat center/cover`,
          width: "100%",
          height: "50vh",
        }}
      ></div>
      <div className="container">
        <div className="RecentNews">
          {newData.map((el) => (
            <div className="RecentNews--newsCard" key={el.id}>
              <img
                src={el.image}
                alt="img"
                style={{
                  width: "clamp(10rem, 37vw, 40rem)",
                  height: "clamp(9rem, 30vw, 35rem)",
                }}
              />
              <div className="RecentNews--newsCard__newText">
                <div className="RecentNews--newsCard__newText--MyCard">
                  <a>
                    <FaUser />
                  </a>
                  <p>By Rachi Card</p>
                </div>
                <h3>{el.title}</h3>
                <p>
                  Simply dummy text of the printing and typesetting <br />
                  industry. Lorem Ipsum
                </p>
                <button onClick={() => handleReadMore(el.id)}>
                  Read More <FaCircleArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
