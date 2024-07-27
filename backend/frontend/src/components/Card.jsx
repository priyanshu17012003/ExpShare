import React from "react";
import { useNavigate } from "react-router-dom";
function Card({ item }) {

  const navigate = useNavigate();
  const handleClick = (event,item) => {
    navigate(`/journey/${item._id}`)
  }

  return (
    <>
      <div className="card h-15 bg-base-100 shadow-xl m-5 hover:scale-105 duration-500 transition-all">
        <figure className="px-10 pt-10">
          <img
            src={item.img}
            alt="user"
            className="rounded-xl h-12"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item.name}</h2>
          <p className="font-bold text-green-500">{item.type}</p>
          <p className="font-bold text-green-500">{item.company}</p>
          <p>{item.exps}</p>
          <div className="card-actions">
            <button className="btn bg-green-500 text-white rounded-md hover:bg-base-100 hover:text-black hover:border-green-500 cursor-pointer" onClick={(event)=>(handleClick(event,item))}>Explore!</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
