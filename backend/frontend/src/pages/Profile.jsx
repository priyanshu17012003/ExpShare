import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShowProfile from '../components/ShowProfile'
import PostContainer from '../components/UserPostContainer'
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate=useNavigate();

  const [authUser, setAuthUser] = useAuth();
  return (
    <>
    <Navbar></Navbar>
    <div>
    { authUser?<ShowProfile></ShowProfile>:navigate('/') }
    </div>
    <PostContainer></PostContainer>
    <Footer></Footer>
    </>
  )
}

export default Profile