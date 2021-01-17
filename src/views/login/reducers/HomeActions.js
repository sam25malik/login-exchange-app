/*Reducer for the actions*/
const data = (state = [], action) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return Object.assign({}, state, {
                email: action.data,
            });
        case 'SET_PASSWORD':
            return Object.assign({}, state, {
                password: action.data,
            });
        case 'SET_ERROR':
            return Object.assign({}, state, {
                results:'',
            });

        default:
            return state;
    }
};

export default data
