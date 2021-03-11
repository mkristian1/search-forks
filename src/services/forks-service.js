export default class ForkService {
    data = [
        {id: 0, fullRepository: '/test/sw', owner: 'Jack', stars:  90, repositoryLink: 'https://github.com/mkristian1/search-forks'},
        {id: 1, fullRepository: '/testR/qa', owner: 'Kris', stars: 40, repositoryLink: 'https://github.com/mkristian1/search-forks'},
    ]
    getForks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700);
        })
    }
}