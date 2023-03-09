import React from 'react';
import './style/budget.css';

const Budget = ({ values, onChange }) => {
    return (
        <div className="card-container">
            <div className="header-form">
                <p className="title-form">What’s your project budget?</p>
                <p className="subtitle-form">Please select the project budget range you have in mind.</p>
            </div>
            <form action="">
            <div className="form-container-box">
                <label htmlFor="budget" className='budget'>
                    <input id="budget1" name="budget" type="radio" value="$5.000 - $10.000" checked={values.budget === "$5.000 - $10.000"} onChange={onChange}/>
                    <div htmlFor="services" id="service-box" className="form-budget">
                        <div class="checkmark">
                        </div>
                        <div class="checkmark-dot"></div>
                        <p className="options-label">$5.000 - $10.000</p>
                    </div>
                </label>
                <label htmlFor="budget" className='budget'>
                    <input id="budget2" name="budget" type="radio" value="$10.000 - $20.000" checked={values.budget === "$10.000 - $20.000"} onChange={onChange}/>
                    <div htmlFor="services" id="service-box" className="form-budget">
                        <div class="checkmark">
                        </div>
                        <div class="checkmark-dot"></div>
                        <p className="options-label">$10.000 - $20.000</p>
                    </div>
                </label>
                <label htmlFor="budget" className='budget'>
                    <input id="budget3" name="budget" type="radio" value="$20.000 - $50.000" checked={values.budget === "$20.000 - $50.000"} onChange={onChange}/>
                    <div htmlFor="budget" id="service-box" className="form-budget">
                        <div class="checkmark">
                        </div>
                        <div class="checkmark-dot"></div>
                        <p className="options-label">$20.000 - $50.000</p>
                    </div>
                </label>
                <label htmlFor="budget" className='budget'>
                    <input id="budget4" name="budget" type="radio" value="$50.000 +" checked={values.budget === "$50.000 +"} onChange={onChange}/>
                    <div htmlFor="budget" id="service-box" className="form-budget">
                        <div class="checkmark">
                        </div>
                        <div class="checkmark-dot"></div>
                        <p className="options-label">$50.000 +</p>
                    </div>
                </label>
            </div>
            </form>
        </div>
    );
};

export default Budget;