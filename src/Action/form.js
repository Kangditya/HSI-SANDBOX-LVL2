export const addContactInfo = ({name = '', email = '', phone = '', company = ''} = {}) => ({
    type: 'ADD_CONTACT_INFO',
    contactInfo: {
        name,
        email,
        phone,
        company,
    }
});

export const addServices = ({service = ''}) => ({
    type: 'ADD_SERVICE',
    services: {
        service,
    }
});

export const addBudgeting = ({budget = ''}) => ({
    type: 'ADD_BUDGET',
    budgeting: {
        budget,
    }
});