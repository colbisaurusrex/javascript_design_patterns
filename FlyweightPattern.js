/* Flyweight Pattern */

// TLDR: solution for optimizing code that is repetitive, slow and inefficiently shares data. Aims to minimize the use of memory in an application by sharing as much data asa possible with related data.

// Before optimization - this works fine for a small number of books
var Book = function( 
    id, title, author, genre, pageCount,publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate,availability 
    ){
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount; this.publisherID = publisherID; this.ISBN = ISBN;
    this.checkoutDate = checkoutDate; this.checkoutMember = checkoutMember; this.dueReturnDate = dueReturnDate; this.availability = availability;
};



Book.prototype = {
    getTitle: function () { 
        return this.title;
    },
    getAuthor: function () { 
        return this.author;
    },
    getISBN: function (){ 
        return this.ISBN;
    },
    // For brevity, other getters are not shown
    updateCheckoutStatus: function( 
        bookID, newStatus, checkoutDate, checkoutMember, newReturnDate ){
        this.id = bookID;
        this.availability = newStatus; 
        this.checkoutDate = checkoutDate; 
        this.checkoutMember = checkoutMember; 
        this.dueReturnDate = newReturnDate;
    },
    extendCheckoutPeriod: function( bookID, newReturnDate ){
        this.id = bookID; 
        this.dueReturnDate = newReturnDate;
    },
    isPastDue: function(bookID){
        var currentDate = new Date();
        return currentDate.getTime() > Date.parse( this.dueReturnDate );
    }
}

// Flyweight Optimization

// extrinsic values have been removed
var Book = function ( title, author, genre, pageCount, publisherID, ISBN ) {
    this.title = title;
    this.author = author; 
    this.genre = genre; 
    this.pageCount = pageCount; 
    this.publisherID = publisherID; 
    this.ISBN = ISBN;
};

var BookFactory = (function () {
    var existingBooks = {}, existingBook;
    return {
        createBook: function ( title, author, genre, pageCount, publisherID, ISBN ) {
        // Find out if a particular book meta-data combination has been created before 
            existingBook = existingBooks[ISBN];
            if ( !!existingBook ) {
                return existingBook; 
            } else {
        // if not, let's create a new instance of the book and store it
                var book = new Book( title, author, genre, pageCount, publisherID, ISBN ); existingBooks[ISBN] = book;
                return book;
            } 
        }
    }; 
});

// The result of these changes is that all of the data that’s been extracted from the Book class is now being stored in an attribute of the BookManager singleton (BookDatabase)— something considerably more efficient than the large number of objects we were pre- viously using. 
var BookRecordManager = (function () {
    var bookRecordDatabase = {};
    return {
    // add a new book into the library system
        addBookRecord: function ( 
            id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability ) 
        {
            var book = bookFactory.createBook( 
                title, author, genre, pageCount, publisherID, ISBN 
            );
            bookRecordDatabase[id] = { 
                checkoutMember: checkoutMember, 
                checkoutDate: checkoutDate, 
                dueReturnDate: dueReturnDate, 
                availability: availability, 
                book: book
            }; 
        },
        updateCheckoutStatus: function ( 
            bookID, newStatus, checkoutDate, checkoutMember, newReturnDate 
            ) {
                var record = bookRecordDatabase[bookID]; 
                record.availability = newStatus; 
                record.checkoutDate = checkoutDate; 
                record.checkoutMember = checkoutMember; 
                record.dueReturnDate = newReturnDate;
            },
        extendCheckoutPeriod: function ( bookID, newReturnDate ) {
                bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
        },

        isPastDue: function ( bookID ) {
            var currentDate = new Date();
            return currentDate.getTime() > Date.parse( bookRecordDatabase[bookID].dueReturnDate );
        },
    };
}); 
/*
    Notes:
        - This pattern is concerned with separating intrinsic and extrinsic data to save memory
        - Primarily used in Java and C++
*/