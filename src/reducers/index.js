const initialState = {
    forks: [],
    searchFilter: '',
    loading: true,
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FORKS_LOADED':
            return {
                ...state,
                loading: false,
                forks: action.payload
            }
        case 'SEARCH_FORKS':
            const filterText = action.payload;
            return {
                ...state,
                searchFilter: filterText,
            }
        default:
            return state;
    }
}

export default reducer;