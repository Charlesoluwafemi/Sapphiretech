import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown'; // For Markdown rendering
import rehypeRaw from 'rehype-raw'; // To support raw HTML
import remarkGfm from 'remark-gfm'; // For GitHub Flavored Markdown

export default function Post() {
  const router = useRouter();
  const { id } = router.query; // Fetch the post ID from the URL
  const [post, setPost] = useState(null); // State to hold the fetched post
  const [error, setError] = useState(null); // State to hold any errors

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return; // Ensure ID is available before fetching

      try {
        const res = await fetch(`http://localhost:8000/api/posts/${id}/`); // Fetch post data from the API
        if (!res.ok) {
          throw new Error('Failed to fetch post. Please check your API.');
        }
        const data = await res.json(); // Parse the JSON response
        setPost(data); // Set the post data in state
      } catch (err) {
        console.error(err);
        setError('Failed to load post. Please try again later.'); // Set error message
      }
    };

    fetchPost(); // Call the fetch function
  }, [id]);

  // Handle loading and error states
  if (error) return <p className="text-red-600 font-semibold">{error}</p>;
  if (!post) return <p className="text-gray-600">Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6 max-w-4xl bg-white shadow-lg rounded-lg">
        <Head>
          <title>{post.meta_title || post.title} - Your Blog</title>
          <meta name="description" content={post.meta_description || post.title} />
        </Head>

        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">{post.title}</h1>

        {/* Display the image at the top of the blog post */}
        {post.image && (
          <div className="h-64 overflow-hidden">
            <img
              src={post.image.startsWith('http') ? post.image : `http://localhost:8000${post.image}`}  // Ensure correct URL handling
              alt={post.title}
              className="w-full h-full object-cover" // Full width, cover height
            />
          </div>
        )}

        {/* Render the HTML content using ReactMarkdown */}
        <div className="prose max-w-none">
          <ReactMarkdown 
            rehypePlugins={[rehypeRaw]} // To support raw HTML
            remarkPlugins={[remarkGfm]} // For GitHub Flavored Markdown support
          >
            {post.file_content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
