import React from 'react'
import './CategoriesSection.css'

import Category from './Category'
import cat1 from '../../../Assets/Images/category1.png'
import cat2 from '../../../Assets/Images/category2.png'
import cat3 from '../../../Assets/Images/category3.png'
import cat4 from '../../../Assets/Images/category4.png'

function CategoriesSection() {
    return (
        <div className="category">
            <h1>Popular Categories</h1>
            <p>Aenean gravida nibh sed erat aliquet in rutrum eros pallentesque, Curabitur tincidunt  fascibus est.</p>
            
            <div className="categories__slider">
                <button className="slider__btn">&lt;</button>
                <Category
                    title="Content Writing"
                    img={cat1}
                />
                <Category
                    title="Management"
                    img={cat2}
                />
                <Category
                    title="Finance"
                    img={cat3}
                />
                <Category
                    title="Social Media"
                    img={cat4}
                />
                <button className="slider__btn">&gt;</button>
            </div>
            <button className="all__categoriesbtn">All Categories</button>
        </div>
    )
}

export default CategoriesSection
