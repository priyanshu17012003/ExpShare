import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Contacted() {

    const navigate = useNavigate();

    const [profiles, setProfile] = useState([]);
    useEffect(() => {
        
        const getMembers=async()=>{
            try{

                await axios.get('/api/conversation/members')
                .then((res)=>{
                    console.log(res.data);
                    setProfile(res.data);
                })
                
            }
            catch(error)
            {
                console.log(error);
            }

             }

             getMembers();

      }, [])

      console.log(profiles);

  return (
    <>
    <Navbar/>
    <div className='min-h-screen max-w-screen-2xl container px-5 md:px-5'>
    {
        profiles.map((profile)=>{
            return(
                <div className="card min-w-full bg-base-100 shadow-xl mt-7 md:mt-5 ">
                    <div className="card-body">
                        <h2 className="card-title">{profile.name}</h2>
                        <p>{profile.email}</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-green-500 text-white hover:bg-white hover:text-green-500 hover:border-green-500" onClick={()=>navigate(`/showOtherProfile/${profile._id}`)}>Profile</button>
                        </div>
                    </div>
                </div> 
            )
        })
    }
    </div>
    <Footer/>
    </>
  )
}

export default Contacted