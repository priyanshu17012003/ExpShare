import React, { useEffect, useState } from 'react'
import axios from "axios";

function useGetPosts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const getPosts = async () => {
        try {
            const res = await axios.get("/api/list");
            setPosts(res.data);
        } catch(error) {
          console.log(error);
        }
      };
  
      getPosts();
    }, []);
    
  return {posts};
}

export default useGetPosts;