import React, { useState } from 'react'
import './VerifiersForm.css'

function VerifiersForm() {

    return (
        <div className="form__wrapperCont">
            <form>
                <label>Enter Your Order Number</label>
                <input type="text" placeholder="Enter here"/>

                <label>Enter Your Subject</label>
                <input type="text" placeholder="Enter here"/>
                
                <label>Enter Problem Statement.</label>
                <input type="text" placeholder="Enter here"/>
                
            </form>
        </div>
    )
}

export default VerifiersForm
