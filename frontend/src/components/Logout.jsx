import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';
import axios from 'axios';

function Logout() {

  const [authUser, setAuthUser] = useAuth();

  const handleLogout=async()=>{
    try{
        setAuthUser(undefined);
        localStorage.removeItem("user");
        await axios.post("/api/user/logout")
        .then((res)=>{
          toast.success(res.data.message);
        })

        setTimeout(() => {
            window.location.reload();
        },3000)
    }
    catch(err){
        console.log(err);
        toast.error("Something went wrong "+err.message);
    }
    }

  return (
    <div>
        <button className='btn px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-white hover:text-black hover:border-red-500' onClick={()=>handleLogout()}>Logout</button>
    </div>
  )
}

export default Logout