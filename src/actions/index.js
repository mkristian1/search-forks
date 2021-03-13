const forksLoaded = (forks) => {
    return {
        type: 'FORKS_LOADED',
        payload: forks
    }
}

const searchForks = (foundForks) => {
    return {
        type: 'SEARCH_FORKS',
        payload: foundForks,
    }
}

export {forksLoaded, searchForks}