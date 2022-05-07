class Books {
    constructor() {
        this.books = []
        this.adapter = new BooksAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadBooks()
    }

    // bindEventListeners() {
        // get elements by ids and add needed event listeners
    // }

    fetchAndLoadBooks() {
        this.adapter.getBooks()
        .then(books => {
            books.forEach(book => this.books.push(new Book(book)))
        })
        .then(() => {
            this.render();
        })
    }

    render() {
        const booksContainer = document.getElementById('books-container');
        // render each book in books container on home page
    } 
}