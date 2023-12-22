import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { useParams } from "react-router-dom";
import axios from "axios";

function GuideIdPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://public-api.wordpress.com/wp/v2/sites/thechisomchima.wordpress.com/posts/${id}`
        );
        setPost(response.data);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchPosts();
    }
  }, [id]);

  return (
    <main className="w-full h-full">
      {loading && <Loader />}
      <div className="p-20 m-auto flex items-center justify-center flex-col mt-[100px]">
        <div className="flex items-center mb-10 capitalize justify-start text-gray-600 text-5xl font-extrabold h-full">
          {post?.title?.rendered}
        </div>
        {post && (
          <div
            className="w-[60%] leading-10"
            key={post.id}
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        )}
      </div>
    </main>
  );
}

export default GuideIdPage;
