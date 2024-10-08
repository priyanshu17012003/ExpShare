import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import useGetPosts from "../context/useGetPosts";

function ShowProfile() {
  const [auhtUser, setAuthUser] = useAuth();
  const [profile, setProfile] = useState([]);
  const { posts } = useGetPosts();

  useEffect(() => {
    const getProfile = async () => {
      try {
        if (auhtUser) {
          await axios.get(`/api/profile/getProfile`).then((res) => {
            if (res.data) {
              setProfile(res.data.profile);
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, [auhtUser]);

  const filter= posts.filter((item)=>(item.email === profile.email))

  return (
    <>
      <div className="mx-auto max-w-screen-2xl container px-5 md:px-5">
        <div className="hero flex flex-col items-center justify-center">
          <div className="card w-full max-w-screen-lg mx-auto shadow-2xl bg-base-100 p-5">
            <div className="flex flex-col items-center">
              <div className="avatar mb-4">
                <div className="w-24 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                  <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1718279448~exp=1718283048~hmac=c8f69237246c4edaed512b0eee5b8c202a23c13f6a00716aca2bb63f272f9634&w=826" />
                </div>
              </div>

              <div className="mb-4">
                <h1 className="text-2xl font-bold text-center">{profile.name}</h1>
              </div>

              <div className="flex justify-around w-full max-w-md mb-4">
                <div className="text-center">
                  <p className="font-bold text-lg text-green-500">Posts</p>
                  <p className="text-gray-600">{filter.length}</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg  text-green-500">Pronouns</p>
                  <p className="text-gray-600">{profile.pronouns}</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg  text-green-500">Domain</p>
                  <p className="text-gray-600">Following</p>
                </div>
              </div>

              <div className="text-center mb-4">
                <p className="text-gray-600">{profile.email}</p>
                <p className="text-gray-600">
                •Bio- {profile.bio}
                  <br />• Linkedin↴
                </p>
                <a
                  href= {profile.Llink}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  {profile.Llink}
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowProfile;
