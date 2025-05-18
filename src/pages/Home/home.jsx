import React, { useContext, useState } from "react";
import { OrganickContext } from "../../context";
import text from "../../assets/img/text.svg";
import img1 from "../../assets/img/1.svg";
import img2 from "../../assets/img/2.svg";
import img3 from "../../assets/img/Photo (2).svg";
import img4 from "../../assets/img/3.svg";
import img5 from "../../assets/img/icon.svg";
import img6 from "../../assets/img/icon (1).svg";
import img7 from "../../assets/img/Offer.svg";
import img8 from "../../assets/img/image.svg";
import img9 from "../../assets/img/img1.svg";
import img10 from "../../assets/img/organick.svg";
import img11 from "../../assets/img/organick2.svg";
import img12 from "../../assets/img/organick3.svg";
import img13 from "../../assets/img/textcard.svg";
import img14 from "../../assets/img/home.jpg";
import img15 from "../../assets/img/img2.svg";
import img16 from "../../assets/img/Background.svg";
import img17 from "../../assets/img/img17.svg";
import img18 from "../../assets/img/img18.svg";
import img19 from "../../assets/img/star.webp";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Product from "../Product/Product";
import { FaCircleArrowRight, FaUser } from "react-icons/fa6";
import { newData } from "../../Data";
import { img } from "framer-motion/client";
import Category from "../Category/Category";
const Home = () => {
  const { organick } = useContext(OrganickContext);
  const [count, setCount] = useState(4);
  const nav = useNavigate();
  const handleReadMore = (id) => {
    nav(`/newsDetail/${id}`);
  };
  const allCategories = [
    {
      id: 1,
      title: "Vegetable",
      img: "https://img.pikbest.com/png-images/20240830/3d-vegetables-a-clean-and-modern-presentation_10777794.png!bw700",
    },
    {
      id: 2,
      title: "Fresh",
      img: "https://png.pngtree.com/png-clipart/20240314/original/pngtree-3d-fruit-fresh-png-image_14591543.png",
    },
    {
      id: 3,
      title: "Nuts",
      img: "https://png.pngtree.com/png-vector/20250327/ourmid/pngtree-3d-a-mixed-nuts-displayon-realistic-png-image_15887028.png",
    },
    {
      id: 4,
      title: "Health",
      img: "https://png.pngtree.com/png-vector/20241203/ourmid/pngtree-buckwheat-png-image_14647414.png",
    },
  ];
  return (
    <>
      <section id="home">
        <div
          className="homeBg"
          style={{
            background: `url(${img14}) no-repeat center/cover`,
            width: "100%",
            height: "80vh",
          }}
        >
          <div className="container">
            <div className="homeBg--text">
              <img src={img15} alt="img" />
              <h1>
                Choose the best <br />
                healthier way <br />
                of life
              </h1>
              <button>
                Explore Now <FaCircleArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="blocks">
          <div className="container">
            <div className="blocks--block2">
              <img src={img1} alt="img" data-aos="fade-right" />
              <img src={img2} data-aos="fade-left" />
            </div>
          </div>
        </div>
        <div className="working">
          <div className="container">
            <div className="working--block">
              <img
                src={img3}
                alt="img"
                style={{
                  width: "clamp(10rem,50vw, 51rem)",
                }}
              />
              <div className="working--block__text">
                <img
                  src={img4}
                  alt="img"
                  style={{
                    width: "clamp(3rem, 7vw, 7.1rem)",
                  }}
                />
                <h2>
                  We Believe in Working <br />
                  Accredited Farmers
                </h2>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  <br /> Lorem had ceased to been the industry's standard dummy
                  text <br />
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
                <div className="working--block__text--card">
                  <img
                    src={img5}
                    alt="img"
                    style={{
                      width: "clamp(2rem, 7vw, 7.1rem)",
                    }}
                  />
                  <div className="working--block__text--card__foods">
                    <h3>Organic Foods Only</h3>
                    <p>
                      Simply dummy text of the printing and typesetting <br />
                      industry. Lorem Ipsum
                    </p>
                  </div>
                </div>
                <div className="working--block__text--card">
                  <img
                    src={img6}
                    alt="img"
                    style={{
                      width: "clamp(2rem, 7vw, 7.1rem)",
                    }}
                  />
                  <div className="working--block__text--card__foods">
                    <h3>Organic Foods Only</h3>
                    <p>
                      Simply dummy text of the printing and typesetting <br />
                      industry. Lorem Ipsum
                    </p>
                  </div>
                </div>
                <Link to={"/ShopNow"}>
                  <button>
                    Shop Now <MdOutlineArrowRightAlt />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="category">
          <div className="container">
            <div className="category">
              {allCategories.map((el) => (
                <div className="category--block">
                  <Link to={`/Category/${el.title}`}>
                    <img src={el.img} alt="img" />
                  </Link>
                  <h3>{el.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <center>
            <img src={text} alt="img" />
            <h1>Our Products</h1>
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

        <div
          className="testimonial"
          style={{
            background: `url(${img16}) no-repeat center/cover`,
            height: "120vh",
            marginTop: "30px",
          }}
        >
          <div className="container">
            <div className="testimonial">
              <img src={img17} alt="img" width={"100px"} />
              <h1>What Our Customer Saying?</h1>
              <img
                src={img18}
                alt="img"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                }}
              />
              <div className="testimonial--stars">
                <div className="testimonial--stars__star">
                  <img
                    src={img19}
                    alt="img"
                    style={{
                      width: "150px",
                      height: "100px",
                    }}
                  />
                </div>
              </div>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy <br />
                text of the printing and typesetting industry. Lorem Ipsum has
                been.
              </p>
              <hr />
              <h3>
                Sara Taylor
                <br />
                <span>Consumer</span>
              </h3>
              <div className="testimonial--circles">
                <div className="testimonial--circles__circle">
                  <div className="testimonial--circles__circle--from">
                    <h1>100%</h1>
                    <span>Organic</span>
                  </div>
                </div>
                <div className="testimonial--circles__circle">
                  <div className="testimonial--circles__circle--from">
                    <h1>285</h1>
                    <span>Active Product</span>
                  </div>
                </div>
                <div className="testimonial--circles__circle">
                  <div className="testimonial--circles__circle--from">
                    <h1>350+</h1>
                    <span>Organic Orchads</span>
                  </div>
                </div>
                <div className="testimonial--circles__circle">
                  <div className="testimonial--circles__circle--from">
                    <h1>25+</h1>
                    <span>Years of Farming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="organick">
          <div className="organick--top">
            <div className="organick--top__cards">
              <div className="organick--top__cards--card">
                <img src={img7} alt="img" />
                <h1>We Offer Organic For You</h1>
              </div>
              <button>
                View All Product
                <FaCircleArrowRight />
              </button>
            </div>
            <div className="organick--top__block">
              {organick
                ?.slice(0, count)
                .map((el) => (el.rating >= 4 ? <Product el={el} /> : null))}
            </div>
          </div>
        </div>
        <div className="store">
          <img
            src={img8}
            alt="img"
            style={{ width: "clamp(10rem, 58vw, 58.1rem)" }}
          />
          <div className="store--block">
            <img
              src={img9}
              alt="img"
              style={{ width: "clamp(1rem, 7vw, 7.1rem)" }}
            />
            <h2>
              Econis is a Friendly <br />
              Organic Store
            </h2>
            <h3>Start with Our Company First</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium <br />
              doloremque laudantium. Sed ut perspiciatis.
            </p>
            <h3>Learn How to Grow Yourself</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium <br />
              doloremque laudantium. Sed ut perspiciatis.
            </p>
            <h3>Farming Strategies of Today</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium <br />
              doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
        </div>
        <div className="OrganicProducts">
          <div
            className="OrganickProduct--card"
            style={{
              position: "relative",
              width: "clamp(3rem, 30vw, 35rem)",
              height: "clamp(3rem, 28vw, 35rem)",
              background: "#e8a107",
            }}
          >
            <img
              src={img10}
              alt="img"
              style={{ width: "clamp(3rem, 30vw, 35rem)" }}
            />
            <button
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "clamp(0rem, 1vw, 1.5rem)",
                backgroundColor: "#FFFFFF",
                color: " #274C5B",
                border: "none",
                borderRadius: "clamp(0rem, 0.5vw, 1rem)",
                cursor: "pointer",
                fontSize: "clamp(0rem, 1.3vw, 1.5rem)",
              }}
            >
              Organic Juice
            </button>
          </div>
          <div
            className="OrganickProduct--card"
            style={{
              position: "relative",
              width: "clamp(3rem, 30vw, 35rem)",
              height: "clamp(3rem, 28vw, 35rem)",
              background: "#e8a107",
            }}
          >
            <img
              src={img11}
              alt="img"
              style={{ width: "clamp(3rem, 30vw, 35rem)" }}
            />
            <button
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "clamp(0rem, 1vw, 1.5rem)",
                backgroundColor: "#FFFFFF",
                color: " #274C5B",
                border: "none",
                borderRadius: "clamp(0rem, 0.5vw, 1rem)",
                cursor: "pointer",
                fontSize: "clamp(0rem, 1.3vw, 1.5rem)",
              }}
            >
              Organic Food
            </button>
          </div>
          <div
            className="OrganickProduct--card"
            style={{
              position: "relative",
              width: "clamp(3rem, 30vw, 35rem)",
              height: "clamp(3rem, 28vw, 35rem)",
              background: "#e8a107",
            }}
          >
            <img
              src={img12}
              alt="img"
              style={{ width: "clamp(3rem, 30vw, 35rem)" }}
            />
            <button
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "clamp(0rem, 1vw, 1.5rem)",
                backgroundColor: "#FFFFFF",
                color: " #274C5B",
                border: "none",
                borderRadius: "clamp(0rem, 0.5vw, 1rem)",
                cursor: "pointer",
                fontSize: "clamp(0rem, 1.3vw, 1.5rem)",
              }}
            >
              Nuts Cookis
            </button>
          </div>
        </div>
        <div className="container">
          <div className="RecentNews--top">
            <div className="RecentNews--top__text">
              <img
                src={img13}
                alt="img"
                style={{ width: " clamp(3rem, 7vw, 7.1rem)" }}
              />
              <h1>
                Discover weekly content about <br />
                organic food, & more
              </h1>
            </div>
            <Link to={"/news"}>
              <button>
                More News <FaCircleArrowRight />
              </button>
            </Link>
          </div>
          <div className="RecentNews">
            {newData.slice(0, 2).map((el) => (
              <div className="RecentNews--newsCard">
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
      </section>
    </>
  );
};

export default Home;
