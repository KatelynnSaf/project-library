function findAuthorById(authors, id) {
  const findAuthor = authors.find((author) => author.id === id)
  return findAuthor
}

function findBookById(books, id) {
  const findBook = books.find((book) => book.id === id)
  return findBook
}


function partitionBooksByBorrowedStatus(books) {
  //using filter to create an array
  let booksBorrowed = books.filter((book) => book.borrows[0].returned === false);
  //use filter create returned array 
  let returned= books.filter((book) => book.borrows[0].returned !== false);
  //combining arrarys here please work
  return [booksBorrowed, returned];
}

function getBorrowersForBook(book, accounts) {
  
  let result = book.borrows.map(borrower => { 
   let result = accounts.find(account => borrower.id === account.id )
   result.returned = borrower.returned 
   
   return result
  })
  console.log(result)
  return result.filter((borrower, i)=> result.findIndex(item => item.id === borrower.id) === i) 

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
