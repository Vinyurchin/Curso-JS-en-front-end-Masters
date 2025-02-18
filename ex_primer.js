function addFavoriteBook(bookName) {
    if(!bookName.includes("Great")) {
        favoriteBooks.push(bookName);
    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

console.log(favoriteBooks);