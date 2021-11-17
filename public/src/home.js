function getTotalBooksCount(books) {
  return books.length
}


function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedArray = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false) {
      borrowedArray.push(books[i]);
    }
  }
  let allBorrowed = borrowedArray.length;
  return allBorrowed;
}

function getMostCommonGenres(books) {
  const genre = {}
  for (let i in books) {
    const book = books[i]
    if (genre[book.genre]) {
      genre[book.genre]++
    } else {
      genre[book.genre] = 1
    }
  }
  console.log(genre)
  let countGenre = []
  for (let i in genre) {
    countGenre.push({
      name: i,
      count: genre[i]
    })


  }
  console.log(countGenre)
  countGenre = sortByCount(countGenre)
    .filter((item, i) => i < 5)
  return countGenre
}

function getMostPopularBooks(books) {
  const result = books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  })
  return sortByCount(result)
    .filter((item, i) => i < 5)
}
//helper function inserted here
function sortByCount(array) {
return array.sort((a, b) => b.count - a.count)
}



function getMostPopularAuthors(books, authors) {
let returnArr = [];
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
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
