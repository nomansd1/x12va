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

    // useEffect(() => {
    //         const images = [
    //             'url("../../../Assets/Images/Group 361.png")',
    //             'url("../../../Assets/Images/Group 367.png")',
    //         ];
        
    //         const section = document.querySelector('section');
    //         const bg = images[Math.floor(Math.random() * images.length)];
    //         section.style.backgroundImage = bg;
    //     setInterval( , 100);

    // }, [])

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
