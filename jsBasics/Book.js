//Homework 10
export class Book {
    constructor(name, author, year){
        this.name = name
        this.author = author
        this.year = year
    }

    get name() {
        return this._name
    }

    set name(value) {
        if (value.length < 2) {
            console.log("The book name is too short!")
            return;
        }
        this._name = value;
    }

    get author() {
        return this._author
    }

    set author(value) {
        if (value.length < 2) {
            console.log('The author name is too short!')
            return;
        }
        this._author = value
    }

    get year() {
        return this._year
    }

    set year(value) {
        if (value.toString().length < 4) {
            console.log('The year of book is incorrect!')
            return;
        }
        this._year = value;
        
    }

    static booksCount(books) {
        const years = []
        const oldest_book_names = []
        for (const book_obj of books) {
            years.push(book_obj.year)
        }
        console.log(years)
        
        const sorted_years = years.sort()
        const min_year = sorted_years[0]
        
        for (const book_obj of books) {
            if (book_obj.year === min_year) {
                oldest_book_names.push(book_obj.name)    
            }
        }
        return oldest_book_names
    }

    printInfo() {
        console.log(`This book with the name ${this.name} was written by author ${this.author} in ${this.year} year.`)
    }
}

const book1 = new Book("'Some book name 1'", "Tom Smith", 2015)
const book2 = new Book("'Some book name 2'", "Jack Black", 2009)
const book3 = new Book("'Some book name 3'", "J", 2024)

book1.printInfo()
book2.printInfo()
book3.printInfo()