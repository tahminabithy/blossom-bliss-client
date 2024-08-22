import React from 'react'
import Banner from './Banner/Banner'
import Services from './Services/Services'
import { Helmet } from 'react-helmet'
import Featured from './Featured/Featured'

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Blossom & Bliss | Home</title>
            </Helmet>
            <Banner />
            <Services />
            <Featured />
        </div>
    )
}
