const defaultState = {
    customers : [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
        { id: 4, name: 'User 4' },
        { id: 5, name: 'User 5' },
        { id: 6, name: 'User 6' },
        { id: 7, name: 'User 7' },
        { id: 8, name: 'User 8' },
    ],
}

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMER:
            return {...state, customers: [...state.customers.filter(customer => customer.id !== action.payload)]};
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        default: return state;
    }
}
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload});
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload});