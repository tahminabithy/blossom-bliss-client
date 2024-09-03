import React from 'react'
import NavBar from '../shared/NavBar/NavBar'
import Footer from '../shared/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'

export default function Main() {


    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />


        </div>
    )
}
