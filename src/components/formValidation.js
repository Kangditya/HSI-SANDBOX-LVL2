const validateForm = (selectedTab) => (values) => {
    let errors = {}

    if (selectedTab === 0) {
        if (!values.name) {
            errors.name = 'Name is Required.'
        } else if (!values.name.trim().match(/^[A-Za-z'.,\s]+$/)) {
            errors.name = 'Invalid name format'
        }

        if (!values.email) {
            errors.email = 'Email is Required.'
        } else if (!values.email.trim().match(/^[^\s@]+@gmail\.com$/)) {
            errors.email = 'Invalid. Must a @gmail.com'
        }
    
        if (!values.phone) {
            errors.phone = 'Phone Number is Required.'
        } else if (!values.phone.trim().match(/^08\d{8,14}$/)) {
            if (values.phone.trim().startsWith('08')) {
                errors.phone = 'Invalid. Must more than 8 digits';
            } else {
                errors.phone = 'Invalid. Must start with prefix 08.';
            }
        }

        if (!values.company) {
            errors.company = 'Company is Required.'
        }
    }
    return errors;
}

export default validateForm;