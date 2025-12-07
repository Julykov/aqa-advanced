//Homework 10
import {Book} from './Book.js'

export class EBook extends Book {
    constructor(name='Unknown name', author='Unknown author', year=null, format){
        super(name, author, year)
        this.format = format
    }

    get format() {
        return this._format
    }

    set format(value) {
        if (value !== 'PDF' && value != "FB2") {
            console.log('The format of the book is incorrect!')
            return
        }
        this._format = value
    }

    static reformat(obj) {
        //todo
    }


    printInfo(){
        console.log(`This book with name ${this.name} was written by this author ${this.author} in ${this.year} year in the ${this.format} format.`)
    }
}

const ebook = new EBook("f", "s", 20 ,"PDF")
ebook.printInfo()
const ebook2 = new EBook("Some book name 5", "Jane Brawn", 2019 ,"FB2")
ebook2.printInfo()
const ebook3 = new EBook("Some book name 6", "Jane White", 2001 ,"TXT")
ebook3.printInfo()