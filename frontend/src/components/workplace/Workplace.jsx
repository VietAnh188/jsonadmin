import React from 'react'
import TextArea from '../textArea/TextArea'
import './workplace.css'

const Workplace = () => {
    return (
        <div className="workplace">
            <div className="workplaceWrapper">
                <div className="workplaceLeft">
                    <span>Editor</span>
                    <TextArea />
                </div>
                <div className="workplaceRight">
                    <span>Screen</span>
                    <TextArea isScreen={true} />
                </div>
            </div>
        </div>
    )
}

export default Workplace
