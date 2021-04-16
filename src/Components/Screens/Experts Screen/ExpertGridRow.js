import React from 'react'
import './ExpertGridRow.css'
import ExpertTile from './ExpertTile'


function ExpertGridRow({ title , avatar1 , avatar2 ,
    avatar3 , avatar4 , tileTitle1 , tileTitle2 , 
    tileTitle3 , tileTitle4, }) {
    return (
        <div>
            <div className="exp__headerContainer">
                <div className="exp __headerLeft">
                    <h2> {title} </h2>
                </div>
                <div className="exp__headerRight">
                    <button className="exp__sliderbutton">&lt;</button>
                    <button className="exp__sliderbutton">&gt;</button>
                </div>
            </div>
            <div className="expertGrid__row">
                <ExpertTile
                    avatar={avatar1}
                    tileTitle={tileTitle1}
                />
                <ExpertTile
                    avatar={avatar2}
                    tileTitle={tileTitle2}
                    
                />
                <ExpertTile
                    avatar={avatar3}
                    tileTitle={tileTitle3}
                
                />
                <ExpertTile
                    avatar={avatar4}
                    tileTitle={tileTitle4}
                
                />
            </div>

            <hr className="horizontal__line"/>
        </div>
    )
}

export default ExpertGridRow
