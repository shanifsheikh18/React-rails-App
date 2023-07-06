import React, { useState } from 'react';
import { useParams, useNavigate} from "react-router-dom";
import './CreatePost.css'
const   CreatePost = () => {
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const [createPost, setcreatePost] = useState({
        title: "",
        description: ""
    });
    
    function onTextFieldChange(e) {
        setcreatePost({
         ...createPost,
         [e.target.name]: e.target.value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault()
        console.log("Submitted")
        console.log(createPost)
        try {
            const response = await window.fetch('/api/posts', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(createPost),
            });

            if (!response.ok){
              const err = await response.json();
              // setError(err)
              console.log(err)
            }else{
              window.alert('Post Added!');
              navigate('/posts');
            }
            // console.log(error)
            // if (!response.ok) throw Error(response.statusText);
            
          } catch (error) {
            console.error(error);
          }
    };

    return (
        <>
          <div className="post-background">
            <div className="login-page">
                <div className="createpost-form">
                    <h2>Create a Post</h2>
                    <form className="" onSubmit={e =>onFormSubmit(e)}>
                    <input type="text" name="title" placeholder="Title" onChange={e => onTextFieldChange(e)}/>
                    <input type="text" name="description" placeholder="Description" onChange={e => onTextFieldChange(e)}/>
                    <button>SUBMIT</button>
                    </form>
                </div>
            </div>
          </div>
        </>
  );
};

export default  CreatePost;