import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShowOUserProfile from "../components/ShowOUserProfile";

function ShowOtherProfile() {

  return (
    <>
      <Navbar></Navbar>
      <div>
        <ShowOUserProfile></ShowOUserProfile>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ShowOtherProfile;
