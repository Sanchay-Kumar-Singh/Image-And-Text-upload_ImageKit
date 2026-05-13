import { useEffect, useState } from "react";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts/feed`
      );

      setPosts(response.data.posts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Feed
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={post.imageUrl}
              alt="post"
              className="w-full h-[300px] object-cover"
            />

            <div className="p-4">
              <p>{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
