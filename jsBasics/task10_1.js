import { Book } from './Book.js';
import { EBook } from './EBook.js';

const book1 = new Book("'Some book name 1'", 'Tom Smith', 2008);
const book2 = new Book("'Some book name 2'", 'Jack Black', 2009);
const book3 = new Book("'Some book name 3'", 'Arthur Dow', 2009);
const book4 = new EBook("'Some book name 4'", 'Judy Wind', 2008, 'FB2');

const books = [book1, book2, book3, book4];

const oldest_books_names = Book.booksCount(books);
console.log(`\nThe list of oldest books: ${oldest_books_names}\n\n`);

const new_ebook_obj = EBook.reformat(book3);
console.log(new_ebook_obj);
