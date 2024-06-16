import React, { useEffect, useState } from 'react';
import {fetchPosts, Post} from '../API/fetchPosts';
import { Link } from 'react-router-dom';
import Loading from '../UI/Loading';
import ErrorPage from './ErrorPage';

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;
  
    useEffect(() => {
      let isMounted = true;
  
      const getPosts = async () => {
        try {
          const data = await fetchPosts();
          if (isMounted) {
            setPosts(data);
          }
        } catch (error) {
          if (isMounted) {
            setError((error as Error).message);
          }
        } finally {
          if (isMounted) {
            setLoading(false);
          }
        }
      };
  
      getPosts();
  
      return () => {
        isMounted = false;
      };
    }, []);
  
    if (loading) {
      return <Loading />; 
    }
  
    if (error) {
      return <ErrorPage message={error} />; 
    }

  // Calculate the posts to be displayed on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Handlers for pagination
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="p-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold my-4 text-center text-blue-400 border-b-2 border-blue-400 pb-2">Posts</h2>
      <ul className="space-y-4 w-full max-w-6xl mx-4">

        {currentPosts.map((post) => (
          <li key={post.id} className="p-4 bg-white rounded shadow-md">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p>{post.body}</p>
            <div className="flex justify-end mt-4">
              <Link to={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                Read more
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4 w-full max-w-2xl">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};
  
  export default Posts;