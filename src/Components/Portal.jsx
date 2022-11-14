import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

function Portal() {
    return (
        <>
        <Navbar></Navbar>
        <Outlet/>
        </>
    )
}

export default Portal