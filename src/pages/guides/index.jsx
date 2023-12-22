import DownArrow from "../../components/DownArrow";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import axios from "axios";
import { Link } from "react-router-dom";

import { DateTime } from "luxon";

function Guide() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://public-api.wordpress.com/wp/v2/sites/thechisomchima.wordpress.com/posts/"
        );
        setPosts(response.data);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="w-full h-full">
      {loading && <Loader />}
      <div className="md:px-20 h-[650px] w-full relative mb-20">
        <div
          className="bg-cover bg-center h-full  md:mt-[120px] mt-[100px] relative flex flex-col items-center justify-end"
          style={{ backgroundImage: 'url("/guides.jpg")' }}
        >
          <div className="flex items-center justify-center text-white text-5xl font-extrabold h-full uppercase">
            GUIDES
          </div>
          <DownArrow />
        </div>
      </div>
      <div className="p-20 grid md:grid-cols-2 gap-5">
        {posts.map((post) => (
          <Link
            to={`/guides/${post.id}`}
            key={post.id}
            className="shadow p-5 flex items-center justify-between"
          >
            <div>
              <span>
                {DateTime.fromISO(post.date, { locale: "en" }).toFormat(
                  "d 'of' LLL yyyy"
                )}
              </span>
            </div>
            <div>{post.title.rendered}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Guide;
