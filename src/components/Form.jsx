import React, { useReducer, useState } from 'react';
import { useForm } from '../hooks/useForm';
import Budget from './Budget';
import ButtonPrev from './ButtonPrev';
import Contact from './Contact';
import Services from './Services';
import SubmitPage from './SubmitPage';
import validateForm from './formValidation';
import { addBudgeting, addContactInfo, addServices } from '../Action/form';
import formReducer from '../Reducers/formReducer';


const Form = () => {
    const data = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
    })

    const [selectedTab, setSelectedTab] = useState(0)
    const numbers = [1,2,3,4];

    const nextStep = () => {
        setSelectedTab(selectedTab + 1);
    };

    const prevStep = () => {
        setSelectedTab(selectedTab - 1);
    };

    // const dispatch = useDispatch();

    const dispatch = useReducer(formReducer, data)

    const submitFormCallback = () => {
        if (selectedTab === 3) {
            dispatch(addContactInfo({
                name,
                email,
                phone,
                company
            }))

            dispatch(addServices({
                service
            }))

            dispatch(addBudgeting({
                budget
            }))
            nextStep();
        } else {
            nextStep();
        }
    }

    const { values, errors, onBlur, onChange, onSubmit } = useForm(submitFormCallback, validateForm(selectedTab));
    const { name, email, phone, company, service, budget } = values;
    console.log(errors);
    return(
        <div className="container">
            <form onSubmit={onSubmit} autoComplete='off'>
            <div className="card">
                <div className='nav-wrap'>
                {numbers.map((item, index) =>(
                    <div className="nav">
                        <div className={`${selectedTab >= index ? 'recent-step' : 'step'}`}>
                            <p className={`${selectedTab >= index ? 'index-page-recent' : 'index-page'}`} key={item}>{item}</p>
                        </div>
                        { index < 3 && 
                        <div className={`${selectedTab <= index ? 'right' : 'pass'}`}>
                            { selectedTab === index && <div className='right-recent'></div>}
                        </div>
                        }
                    </div>
                ))}
                </div>

                <div>
                {selectedTab === 0 && <Contact values={values} onChange={onChange} errors={errors} onBlur={onBlur} />}
                {selectedTab === 1 && <Services values={values} onChange={onChange} />}
                {selectedTab === 2 && <Budget values={values} onChange={onChange} />}
                {selectedTab === 3 && <SubmitPage values={values} /> }
                </div>
            </div>
                <div className='button-nav'>
                    {selectedTab > 0 ? <ButtonPrev label="Previous Step" onClick={prevStep}></ButtonPrev> : <div></div> }
                    {selectedTab < 3 ? <button type='submit' className='next-btn'><p>Next Step</p></button>  : <div></div> }
                </div>
            </form>
        </div>
    )
}

export default Form;