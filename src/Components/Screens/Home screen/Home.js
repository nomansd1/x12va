import React, { useEffect } from 'react'
import './Home.css'

import Navbar from '../../Navbar'

// All components of Home screen 
import Banner from './Banner'
import CategoriesSection from './CategoriesSection'  
import PlatformVerifiers from './PlatformVerifiers'
import ExploreMarket from './ExploreMarket'
import ServicesSearchBar from './ServicesSearchBar'
import WorkForUs from './WorkForUs'
import OpportunitySection from './OpportunitySection'
import TopExpertSec from './TopExpertSec'

function Home() {

    return (
        <div>
            <section className="banner">
                <Navbar/>
                <Banner/>
            </section>
            <CategoriesSection/>
            <PlatformVerifiers/>
            <ExploreMarket/>
            <ServicesSearchBar/>
            <WorkForUs/>
            <OpportunitySection/>
            <TopExpertSec/>
        </div>
    )
}

export default Home
