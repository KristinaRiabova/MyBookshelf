class Bookshelf {
  constructor(books) {
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(bookToRemove) {
    this.books = this.books.filter((book) => {
      return (
        book.title !== bookToRemove.title ||
        book.read !== bookToRemove.read ||
        book.favorite !== bookToRemove.favorite
      );
    });
  }

  getUnreadBooks() {
    return this.books.filter((book) => !book.read);
  }

  getFavBooks() {
    return this.books.filter((book) => book.favorite);
  }
}

const shelf = new Bookshelf([]);

shelf.addBook({ title: 'Black', read: false, favorite: true });
shelf.addBook({ title: 'Yellow', read: false, favorite: true });
shelf.addBook({ title: 'Blue', read: false, favorite: false });
shelf.addBook({ title: 'White', read: false, favorite: true });
shelf.addBook({ title: 'Purple', read: false, favorite: false });
shelf.addBook({ title: 'Dark', read: true, favorite: true });

const bookToRemove = { title: 'Yellow', read: false, favorite: true };
shelf.removeBook(bookToRemove);

const unreadBooks = shelf.getUnreadBooks();
const favBooks = shelf.getFavBooks();

console.log('Unread Books:', unreadBooks);
console.log('Favorite Books:', favBooks);




