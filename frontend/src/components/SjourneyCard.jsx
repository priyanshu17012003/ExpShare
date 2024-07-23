import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SjourneyCard() {
  const navigate = useNavigate();
  const { userId } = useParams(); // Replace with the actual userId
  const [userJourney, setUserJourney] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user journey data from the backend
    const fetchUserJourney = async () => {
      try {
        const response = await axios.get(
          `/api/list/post/${userId}`
        );
        setUserJourney(response.data.display);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUserJourney();
  }, [userId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="py-10 md:py-20">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">
              <img
                src={userJourney.img}
                className="h-10 w-10 md:h-11 md:w-11"
              ></img>
              {userJourney.name}
            </h2>
          <p className="font-bold text-green-500 text-2xl">
            {userJourney.company}
          </p>
           <p className="font-semibold">{userJourney.type}</p>
          <p className="font-semibold">{userJourney.experience}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-green-500 text-white rounded-md hover:bg-base-100 hover:text-black hover:border-green-500" onClick={()=> navigate(`/showOtherProfile/${userJourney.id}`)}>User profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SjourneyCard;
