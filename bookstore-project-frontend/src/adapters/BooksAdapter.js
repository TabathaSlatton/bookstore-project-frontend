class BooksAdapter {
// in charge of talking to the backend
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/books'
    }

    getBooks() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    // createBook(value) {
    //     const book = {
            
    //     }
    //     return fetch(this.baseUrl, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ book })
    //     })
    //     .then(res => res.json())
    // }
}
