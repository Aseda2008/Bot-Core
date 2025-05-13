import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { newData } from "../../Data";
import { FaUser } from "react-icons/fa";
const NewsDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  function getDetails() {
    let res = newData.find((el) => el.id === +id);
    setDetails(res);
    console.log(res);
  }
  useEffect(() => {
    getDetails();
  }, [id]);
  return (
    <div>
      <div id="details">
        {details && (
          <div
            className="details"
            style={{
              background: `url(${details.image}) no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "80vh",
            }}
          >
            <div class="cantainer">
              <div class="details--text">
                <div class="details--text__cards">
                  <p>
                    <span>Posted On:</span>January 6, 2022
                  </p>
                  <p>
                    <span>
                      {" "}
                      <FaUser />
                    </span>
                    By Rachi Card
                  </p>
                </div>
                <h1>{details.title}</h1>
                <p>
                  Established fact that a reader will be distracted by the
                  readable content of a page <br />
                  when looking a layout. The point of using Lorem Ipsum is that
                  it has a more-or-less <br />
                  normal distribution of letters, as opposed{" "}
                </p>
              </div>
            </div>
          </div>
        )}
        <div class="container">
          <div class="details">
            <div class="details--textDtl">
              <p>
                Uniquely matrix economically sound value through cooperative
                technology. Competently parallel task fully <br />
                researched data and enterprise process improvements.
                Collaboratively expedite quality manufactured <br />
                products via client-focused results quickly communicate enabled
                technology and turnkey leadership skills. <br />
                Uniquely enable accurate supply chains rather than friction
                technology.
              </p>
              <h1>Preferred Form of Vitamin D?</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking a <br />
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to{" "}
                <br />
                using 'Content here, content here', making it look like readable
                English.
              </p>
              <ul>
                <li>
                  {" "}
                  Publishing packages and web pageLorem Ipsum as their default
                </li>
                <li>
                  {" "}
                  Content here, content here', making it look like readable
                </li>
                <li> Packages and web pageLorem Ipsum as their default</li>
              </ul>
            </div>
            <div class="details--textCard">
              <p>
                “The first rule of any organic used in a business is that nature
                applied to an <br />
                efficient operation will magnify the efficiency. The second is
                that organic applied <br />
                to an inefficient operation will magnify the health.”
              </p>
            </div>
            <div class="details--textDtl">
              <h1>Make perfect organic product with us</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking a <br />
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to{" "}
                <br />
                using 'Content here, content here', making it look like readable
                English.
              </p>
              <ul>
                <li>
                  {" "}
                  Publishing packages and web pageLorem Ipsum as their default
                </li>
                <li>
                  {" "}
                  Content here, content here', making it look like readable
                </li>
                <li> Packages and web pageLorem Ipsum as their default</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
