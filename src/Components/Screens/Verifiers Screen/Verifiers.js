import React from 'react'
import './Verifiers.css'

// child components
import VerifiersSection from './VerifiersSection'

function Verifiers() {
    return (
        <div className="verifiers__wrapper">
            <div className="verifiers__header">
                <h2>Verifiers</h2>
            </div>
            <VerifiersSection/>
        </div>
    )
}

export default Verifiers
