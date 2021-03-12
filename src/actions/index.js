const forksLoaded = (forks) => {
    return {
        type: 'FORKS_LOADED',
        payload: forks
    }
}

export {forksLoaded}