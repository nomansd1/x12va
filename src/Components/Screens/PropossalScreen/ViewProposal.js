import React from 'react'
import './ViewProposal.css'
import EverySectionHeader from '../../EverySectionHeader'

function ViewProposal() {
    return (
        <div className="wrapper__box">
            <EverySectionHeader
                title="View Proposal"
            />
            <div className="wrapper__innerBox">
                <div className="viewProposal__box">
                    <label>Problem statement</label>
                    <p>
                        Etiam consectetur ut erat a pellentesque
                        pellentesque commodo consectetur porta.
                    </p>
                    <label>description</label>
                    <p>
                        Duis urna diam, malesuada ullamcorper ultricies in,
                        iaculis vel lectus. Vestibulum tempor venenatis lorem,
                        vel molestie est dictum vitae. Maecenas quis ligula a
                        leo varius lobortis. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas.
                        Vivamus imperdiet nulla magna.
                        <br />
                        <br />
                        Ron ullamcorper semper at. Nam pellentesque nec leo
                        at ultricies. Fusce fermentum varius volutpat. Etiam
                        elementum ex eget nisi tincidunt, a interdum tellus
                        rhoncus. In hac habitasse platea dictumst.
                    </p>
                    <label>budget:</label>
                    <span>$567.00</span>
                    <div className="viewProposal__btn">
                        <button>Assign</button>
                        <button>View Profile</button>
                        <button>Rate Proposal</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProposal
