let button = document.querySelector('#btn')
button.addEventListener('click', ()=>{
  let city= document.querySelector('.inpt').value;
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ac731e61d18f2ff0e0c877aef04eaf71`)
  .then(function(resp) { return resp.json() })
.then(function(data) {
  console.log(data);
});


});

