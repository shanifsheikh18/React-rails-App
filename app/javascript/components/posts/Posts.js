import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from "react-router-dom";
import './Post.css'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch('/api/posts');
        if (!response.ok) throw Error(response.statusText);
          const data = await response.json();
          setPosts(data);
          console.log(data);
        }
        catch (error) {
          setIsError(true);
          console.error(error);
        }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleDelete = async id => {
    const sure = window.confirm('Are you sure?');

    if (sure) {
      try {
        const response = await window.fetch(`/api/posts/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) throw Error(response.statusText);

        window.alert('Post Deleted!');
        navigate('/posts');
        setPosts(posts.filter(post => post.id !== id));
      } catch (error) {
        console.error(error);
      }
    }

  }

  return (
    <>
      <div className="post-container">
        <div className="post-title">
          <h1>World <span>Posts</span></h1>
        </div>
        <div className="row">
          <div className="post-cover">
            {posts.map((item)=>{
              return (
                <>
                  <div className='post-col'>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <Link className="post-btn" to={`/posts/${item.id}`}>VIEW</Link>
                    <Link className="post-btn" to={`/posts/edit/${item.id}`}>EDIT</Link>
                    <button className="post-btn" onClick={() => handleDelete(item.id)}>DELETE</button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;