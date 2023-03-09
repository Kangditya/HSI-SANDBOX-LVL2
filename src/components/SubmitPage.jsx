import React from "react";
import './Comp.css';
import '../App.css'

const SubmitPage = ({ values }) => {
    const handleSubmit = () => {
        // event.preventDefault(); // prevent form submission

        alert(JSON.stringify(values)); // show the form data in an alert dialog
        window.location.reload()
    };
    return(
    <div className="submit-page">
        <div className="checklist-sign">
            <svg width="54" height="42" viewBox="0 0 54 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.20312 24.2843L17.1836 37.2648L49.6349 4.81348" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="top-left"></div>
            <div className="top-right"></div>
            <div className="bottom-left"></div>
            <div className="bottom-right"></div>
        </div>
        <div className="header-submit">
            <p className="submit-title">Submit your quote request</p>
            <div className="subtitle-wrap">
                <p className="submit-subtitle">Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.</p>
            </div>
        </div>
        <div className='submit-btn' onClick={handleSubmit}>
            <p>Submit</p>
        </div>
    </div>
    )
};

export default SubmitPage;