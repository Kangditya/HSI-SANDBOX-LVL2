import React from "react";
import './Comp.css'

const Contact = ({ values, onChange, errors, onBlur }) => {
    return(
        <div className="card-container">
            <div className="header-form">
                <p className="title-form">Contact Detail</p>
                <p className="subtitle-form">Fill Detail of Contact Information</p>
            </div>
            <div className="form-container">
                <div className="form-group">
                    <label htmlFor="name" className={errors.name ? 'form-label-error' : 'form-label'}>Name</label>
                    <div className={errors.name ? 'form-input-error' : 'form-input'}>
                        <input type="text" id="name" placeholder="Name" name="name" value={values.name} onChange={onChange} onBlur={onBlur}/>
                        <svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5629 14.2939C15.0647 14.2939 17.9034 11.4552 17.9034 7.95337C17.9034 4.45156 15.0647 1.61279 11.5629 1.61279C8.06106 1.61279 5.22229 4.45156 5.22229 7.95337C5.22229 11.4552 8.06106 14.2939 11.5629 14.2939Z" stroke="#A0A3BD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.41797 27.4384C1.41797 24.7478 2.4868 22.1674 4.38935 20.2648C6.29189 18.3623 8.87229 17.2935 11.5629 17.2935C14.2535 17.2935 16.8339 18.3623 18.7364 20.2648C20.639 22.1674 21.7078 24.7478 21.7078 27.4384" stroke="#A0A3BD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span className={errors.name ? 'error' : 'error error-hide'}>{errors.name ? errors.name : 'Error'}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className={errors.email ? 'form-label-error' : 'form-label'}>Email</label>
                    <div className={errors.email ? 'form-input-error' : 'form-input'}>
                        <input type="text" id="email" placeholder="Email" name="email" value={values.email} onChange={onChange} onBlur={onBlur}/>
                        <svg className="email" width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.9883 1.52588H2.98828C1.88371 1.52588 0.988281 2.42131 0.988281 3.52588V15.5259C0.988281 16.6304 1.88371 17.5259 2.98828 17.5259H21.9883C23.0929 17.5259 23.9883 16.6304 23.9883 15.5259V3.52588C23.9883 2.42131 23.0929 1.52588 21.9883 1.52588Z" stroke="#A0A3BD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M23.3993 2.10791L12.4883 11.0259L1.57727 2.10791" stroke="#A0A3BD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span className={errors.email ? 'error' : 'error error-hide'}>{errors.email ? errors.email : 'Error'}</span>
                    {/* { errors.email && <span className="error">{errors.email}</span> } */}
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className={errors.phone ? 'form-label-error' : 'form-label'}>Phone Number</label>
                    <div className={errors.phone ? 'form-input-error' : 'form-input'}>
                        <input type="number" id="phone" placeholder="Phone number" name="phone" value={values.phone} onChange={onChange} onBlur={onBlur}/>
                        <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2434 1.51172H3.06946C1.82082 1.51172 0.808594 2.52394 0.808594 3.77259V25.2508C0.808594 26.4995 1.82082 27.5117 3.06946 27.5117H13.2434C14.492 27.5117 15.5042 26.4995 15.5042 25.2508V3.77259C15.5042 2.52394 14.492 1.51172 13.2434 1.51172Z" stroke="#A0A3BD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.8595 1.51172V2.99295C11.8595 3.38579 11.7035 3.76255 11.4257 4.04033C11.1479 4.31812 10.7711 4.47418 10.3783 4.47418H5.9346C5.54175 4.47418 5.165 4.31812 4.88721 4.04033C4.60943 3.76255 4.45337 3.38579 4.45337 2.99295V1.51172" stroke="#A0A3BD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span className={errors.phone ? 'error' : 'error error-hide'}>{errors.phone ? errors.phone : 'Error'}</span>
                    {/* { errors.email && <span className="error">{errors.email}</span> } */}
                </div>
                <div className="form-group">
                    <label htmlFor="company" className={errors.company ? 'form-label-error' : 'form-label'}>Company</label>
                    <div className={errors.company ? 'form-input-error' : 'form-input'}>
                        <input type="text" id="company" placeholder="Company" name="company" value={values.company} onChange={onChange} onBlur={onBlur}/>
                        <svg width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.399 30.5116V6.86729C15.3989 6.6139 15.3191 6.36696 15.171 6.16138C15.0229 5.9558 14.8139 5.80198 14.5736 5.72168L2.50606 1.69918C2.32461 1.63837 2.13128 1.62165 1.94208 1.65039C1.75289 1.67914 1.57325 1.75253 1.41805 1.86449C1.26285 1.97644 1.13654 2.12375 1.04958 2.29422C0.962622 2.46469 0.917507 2.65342 0.917972 2.84479V30.5116" stroke="#A0A3BD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.5703 22.8916V24.0984" stroke="#A0A3BD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.5703 16.8579V18.0647" stroke="#A0A3BD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.5703 10.8242V12.031" stroke="#A0A3BD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.74609 22.8916V24.0984" stroke="#A0A3BD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.74609 16.8579V18.0647" stroke="#A0A3BD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.74609 10.8242V12.031" stroke="#A0A3BD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span className={errors.company ? 'error' : 'error error-hide'}>{errors.company ? errors.company : 'Error'}</span>
                    {/* { errors.email && <span className="error">{errors.email}</span> } */}
                </div>
            </div>
        </div>
    )
};

export default Contact;