import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SjourneyCard from "../components/SjourneyCard";

function SingleJourney() {

  
  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen mx-auto max-w-screen-2xl container px-5 md:px-5">
    <center>
    <SjourneyCard></SjourneyCard>
    </center>
    </div>
    <Footer></Footer>
    </>
  );
}

export default SingleJourney;
