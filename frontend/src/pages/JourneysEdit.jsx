import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import JFormEdit from '../components/JFormEdit'

function JourneysEdit() {

    return (
    <>
    <Navbar></Navbar>
    <div className='min-h-screen'>
    <JFormEdit></JFormEdit>
    </div>
    <Footer></Footer>
    </>
  )
}

export default JourneysEdit