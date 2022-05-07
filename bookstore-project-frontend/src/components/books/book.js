class Book {
    constructor(bookJSON) {
        this.id = bookJSON.id
        this.title = bookJSON.title
        this.author = bookJSON.author
        this.owned = bookJSON.owned
        this.coverImgUrl = bookJSON.coverImgUrl
        this.shelfId = bookJSON.shelfId
        this.genre = bookJSON.genre
    }
}