import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import JForm from '../components/JForm'
import { useNavigate } from 'react-router-dom'

function Journeys() {

    return (
    <>
    <Navbar></Navbar>
    <div className='min-h-screen'>
    <JForm></JForm>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Journeys