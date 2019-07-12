const books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false
    }, {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true
    }
  ];

   books.forEach(book =>{
    
      return book
     
  })
  
console.log(books);



let output='';

for (let i = 0; i < books.length; i++) {
  
  output += '<li>' + books[i].title+ '</li>';
  output += '<li>' + books[i].author+ '</li>'
}

document.querySelector('#book').innerHTML= output;


  //styling = document.getElementById('status')
  // for (let i =0; i<styling.length; i++){
  //   if(styling[i].alreadyRead === true){
  //     styling.style.color = 'red'
  //   }
    // else if(styling[i].alreadyRead == true){
    //   styling[1].style.color = 'green'
    
    
  

  