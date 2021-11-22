function findAccountById(accounts, id) {
  //matching an arrray of account objects by using single account id object. Utilizing find method and arrow functions.
  const matchAccount = accounts.find((account) =>
  account.id ===id, {});
  return matchAccount;
}

function sortAccountsByLastName(accounts) {
  //The objects are sorted alphabetically by last name using sort method and if elseif statement.
  let lastName = accounts.sort(function(a,b){
    if(a.name.last > b.name.last) return 1;
    else if (b.name.last > a.name.last) return -1;
    return 0;
  })
  //returns a sorted array of the provided account objects
  return lastName
  
}

function getTotalNumberOfBorrows(account, books) {
  //uses arrow functions to create the result object and used short hand by using the reduced method.  
  let result = books.reduce((acc, book) => {
    for(let i = 0; i < book.borrows.length; i++) 
    {
      if(book.borrows[i].id === account.id) 
      {
      acc++
    }}
    return acc
  },0)
  return result
  //passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
}

function getBooksPossessedByAccount(account, books, authors) {
  //filter() method operates on an array of items and returns a new array of items that matchs currently checked out books
  //return array of book objects with the author object nested inside it using boolean, some method, map method, and filter method.
  return books.filter((book) => book.borrows.some(acc => acc.id === account.id && acc.returned === false))
              .map(book => { let author = authors.find(author => author.id === book.authorId)
                book.author = author; return book         
              })

}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
