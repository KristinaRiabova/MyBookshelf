function Book(title, authors, numberOfPages, isRead, isFavorite) {
  this.title = title;
  this.authors = authors;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
  this.isFavorite = isFavorite;

  this.markAsRead = function() {
    this.isRead = true;
  };

  this.toggleFavorite = function() {
    this.isFavorite = !this.isFavorite;
  };
}


let bookInstance = new Book('LalaLend', 'Brown, Tim del Ray', 200, false, false);


console.log(bookInstance); 
bookInstance.markAsRead(); 
bookInstance.toggleFavorite(); 
console.log(bookInstance);
