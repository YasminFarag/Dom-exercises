
  // JS 
  
  document.querySelector('.dropdown').addEventListener('mouseover',openMenu)

  function openMenu(){
      document.querySelector('.dropdown-content').classList.toggle('show')


  }



  // jQuery


  $('.dropdown').addEventListener('mouseover',openMenu)
  function openMenu(){
    $('.dropdown-content').toggleClass('show')
  }