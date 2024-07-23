import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';

function Container() {

const [authUser, setAuthUser] = useAuth();
const [apilist,setapiList]=useState([]);

const [query, setQuery] = useState('');
const [filteredApiList, setFilteredApiList] = useState([]);

useEffect(()=>{

  const getList=async()=>{
    try{
      const res=await axios.get("/api/list");
      setapiList(res.data);
    }
    catch(error)
    {
      console.log(error);
    }
  };

  getList();
},[])

useEffect(() => {
  if (query === '') {
    setFilteredApiList([]); // Clear filtered list when query is empty
  } else {
    const filtered = apilist.filter((item) =>
      item.company && item.company.toLowerCase().includes(query.toLowerCase())  // Adjust to match your item structure
    );
    setFilteredApiList(filtered);
  }
}, [query, apilist]);

const filter= apilist.filter((item)=>(item.email !== authUser.user.email))
  return (
    <div className='mx-auto max-w-screen-2xl container px-5 mt-5 md:px-5 md:mt-10'>  
       <center>
            <h2 className='text-2xl font-semibold'>We are delight to have you <span className='text-2xl text-green-500 font-bold'>Here!😃</span></h2>
            <p className='mt-5 text-center text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eos temporibus eaque reiciendis deserunt dolore! Perspiciatis, excepturi. Est expedita, excepturi odio non illo ab laudantium laboriosam sint iste optio totam?
            Fugiat mollitia beatae reiciendis saepe, nulla assumenda enim facere illum nesciunt sunt porro necessitatibus magnam veniam sint! Illo blanditiis</p>
       </center> 
       <div className='mt-8 md:mt-10 mb-5'>
        <center>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by company name..."
          className="input input-bordered w-1/2 rounded hover:border-green-500 focus:outline-none focus:border-green-500"
        />
        </center>
      </div>
       <div className='mt-5 mb-5 grid grid-cols-1 md:grid-cols-4 md:mt-10 md:mb-10'>
       {query === ''
          ? filter.map((item) => (
              <Card item={item} key={item._id} />
            ))
          : filteredApiList.map((item) => (
              <Card item={item} key={item._id} />
            ))}
       </div>
    </div>
  )
}

export default Container
