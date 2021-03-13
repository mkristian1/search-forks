const initialState = {
    forks: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FORKS_LOADED':
            return {
                forks: action.payload
            }
        case 'SEARCH_FORKS':
            console.log('search forks');
            return state;    
        default:
            return state;
    }
}

export default reducer;