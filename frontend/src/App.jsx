import React from "react";
import Home from "./pages/Home";
import Explores from "./pages/Explores";
import SignUp from "./components/SignUp"
import Journeys from "./pages/Journeys";
import SingleJourney from "./pages/SingleJourney";
import CreateProfile from "./components/CreateProfile";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import ShowOtherProfile from "./pages/ShowOtherProfile";
import JourneysEdit from "./pages/JourneysEdit";
import {Routes,Route, Navigate} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/explores" element={authUser?<Explores/>:<Navigate to='/'></Navigate>}></Route>
    <Route path="/signUp" element={<SignUp/>}></Route>
    <Route path="/journeys" element={authUser?<Journeys/>:<Navigate to='/'></Navigate>}></Route>
    <Route path="/journey/:userId" element={<SingleJourney/>}></Route>
    <Route path="/createProfile" element={<CreateProfile/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/showOtherProfile/:id" element={<ShowOtherProfile/>}></Route>
    <Route path="/messages" element={<Messages/>}></Route>
    <Route path="/editJourney/:id" element={<JourneysEdit/>}></Route>
    </Routes>
    <Toaster />
    </>
  );
}

export default App;
