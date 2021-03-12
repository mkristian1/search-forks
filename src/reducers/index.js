const initialState = {
    forks: [
        {name:'path', repository: '/src'}
    ]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_VALUE':
            return state;    
        default:
            return state;
    }

}

export default reducer;