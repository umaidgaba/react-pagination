import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Post from './components/Post'
import Pagination from './components/Pagination'
import './App.css';

function App() {

  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ currentPage, setCurrentPage] = useState(1);
  const [ postsPerPage ] = useState(10);

  useEffect( () => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  // Gte current Post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
     <h1 className='text-primary mb-5'>My Blogs</h1>
     <Post posts={currentPosts} Loading={loading}/>
     <Pagination postPerPage={postsPerPage} totalPosts={post.length} paginate={paginate}/>
    </div>
  );
}

export default App;
