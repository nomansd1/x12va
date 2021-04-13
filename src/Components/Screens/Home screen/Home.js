import React from 'react'

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
            <Banner/>
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
