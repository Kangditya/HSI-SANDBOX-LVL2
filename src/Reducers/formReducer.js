const formQuote = {
    contactInfo: [],
    services: [],
    budgeting: [],
}

const formReducer = (state=formQuote, action) => {
    switch (action.type) {
        case 'ADD_CONTACT_INFO':
            return {
                ...state,
                contactInfo: [...state.contactInfo, action.contactInfo]
            }
        case 'ADD_SERVICE':
            return {
                ...state,
                services: [...state.services, action.services]
            }
        case 'ADD_BUDGET':
            return {
                ...state,
                budgeting: [...state.budgeting, action.budgeting]
            }
        case 'CLEAR_INFO':
            return []
        default:
            return state;
    }
}

export default formReducer;


// const formReducer = (state, action) => {
//     switch (action.type) {
//         case 'SET_VALUE':
//             return {...state, [action.name]: action.value};
//         case 'SET_CLEAR_ERROR':
//             return {...state, [action.name]: action.value, error: {...state.error, [action.name]: ""}};
//         default:
//             throw new Error();
//     }
// }

// export default formReducer;