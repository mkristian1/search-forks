export default class ForkService {
    data = [
        {name:'text', path: "url"},
    ]
    getForks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700);
        })
    }
}