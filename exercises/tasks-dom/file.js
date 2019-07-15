const books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: true,
      img: 'https://images-na.ssl-images-amazon.com/images/I/41bWcNdTGmL._SX330_BO1,204,203,200_.jpg'
    }, {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: false,
      img: 'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg'
    }
  ];

   books.forEach(book =>{
    
      // return book

      let listed= document.querySelector('#book');
      let listItem= document.createElement('li')
      listItem.innerHTML= `<p>${book.title}, ${book.author}</p> <a href='${book.img}'> <img src='${book.img}'> </a>`
      listed.append(listItem)

     if(book.alreadyRead){
       listItem.classList.add('alreadyread')
     }
  })
  
//console.log(books);

// Use a ul and li to display the books.

// first way to add list item 

/* let output='';

for (let i = 0; i < books.length; i++) {
  
  output += '<li>' + books[i].title+ '</li>';
  output += '<li>' + books[i].author+ '</li>'
  output += '<li>' + books[i].alreadyRead+ '</li>'
}

document.querySelector('#book').innerHTML= output; */

/* 
  styling = document.getElementById('status')
  for (let i =0; i<styling.length; i++){
    if(styling[i].alreadyRead === true){
      styling.style.color = 'red'
    }
    else if(styling[i].alreadyRead == true){
      styling[1].style.color = 'green'

 */
    
    
  

  