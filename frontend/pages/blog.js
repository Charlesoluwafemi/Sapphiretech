import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/posts/');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Blog Posts</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:shadow-lg hover:scale-105"
            >
              {post.image && (
                <div className="h-64 overflow-hidden">
                  <img
                    src={`http://localhost:8000${post.image}`}  // Ensure correct URL
                    alt={post.title}
                    className="w-full h-full object-cover" // Full width, cover height
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <div
                  className="text-gray-700 mb-4"
                  dangerouslySetInnerHTML={{
                    __html: post.file_content
                      ? post.file_content.substring(0, 150) + '...'
                      : "No content available."
                  }}
                />
                <Link href={`/blog/${post.id}`}>
                  <div className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
                    Read More
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
