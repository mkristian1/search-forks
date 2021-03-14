export default class ForkService {
    data = [
        {id: 1, fullRepository: '/test/sw', owner: 'Mari', stars:  90, repositoryLink: 'https://github.com/mkristian1/search-forks'},
        {id: 2, fullRepository: '/micro/qa', owner: 'Kris', stars: 40, repositoryLink: 'https://github.com/mkristian1/search-forks'},
        {id: 3, fullRepository: '/crysis/', owner: 'Ruben', stars: 41, repositoryLink: 'https://github.com/mkristian1/search-forks'},
        {id: 4, fullRepository: '/iguan/sq', owner: 'Grish', stars: 22, repositoryLink: 'https://github.com/mkristian1/search-forks'},
        {id: 5, fullRepository: '/sw/qa', owner: 'Sona', stars: 40, repositoryLink: 'https://github.com/mkristian1/search-forks'},
        {id: 6, fullRepository: '/starlink/qa', owner: 'Laura', stars: 21, repositoryLink: 'https://github.com/mkristian1/search-forks'},
        {id: 7, fullRepository: '/testR/qa', owner: 'Sergio', stars: 40, repositoryLink: 'https://github.com/mkristian1/search-forks'},
    ]
    getForks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700);
        })
    }
}