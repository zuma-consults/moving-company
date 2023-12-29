import DownArrow from "../../components/DownArrow";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import axios from "axios";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { DateTime } from "luxon";

function Guide() { 
  useEffect(() => {
  AOS.init();
}, []);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://public-api.wordpress.com/wp/v2/sites/thechisomchima.wordpress.com/posts/"
        );
        setPosts(response.data);
        // console.log(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  function addOrdinalSuffix(number) {
    const j = number % 10,
      k = number % 100;
    if (j === 1 && k !== 11) {
      return number + "st";
    }
    if (j === 2 && k !== 12) {
      return number + "nd";
    }
    if (j === 3 && k !== 13) {
      return number + "rd";
    }
    return number + "th";
  }

  return (
    <main className="w-full h-full">
      {loading && <Loader />}
      <div className="md:px-20 h-[650px] w-full relative mb-20">
        <div
          className="bg-cover bg-center h-full  md:mt-[120px] mt-[100px] relative flex flex-col items-center justify-end"
          style={{ backgroundImage: 'url("/guides.jpg")',backgroundColor:"#efb900"}}
        >
          <div className="flex items-center justify-center text-white text-5xl font-extrabold h-full uppercase">
            GUIDES
          </div>
          <DownArrow />
        </div>
      </div>
      <div
        className="md:p-20 grid md:grid-cols-2 md:gap-5"
        data-aos="fade-up"
        data-aos-duration="950"
        data-aos-easing="ease-in-out"
      >
        {posts.map((post) => (
          <Link
            to={`/guides/${post.id}`}
            key={post.id}
            className="shadow-lg border bg-white p-5 md:w-[40vw] flex items-center justify-start gap-6 "
          >
            <div>
              <img
                src={post.content.rendered.match(/src="([^"]+)"/)[1]}
                alt="guide image"
                className="w-50 h-40 object-cover"
              />
            </div>
            <div className="w-[4rem] h-40 md:pt-[2rem] pt-6 px-5">
              <span>
                <span style={{ color: "blue" }}>
                  {addOrdinalSuffix(
                    DateTime.fromISO(post.date, { locale: "en" }).day
                  )}
                </span>{" "}
                {DateTime.fromISO(post.date, { locale: "en" }).toFormat(
                  "LLL yyyy"
                )}
              </span>
            </div>
            <div className="border-l-2 p-5 w-[14rem] h-40 md:p-[2rem]">
              <p>{post.title.rendered}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Guide;
