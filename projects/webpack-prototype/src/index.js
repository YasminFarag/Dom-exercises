let button = document.querySelector('#btn')
button.addEventListener('click', ()=>{
  let city= document.querySelector('.inpt').value;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ac731e61d18f2ff0e0c877aef04eaf71`
  fetch(url)
  .then(function(resp) { return resp.json() })
.then(function(data) {
  weatherdemo(data);
  console.log(data.main.temp)
});


});

function weatherdemo(serverRequest){
  /* switch(serverRequest.weather[0].main){
    case 'Clear':
    document.body.style.backgroundColor= 'blue'
    break;

    case 'Clouds':
    document.body.style.backgroundImage= 'url("clouds.jpg")'
    break;

    case 'Rain':
    case 'Drizzle':
    case 'Mist':
    document.body.style.backgroundImage= 'url("rainy.jpg")'
    break;

    case 'thunderstorm':
    document.body.style.backgroundImage= 'url("lightning.jpg")'

    break;

    case 'Snow':
    document.body.style.backgroundImage= 'url("snowy.jpg")'

    break;
    default:


    break;
  } */





let weatherDescription= document.querySelector('weatherdescription')
let humidity= document.querySelector('#humidty');
let tempreature= document.querySelector('#tempreature');
let wind= document.querySelector('#wind');

let result = serverRequest.weather[0].description
weatherDescription.innerText= result

};


