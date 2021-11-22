function getTotalBooksCount(books) {
  //return the total book count of the library
  return books.length
}


function getTotalAccountsCount(accounts) {
  //returns the total accounts in the library
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedArray = [];
  //creates an empty array
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false) {
      //if book is checked out and not returned will be displayed as false
      borrowedArray.push(books[i]);
    }
  }
  let allBorrowed = borrowedArray.length;
  //checked out books array
  return allBorrowed;
}

function getMostCommonGenres(books) {
  const genre = {}
  //array of genres
  for (let i in books) {
    const book = books[i]
    if (genre[book.genre]) {
      genre[book.genre]++
      //genre added
    } else {
      genre[book.genre] = 1
    }
  }
  console.log(genre)
  let countGenre = []
  //count genre array
  for (let i in genre) {
    countGenre.push({
      name: i,
      //counts number in genre
      count: genre[i]
    })


  }
  console.log(countGenre)
  countGenre = sortByCount(countGenre)
  //sorts genre and holds number of each genre fewer than 5
    .filter((item, i) => i < 5)
  return countGenre
}

function getMostPopularBooks(books) {
  const result = books.map(book => {
    //pulls name and title and the amount of times borrowed
    return {
      name: book.title,
      count: book.borrows.length
    }
  })
  return sortByCount(result)
  //organizes and makes fewer than 5 genres
    .filter((item, i) => i < 5)
}
//helper function inserted here
function sortByCount(array) {
  //sorts by largest(most popular) first
return array.sort((a, b) => b.count - a.count)
}



function getMostPopularAuthors(books, authors) {
let returnArr = [];
//creates an empty array
  authors.forEach(author => {
    let returnAuthor = { 
      name: `${author.name.first} ${author.name.last}`, 
      count: 0
    }
    books.forEach(book => {
      if (book.authorId === author.id) {
        returnAuthor.count += book.borrows.length
      }
    })
    returnArr.push(returnAuthor)
  })
  return returnArr.sort((a,b) => b.count - a.count).slice(0, 5)
  //sorts authors by most popular first by comparing arrays
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
