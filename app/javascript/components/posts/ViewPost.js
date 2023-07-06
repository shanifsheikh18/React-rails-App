import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Post.css'
const ViewPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState([]);
    // const history = useHistory();
    useEffect(() => {
        const postData = async () => {
            try {
              const response = await window.fetch(`http://127.0.0.1:3000/api/posts/${id}`);
              if (!response.ok) throw Error(response.statusText);
                const data = await response.json();
                setPost(data);
                console.log(data);
              }
              catch (error) {
                console.log(error);
              }
      
          };
      
          postData();
    }, [id])
   
    // function handleClick() {
    //  history.push("/")
    // }
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
    
    return(
        <>
        <div className="post-container">
            <div className="post-title">
                <h1>Single <span>Post</span></h1>
            </div>
            <div className="row">
                <div className="post-cover">
                    <div className='post-col'>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>

                        <Link className="post-btn" to={`/posts/edit/${post.id}`}>EDIT</Link>
                        <button className="post-btn" onClick={() => handleDelete(post.id)}>DELETE</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ViewPost