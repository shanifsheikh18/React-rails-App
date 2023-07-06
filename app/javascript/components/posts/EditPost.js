import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useNavigate} from "react-router-dom";
import './CreatePost.css'

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        description: ""
    });
    // const history = useHistory();
    useEffect(() => {
        const editData = async () => {
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
      
          editData();
    }, [id])
   
    // function handleClick() {
    //  history.push("/")
    // }
    function onTextFieldChange(e) {
        setPost({
         ...post,
         [e.target.name]: e.target.value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault()
        console.log("Submitted")
        console.log(post)
        try {
            const response = await window.fetch(`/api/posts/${id}`, {
              method: 'put',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(post),
            });

            if (!response.ok){
              const err = await response.json();
              // setError(err)
              console.log(err)
            }else{
              navigate('/posts');
            //   window.alert('Edit Post!');
            }
            // console.log(error)
            // if (!response.ok) throw Error(response.statusText);
            
          } catch (error) {
            console.error(error);
          }
    };
    
    return(
        <>
        <div className="post-background">
            <div className="login-page">
                <div className="createpost-form">
                    <h2>Edit a Post</h2>
                    <form className="" onSubmit={e =>onFormSubmit(e)}>
                    <input type="text" name="title" placeholder="Title" value={post.title} onChange={e => onTextFieldChange(e)}/>
                    <input type="text" name="description" placeholder="Description" value={post.description} onChange={e => onTextFieldChange(e)}/>
                    <button>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default EditPost