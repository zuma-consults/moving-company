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
          `https://public-api.wordpress.com/wp/v2/sites/atdlogisticsintl.wordpress.com/posts/${id}`
        );
        setPost(response.data);
        // console.log(response);
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

  const renderContentWithLineBreaks = () => {
    if (!post) return null;
  
    const contentWithLineBreaks = post.content.rendered.replace(/\n/g, "<hr class='my-1 border-transparent'>");
    return { __html: contentWithLineBreaks };
  };

  return (
    <main className="w-full h-full">
      {loading && <Loader />}
      <div className="md:p-20 p-7 md:w-[60%]  m-auto flex items-center justify-center flex-col mt-[100px]">
        <div
          className="flex items-center mb-10 capitalize justify-start text-gray-600 text-5xl font-extrabold h-full"
          dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
        />
        {post && (
          <div
            className="leading-10"
            style={{ marginBottom: "10px" }} 
            key={post.id}
            dangerouslySetInnerHTML={renderContentWithLineBreaks()}
          />
        )}
      </div>
    </main>
  );
}

export default GuideIdPage;
