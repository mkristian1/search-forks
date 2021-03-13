export default class ForkService {
    data = [
        {id: 1, fullRepository: '/test/sw', owner: 'Jack', stars:  90, repositoryLink: 'https://github.com/mkristian1/search-forks'},
        {id: 2, fullRepository: '/testR/qa', owner: 'Kris', stars: 40, repositoryLink: 'https://github.com/mkristian1/search-forks'},
        {id: 3, fullRepository: '/newprojevt/qa', owner: 'Ruben', stars: 40, repositoryLink: 'https://github.com/mkristian1/search-forks'},
        {id: 4, fullRepository: '/testR/qa', owner: 'Grish', stars: 40, repositoryLink: 'https://github.com/mkristian1/search-forks'},
        {id: 5, fullRepository: '/testR/qa', owner: 'Edgar', stars: 40, repositoryLink: 'https://github.com/mkristian1/search-forks'},
        {id: 6, fullRepository: '/testR/qa', owner: 'Michael', stars: 40, repositoryLink: 'https://github.com/mkristian1/search-forks'},
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