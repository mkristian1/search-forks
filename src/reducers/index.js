const initialState = {
    forks: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FORKS_LOADED':
            return {
                ...state,
                forks: action.payload
            }
        case 'SEARCH_VALUE':
            return state;    
        default:
            return state;
    }

}

export default reducer;