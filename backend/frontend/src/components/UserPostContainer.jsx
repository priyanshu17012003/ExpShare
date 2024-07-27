import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import useGetPosts from "../context/useGetPosts";
import axios from "axios";
import { Link } from "react-router-dom";

function PostContainer() {
  const [authUser, setAuthUser] = useAuth();
  const { posts } = useGetPosts();

  
  const filter = posts.filter((item) => item.email === authUser.user.email);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/list/delete/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error.response.data.message);
    }
  };


  return (
    <div className="max-w-screen-2xl mx-auto container px-5 md:px-5">
      <h1 className="text-3xl font-bold mb-5 text-center mt-5 text-green-500">My Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filter.map((post) => (
          <div
            key={post._id}
            className="card bg-base-100 shadow-xl p-5"
            style={{ width: "18rem", margin: "auto" }}
          >
            <div className="card-body">
            {authUser.user.email === post.email ?<MdDeleteForever className="text-red-500 text-2xl cursor-pointer absolute top-8 right-0" onClick={() => handleDelete(post._id)} />:null}
            {authUser.user.email === post.email ?<Link to={`/editJourney/${post._id}`}><FaEdit className="text-green-500 text-2xl cursor-pointer absolute top-8 right-8" /></Link>:null}
              <div className="text-center mb-4">
                <h2 className="card-title font-bold text-xl">{post.company}</h2>
                <p className="text-gray-600">{post.type}</p>
                <p className="text-gray-600">{post.exps}</p>
                <p className="text-gray-600">{post.experience}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostContainer;
