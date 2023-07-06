import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useNavigate} from "react-router-dom";
const Page404 = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/posts');
    }
    return(
        <>
            <h1>404 Page Not Found</h1>
            
            <button onClick={handleClick}>home</button>

        </>
    );
}
export default Page404